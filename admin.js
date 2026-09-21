/* =============================================================================
   Admin board.

   Two jobs: a portfolio roll-up across sellers, and forensics on any single
   run — every tool call with the exact input it was given and the exact output
   it returned, in order, with the hashes that tie them to the audit log.

   Read-only by design. Approving from an oversight screen would record the
   decision against nobody; approval stays on the seller/action flow.
   ============================================================================= */

(function () {
  "use strict";

  var session = Auth.require("admin");
  if (!session) return;

  var fmt = SG.fmt;
  var esc = SG.esc;

  var banner = document.getElementById("banner");
  var bannerText = document.getElementById("banner-text");
  var demoBanner = document.getElementById("demo-banner");
  var apiInput = document.getElementById("api-base");
  var drawer = document.getElementById("drawer");
  var backdrop = document.getElementById("drawer-backdrop");

  var state = { sellers: [], workflows: [], filter: "" };

  /* ---------------------------------------------------------------------- */
  /* Connection                                                              */
  /* ---------------------------------------------------------------------- */

  function showError(message) {
    bannerText.textContent = message;
    banner.hidden = false;
    apiInput.value = SG.baseUrl();
  }

  function enterDemo() {
    SG.demoMode = true;
    banner.hidden = true;
    demoBanner.hidden = false;
    loadAll();
  }

  function connect() {
    banner.hidden = true;
    return SG.health()
      .then(function () {
        SG.demoMode = false;
        demoBanner.hidden = true;
        return loadAll();
      })
      .catch(function (error) {
        showError(
          error.code === "NETWORK"
            ? "Không kết nối được backend tại " + SG.baseUrl() + "."
            : error.message
        );
      });
  }

  document.getElementById("api-save").addEventListener("click", function () {
    SG.setBaseUrl(apiInput.value);
    connect();
  });
  document.getElementById("use-demo").addEventListener("click", enterDemo);
  document.getElementById("retry-connect").addEventListener("click", connect);
  document.getElementById("refresh").addEventListener("click", function () {
    SG.demoMode ? loadAll() : connect();
  });
  document.getElementById("logout").addEventListener("click", Auth.logout);

  /* ---------------------------------------------------------------------- */
  /* Rendering: KPIs                                                         */
  /* ---------------------------------------------------------------------- */

  function renderKpis(stats) {
    var bands = stats.risk_bands || {};
    var cards = [
      { label: "Gian hàng", value: stats.sellers, sub:
        (bands.LOW || 0) + " thấp · " + (bands.MEDIUM || 0) + " trung bình · " + (bands.HIGH || 0) + " cao" },
      { label: "Hồ sơ đã chạy", value: stats.workflows, sub: stats.actions + " đề xuất được tạo" },
      { label: "Chờ phê duyệt", value: stats.awaiting_approval,
        sub: "cần người thật quyết định", alert: stats.awaiting_approval > 0 },
      { label: "Đã giải ngân", value: fmt.compact(stats.executed_total), unit: "VND",
        sub: "mock execution" },
      { label: "Tổng dư nợ", value: fmt.compact(stats.total_exposure), unit: "VND",
        sub: "vay + phải trả NCC" },
    ];

    document.getElementById("kpis").innerHTML = cards
      .map(function (c) {
        return (
          '<div class="kpi' + (c.alert ? " is-alert" : "") + '">' +
          '<div class="kpi-label">' + esc(c.label) + "</div>" +
          '<div class="kpi-value">' + esc(c.value === undefined ? "—" : c.value) +
          (c.unit ? '<span class="unit">' + esc(c.unit) + "</span>" : "") + "</div>" +
          '<div class="kpi-sub">' + esc(c.sub || "") + "</div></div>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------------------- */
  /* Rendering: sellers                                                      */
  /* ---------------------------------------------------------------------- */

  function renderSellers(sellers) {
    state.sellers = sellers;
    document.getElementById("sellers-count").textContent = sellers.length + " gian hàng";

    if (!sellers.length) {
      document.getElementById("sellers-body").innerHTML =
        '<tr><td colspan="8" class="empty">Chưa có gian hàng nào.</td></tr>';
      return;
    }

    document.getElementById("sellers-body").innerHTML = sellers
      .map(function (s) {
        return (
          "<tr>" +
          "<td><div class='seller-name'>" + esc(s.display_name) + "</div>" +
          "<div class='seller-id'>" + esc(s.seller_id) + "</div></td>" +
          '<td><strong class="risk-' + esc(s.risk_band) + '">' + esc(s.risk_band) + "</strong></td>" +
          '<td class="num">' + fmt.pct(s.pd) + "</td>" +
          '<td class="num">' + fmt.vnd(s.recommended_credit_limit) + "</td>" +
          '<td class="num">' + fmt.vnd(s.exposure) + "</td>" +
          '<td class="num">' + fmt.vnd(s.total_executed) + "</td>" +
          '<td class="num">' + esc(s.workflow_count) +
          (s.awaiting_approval
            ? ' <span class="badge badge-warn">' + esc(s.awaiting_approval) + " chờ</span>"
            : "") +
          "</td>" +
          "<td>" + (s.latest_status ? statusBadge(s.latest_status) : "—") +
          "<div class='seller-id'>" + fmt.dt(s.latest_at) + "</div></td>" +
          "</tr>"
        );
      })
      .join("");

    var filter = document.getElementById("seller-filter");
    filter.innerHTML =
      '<option value="">Tất cả gian hàng</option>' +
      sellers
        .map(function (s) {
          return '<option value="' + esc(s.seller_id) + '">' + esc(s.display_name) + "</option>";
        })
        .join("");
    filter.value = state.filter;
  }

  /* ---------------------------------------------------------------------- */
  /* Rendering: workflows                                                    */
  /* ---------------------------------------------------------------------- */

  var STATUS_BADGE = {
    WAITING_APPROVAL: ["badge-warn", "CHỜ DUYỆT"],
    PROPOSAL_CREATED: ["badge-info", "ĐÃ ĐỀ XUẤT"],
    POLICY_REJECTED: ["badge-bad", "CHÍNH SÁCH TỪ CHỐI"],
    NO_ACTION_NEEDED: ["badge-ok", "KHÔNG CẦN VỐN"],
    EXECUTED: ["badge-ok", "ĐÃ GIẢI NGÂN"],
    APPROVED: ["badge-ok", "ĐÃ DUYỆT"],
    REJECTED: ["badge-bad", "ĐÃ TỪ CHỐI"],
    AWAITING_APPROVAL: ["badge-warn", "CHỜ DUYỆT"],
    FAILED_TOOL: ["badge-bad", "LỖI CÔNG CỤ"],
    REPLAN_REQUIRED: ["badge-info", "CẦN LẬP LẠI"],
  };

  function statusBadge(status) {
    var meta = STATUS_BADGE[status] || ["badge-muted", status];
    return '<span class="badge ' + meta[0] + '">' + esc(meta[1]) + "</span>";
  }

  function renderWorkflows(workflows) {
    state.workflows = workflows;
    var rows = state.filter
      ? workflows.filter(function (w) { return w.seller_id === state.filter; })
      : workflows;

    if (!rows.length) {
      document.getElementById("workflows-body").innerHTML =
        '<tr><td colspan="7" class="empty">Chưa có hồ sơ nào chạy.</td></tr>';
      return;
    }

    document.getElementById("workflows-body").innerHTML = rows
      .map(function (w) {
        return (
          '<tr class="clickable" data-workflow="' + esc(w.workflow_id) + '">' +
          "<td><div>" + fmt.dt(w.created_at) + "</div>" +
          "<div class='seller-id'>" + esc(w.orchestrator) + "</div></td>" +
          "<td>" + esc(w.display_name) + "</td>" +
          "<td style='max-width:280px'>" + esc(w.user_message || "—") + "</td>" +
          "<td>" + statusBadge(w.status) +
          (w.errors ? ' <span class="badge badge-bad">' + esc(w.errors) + " lỗi</span>" : "") +
          "</td>" +
          '<td class="num">' + (w.capital_need ? fmt.vnd(w.capital_need) : "—") + "</td>" +
          '<td class="num">' + (w.loan_amount ? fmt.vnd(w.loan_amount) : "—") + "</td>" +
          '<td class="num">' + esc(w.tool_calls) + "</td>" +
          "</tr>"
        );
      })
      .join("");
  }

  document.getElementById("seller-filter").addEventListener("change", function (event) {
    state.filter = event.target.value;
    renderWorkflows(state.workflows);
  });

  document.getElementById("workflows-body").addEventListener("click", function (event) {
    var row = event.target.closest("[data-workflow]");
    if (row) openDrawer(row.dataset.workflow);
  });

  /* ---------------------------------------------------------------------- */
  /* Drawer: one run in full                                                 */
  /* ---------------------------------------------------------------------- */

  function kv(pairs) {
    return (
      '<dl class="kv">' +
      pairs
        .map(function (p) {
          return "<div><dt>" + esc(p[0]) + "</dt><dd>" + p[1] + "</dd></div>";
        })
        .join("") +
      "</dl>"
    );
  }

  function json(value) {
    return '<pre class="json">' + esc(JSON.stringify(value, null, 2)) + "</pre>";
  }

  function renderOverview(d) {
    var f = d.facts || {};
    var policy = d.policy_decision || {};
    var html =
      kv([
        ["Trạng thái", statusBadge(d.status)],
        ["Gian hàng", esc(d.display_name)],
        ["Bộ điều phối", esc(d.orchestrator)],
        ["Bắt đầu", fmt.dt(d.created_at)],
      ]) +
      "<div class='sub-head'>Câu hỏi của người bán</div>" +
      '<div class="card" style="margin-bottom:14px">' + esc(d.user_message || "—") + "</div>";

    if (f.capital_need !== undefined) {
      html +=
        "<div class='sub-head'>Số liệu quyết định (từ engine tất định)</div>" +
        kv([
          ["Nhu cầu vốn", fmt.vnd(f.capital_need) + " " + esc(f.currency || "VND")],
          ["Tiền mặt", fmt.vnd(f.cash_amount)],
          ["Tín dụng NCC", fmt.vnd(f.supplier_credit_amount)],
          ["Vay ngân hàng", fmt.vnd(f.loan_amount)],
          ["Chi phí tài chính", fmt.vnd(f.estimated_financing_cost)],
          ["Hạn mức khuyến nghị", fmt.vnd(f.recommended_credit_limit)],
          ["PD", fmt.pct(f.pd)],
          ["Nhóm rủi ro", '<span class="risk-' + esc(f.risk_band) + '">' + esc(f.risk_band) + "</span>"],
        ]);
    }

    if (policy.reasons) {
      html +=
        "<div class='sub-head'>Phán quyết chính sách (" + esc(policy.policy_version || "") + ")</div>" +
        '<div class="reason-list">' +
        '<span class="badge ' + (policy.approved ? "badge-ok" : "badge-bad") + '">' +
        (policy.approved ? "CHẤP THUẬN" : "TỪ CHỐI") + "</span>" +
        (policy.requires_human_approval
          ? '<span class="badge badge-warn">CẦN NGƯỜI DUYỆT</span>' : "") +
        policy.reasons
          .map(function (r) { return '<span class="badge badge-muted">' + esc(r) + "</span>"; })
          .join("") +
        "</div>";
    }

    if (d.errors && d.errors.length) {
      html += "<div class='sub-head'>Lỗi công cụ</div>" + json(d.errors);
    }

    html +=
      "<div class='sub-head'>Diễn biến</div><div class='card'>" +
      (d.trace || [])
        .map(function (t) { return '<div class="timeline-line"><span>' + esc(t) + "</span></div>"; })
        .join("") +
      "</div>";

    return html;
  }

  /** The screen that answers "what did the agent actually do". */
  function renderIO(d) {
    var calls = d.tool_calls || [];
    if (!calls.length) return '<div class="empty">Hồ sơ này chưa gọi công cụ nào.</div>';

    return (
      "<p class='kpi-sub' style='margin:0 0 12px'>Mỗi bước dưới đây là một lần gọi công cụ: " +
      "đầu vào đã qua kiểm tra schema, đầu ra do engine trả về, kèm hash để đối chiếu nhật ký.</p>" +
      calls
        .map(function (c) {
          return (
            '<details class="toolcall">' +
            "<summary>" +
            '<span class="step-no">' + esc(c.step) + "</span>" +
            '<span class="tool-name">' + esc(c.tool_name) + "</span>" +
            '<span class="badge ' + (c.success ? "badge-ok" : "badge-bad") + '">' +
            (c.success ? "OK" : "LỖI") + "</span>" +
            '<span class="mono">' + fmt.ms(c.latency_ms) + "</span>" +
            "</summary>" +
            '<div class="toolcall-body">' +
            (c.error_message
              ? '<div class="badge badge-bad" style="margin-top:10px">' + esc(c.error_message) + "</div>"
              : "") +
            '<div class="io-grid">' +
            "<div class='io-col'><h5>Đầu vào</h5>" + json(c.input) + "</div>" +
            "<div class='io-col'><h5>Đầu ra</h5>" + json(c.output) + "</div>" +
            "</div>" +
            '<div class="hashes"><span>in: ' + esc(c.input_hash || "—") + "</span>" +
            "<span>out: " + esc(c.output_hash || "—") + "</span>" +
            "<span>" + fmt.dt(c.created_at) + "</span></div>" +
            "</div></details>"
          );
        })
        .join("")
    );
  }

  function renderAudit(d) {
    var rows = d.audit || [];
    if (!rows.length) return '<div class="empty">Chưa có dòng nhật ký nào.</div>';
    return (
      '<div class="card">' +
      rows
        .map(function (a) {
          return (
            '<div class="timeline-line">' +
            '<span class="timeline-when">' + fmt.dt(a.created_at) + "</span>" +
            "<span style='flex:1'><strong>" + esc(a.agent) + "</strong>" +
            (a.tool_name ? " · <code class='mono'>" + esc(a.tool_name) + "</code>" : "") +
            (a.model ? " · " + esc(a.model) : "") +
            (a.prompt_version ? " · " + esc(a.prompt_version) : "") +
            "</span>" +
            '<span class="badge ' + (a.status === "OK" || a.status === "EXECUTED" ? "badge-ok" : "badge-muted") +
            '">' + esc(a.status) + "</span>" +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderAction(d) {
    if (!d.action) return '<div class="empty">Hồ sơ này không tạo đề xuất nào.</div>';
    var a = d.action;
    var e = d.execution;
    var html =
      kv([
        ["Mã đề xuất", "<code class='mono'>" + esc(a.action_id) + "</code>"],
        ["Số tiền", fmt.vnd(a.amount)],
        ["Trạng thái", statusBadge(a.status)],
        ["Loại", esc(a.action_type)],
        ["Người duyệt", esc(a.approved_by || "—")],
        ["Duyệt lúc", fmt.dt(a.approved_at)],
        ["Hết hạn", fmt.dt(a.expires_at)],
        ["Thực thi lúc", fmt.dt(a.executed_at)],
      ]);

    if (e) {
      html +=
        "<div class='sub-head'>Bút toán giải ngân</div>" +
        kv([
          ["Mã bút toán", "<code class='mono'>" + esc(e.execution_id) + "</code>"],
          ["Nhà cung cấp", esc(e.provider)],
          ["Mã tham chiếu", "<code class='mono'>" + esc(e.provider_reference) + "</code>"],
          ["Trạng thái", statusBadge(e.status)],
        ]);
    }

    if (d.repayment_schedule && d.repayment_schedule.length) {
      html += "<div class='sub-head'>Lịch trả nợ</div>" + json(d.repayment_schedule);
    }
    html += "<div class='sub-head'>Phương án vốn đầy đủ</div>" + json(d.capital_plan);
    return html;
  }

  function openDrawer(workflowId) {
    drawer.hidden = false;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("drawer-title").textContent = "Đang tải…";
    document.getElementById("drawer-sub").textContent = workflowId;
    document.getElementById("panel-overview").innerHTML =
      '<div class="empty"><span class="spinner"></span></div>';
    ["io", "audit", "action"].forEach(function (t) {
      document.getElementById("panel-" + t).innerHTML = "";
    });
    switchTab("overview");

    var fetchDetail = SG.demoMode
      ? Promise.resolve(DEMO.workflowDetail(workflowId))
      : SG.adminWorkflowDetail(workflowId);

    fetchDetail
      .then(function (d) {
        document.getElementById("drawer-title").textContent =
          d.display_name + " — " + d.status;
        document.getElementById("drawer-sub").textContent = d.workflow_id;
        document.getElementById("panel-overview").innerHTML = renderOverview(d);
        document.getElementById("panel-io").innerHTML = renderIO(d);
        document.getElementById("panel-audit").innerHTML = renderAudit(d);
        document.getElementById("panel-action").innerHTML = renderAction(d);
      })
      .catch(function (error) {
        document.getElementById("panel-overview").innerHTML =
          '<div class="msg-error">' + esc(error.message) + "</div>";
      });
  }

  function closeDrawer() {
    drawer.hidden = true;
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  function switchTab(name) {
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      t.classList.toggle("is-active", t.dataset.tab === name);
    });
    ["overview", "io", "audit", "action"].forEach(function (t) {
      document.getElementById("panel-" + t).hidden = t !== name;
    });
  }

  document.getElementById("tabs").addEventListener("click", function (event) {
    var tab = event.target.closest(".tab");
    if (tab) switchTab(tab.dataset.tab);
  });
  document.getElementById("drawer-close").addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !drawer.hidden) closeDrawer();
  });

  /* ---------------------------------------------------------------------- */
  /* Load                                                                    */
  /* ---------------------------------------------------------------------- */

  function loadAll() {
    if (SG.demoMode) {
      renderKpis(DEMO.stats);
      renderSellers(DEMO.adminSellers);
      renderWorkflows(DEMO.workflows);
      return Promise.resolve();
    }
    return Promise.all([SG.adminStats(), SG.adminSellers(), SG.adminWorkflows(null, 100)])
      .then(function (results) {
        renderKpis(results[0]);
        renderSellers(results[1].sellers || []);
        renderWorkflows(results[2].workflows || []);
      })
      .catch(function (error) {
        showError(error.message);
      });
  }

  document.getElementById("role-label").textContent = session.label || "Quản trị viên";
  connect();
})();
