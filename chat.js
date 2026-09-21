/* =============================================================================
   Seller chat.

   One rule drives the whole rendering: the model's prose and the engine's
   numbers are shown as separate things. `explanation` is free text with no
   authority; `facts` is rendered field by field straight from the backend and
   is the only place a number ever comes from. A frontend that parsed amounts
   out of the prose would defeat the point of the architecture.
   ============================================================================= */

(function () {
  "use strict";

  var session = Auth.require("seller");
  if (!session) return;

  var fmt = SG.fmt;
  var esc = SG.esc;

  var thread = document.getElementById("thread");
  var form = document.getElementById("composer");
  var input = document.getElementById("message");
  var sendBtn = document.getElementById("send");
  var picker = document.getElementById("seller-picker");
  var demoBanner = document.getElementById("demo-banner");
  var apiInput = document.getElementById("api-base");

  var busy = false;

  /* ---------------------------------------------------------------------- */
  /* Connection                                                              */
  /* ---------------------------------------------------------------------- */

  function enterDemo(reason) {
    SG.demoMode = true;
    demoBanner.hidden = false;
    if (reason) {
      var tidy = /[.!?]$/.test(reason) ? reason : reason + ".";
      document.getElementById("demo-note").textContent =
        "— " + tidy + " Bấm Kết nối backend để dùng dữ liệu thật.";
    }
    apiInput.value = SG.baseUrl();
    return loadSellers();
  }

  function connect() {
    return SG.health()
      .then(function () {
        SG.demoMode = false;
        demoBanner.hidden = true;
        return loadSellers();
      })
      .catch(function (error) {
        // No backend reachable. Show the frozen snapshot rather than a dead
        // end, clearly banner-labelled so nobody mistakes it for live data.
        return enterDemo(
          error.code === "NETWORK"
            ? "không kết nối được backend tại " + SG.baseUrl() + "."
            : error.message
        );
      });
  }

  document.getElementById("api-save").addEventListener("click", function () {
    SG.setBaseUrl(apiInput.value);
    connect();
  });

  document.getElementById("logout").addEventListener("click", Auth.logout);

  /* ---------------------------------------------------------------------- */
  /* Seller picker                                                           */
  /* ---------------------------------------------------------------------- */

  function renderSellers(list) {
    picker.innerHTML = list
      .map(function (s) {
        return (
          '<option value="' + esc(s.seller_id) + '">' +
          esc(s.display_name || s.seller_id) +
          "</option>"
        );
      })
      .join("");
    var known = list.some(function (s) {
      return s.seller_id === session.sellerId;
    });
    if (!known && list.length) {
      session = Auth.update({ sellerId: list[0].seller_id });
    }
    picker.value = session.sellerId;
  }

  function loadSellers() {
    if (SG.demoMode) {
      renderSellers(DEMO.sellers);
      return Promise.resolve();
    }
    return SG.listSellers()
      .then(function (data) {
        renderSellers(data.sellers || []);
      })
      .catch(function () {
        renderSellers([{ seller_id: session.sellerId, display_name: session.sellerId }]);
      });
  }

  picker.addEventListener("change", function () {
    session = Auth.update({ sellerId: picker.value });
    thread.innerHTML = "";
    welcome();
  });

  /* ---------------------------------------------------------------------- */
  /* Rendering                                                               */
  /* ---------------------------------------------------------------------- */

  function scrollDown() {
    thread.scrollTop = thread.scrollHeight;
  }

  function welcome() {
    var node = document.createElement("div");
    node.className = "welcome";
    node.innerHTML =
      "<h2>Xin chào</h2><p>Hỏi tôi về nhu cầu vốn lưu động, tồn kho hay hạn mức tín dụng " +
      "của gian hàng. Tôi sẽ chạy dự báo, chấm rủi ro, tối ưu nguồn vốn và trình bày " +
      "phương án để bạn duyệt.</p>";
    thread.appendChild(node);
  }

  function addUser(text) {
    var node = document.createElement("div");
    node.className = "msg-user";
    node.textContent = text;
    thread.appendChild(node);
    scrollDown();
  }

  function addBot(buildInner) {
    var wrap = document.createElement("div");
    wrap.className = "msg-bot";
    wrap.innerHTML =
      '<span class="msg-avatar"><img src="assets/logo.webp" alt="" /></span>' +
      '<div class="msg-content"></div>';
    var content = wrap.querySelector(".msg-content");
    buildInner(content);
    thread.appendChild(wrap);
    scrollDown();
    return content;
  }

  function thinking() {
    return addBot(function (content) {
      content.innerHTML =
        '<div class="thinking"><span class="spinner"></span>' +
        "<span>Đang chạy dự báo → rủi ro → tối ưu vốn → chính sách…</span></div>";
    }).parentNode;
  }

  var STATUS_BADGE = {
    WAITING_APPROVAL: ["badge-warn", "CHỜ DUYỆT"],
    PROPOSAL_CREATED: ["badge-info", "ĐÃ TẠO ĐỀ XUẤT"],
    POLICY_REJECTED: ["badge-bad", "CHÍNH SÁCH TỪ CHỐI"],
    NO_ACTION_NEEDED: ["badge-ok", "KHÔNG CẦN VỐN"],
    EXECUTED: ["badge-ok", "ĐÃ GIẢI NGÂN"],
    FAILED_TOOL: ["badge-bad", "LỖI CÔNG CỤ"],
  };

  function statusBadge(status) {
    var meta = STATUS_BADGE[status] || ["badge-muted", status];
    return '<span class="badge ' + meta[0] + '">' + esc(meta[1]) + "</span>";
  }

  var SOURCE_NOTE = {
    gemini: "Diễn giải bởi Gemini · mọi số đã được đối chiếu với kết quả công cụ",
    template: "Diễn giải bằng mẫu tất định (mô hình không khả dụng)",
    template_fallback:
      "⚠ Diễn giải của mô hình bị loại vì chứa số không khớp công cụ — đã thay bằng mẫu tất định",
  };

  /** The authoritative numbers, rendered field by field from the backend. */
  function renderFacts(facts) {
    if (!facts || facts.capital_need === undefined) return "";

    var cur = facts.currency || "VND";
    var rows = [
      ["Nhu cầu vốn", fmt.vnd(facts.capital_need), cur],
      ["Tiền mặt dùng", fmt.vnd(facts.cash_amount), cur],
      ["Tín dụng NCC", fmt.vnd(facts.supplier_credit_amount), cur],
      ["Vay ngân hàng", fmt.vnd(facts.loan_amount), cur],
      ["Chi phí tài chính", fmt.vnd(facts.estimated_financing_cost), cur],
      ["Hạn mức khuyến nghị", fmt.vnd(facts.recommended_credit_limit), cur],
      ["Nhóm rủi ro", facts.risk_band || "—", ""],
      ["PD", fmt.pct(facts.pd), ""],
    ];
    if (facts.projected_stockout_days !== undefined && facts.projected_stockout_days !== null) {
      rows.push(["Còn đủ hàng bán", Number(facts.projected_stockout_days).toFixed(1), "ngày"]);
    }

    var grid = rows
      .map(function (r) {
        return (
          '<div class="fact"><div class="fact-label">' + esc(r[0]) + "</div>" +
          '<div class="fact-value">' + esc(r[1]) +
          (r[2] ? '<span class="unit">' + esc(r[2]) + "</span>" : "") +
          "</div></div>"
        );
      })
      .join("");

    var total =
      Number(facts.cash_amount || 0) +
      Number(facts.supplier_credit_amount || 0) +
      Number(facts.loan_amount || 0);
    var split = "";
    if (total > 0) {
      var pc = function (v) {
        return ((Number(v || 0) / total) * 100).toFixed(2) + "%";
      };
      split =
        '<div class="split"><div class="split-bar">' +
        '<div class="split-seg split-cash" style="width:' + pc(facts.cash_amount) + '"></div>' +
        '<div class="split-seg split-supplier" style="width:' + pc(facts.supplier_credit_amount) + '"></div>' +
        '<div class="split-seg split-loan" style="width:' + pc(facts.loan_amount) + '"></div>' +
        "</div><div class='split-legend'>" +
        '<span><i class="swatch split-cash"></i>Tiền mặt ' + pc(facts.cash_amount) + "</span>" +
        '<span><i class="swatch split-supplier"></i>Tín dụng NCC ' + pc(facts.supplier_credit_amount) + "</span>" +
        '<span><i class="swatch split-loan"></i>Vay ngân hàng ' + pc(facts.loan_amount) + "</span>" +
        "</div></div>";
    }

    return (
      '<div class="facts"><div class="facts-head">' +
      "<h4>Số liệu từ công cụ tất định</h4>" +
      '<span class="badge badge-muted">nguồn: engine</span>' +
      '</div><div class="facts-grid">' + grid + "</div>" + split + "</div>"
    );
  }

  function renderTrace(trace) {
    if (!trace || !trace.length) return "";
    var steps = trace
      .map(function (line) {
        var bad = /ERROR|FAILED|REQUIRED|MISMATCH|NOT_/.test(line);
        return (
          '<div class="trace-step"><span class="' + (bad ? "bad" : "ok") + '">' +
          (bad ? "✕" : "✓") + "</span><span>" + esc(line) + "</span></div>"
        );
      })
      .join("");
    return (
      '<details class="trace"><summary>Các bước công cụ đã chạy (' +
      trace.length + ")</summary><div class='trace-body'>" + steps + "</div></details>"
    );
  }

  function renderAction(result) {
    if (!result.action_id) return "";
    var waiting = result.status === "WAITING_APPROVAL" || result.status === "PROPOSAL_CREATED";
    return (
      '<div class="action-card" data-action="' + esc(result.action_id) + '">' +
      '<div class="action-top"><span class="action-amount">' +
      fmt.vnd(result.facts.capital_need) + " " + esc(result.facts.currency || "VND") +
      "</span>" + statusBadge(result.status) + "</div>" +
      '<div class="action-meta">Mã đề xuất <code class="mono">' + esc(result.action_id) +
      "</code>" + (waiting ? " · cần bạn phê duyệt trước khi giải ngân" : "") + "</div>" +
      (waiting
        ? '<div class="action-buttons">' +
          '<button class="btn btn-ok btn-sm" data-do="approve">Phê duyệt</button>' +
          '<button class="btn btn-bad btn-sm" data-do="reject">Từ chối</button>' +
          "</div>"
        : "") +
      '<div class="action-result"></div></div>'
    );
  }

  function renderResult(result) {
    addBot(function (content) {
      content.innerHTML =
        '<div class="explanation">' + esc(result.explanation || "(không có diễn giải)") + "</div>" +
        '<div class="source-tag">' +
        esc(SOURCE_NOTE[result.explanation_source] || result.explanation_source) +
        "</div>" +
        renderFacts(result.facts) +
        renderAction(result) +
        renderTrace(result.trace_summary);

      var card = content.querySelector(".action-card");
      if (card) wireAction(card, result.action_id);
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Action lifecycle                                                        */
  /* ---------------------------------------------------------------------- */

  function wireAction(card, actionId) {
    var out = card.querySelector(".action-result");

    card.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-do]");
      if (!btn) return;
      var what = btn.dataset.do;

      if (SG.demoMode) {
        out.innerHTML =
          '<p class="action-meta" style="margin-top:10px">Chế độ demo — không gọi backend.</p>';
        return;
      }

      var buttons = card.querySelectorAll("button");
      Array.prototype.forEach.call(buttons, function (b) { b.disabled = true; });
      out.innerHTML = '<p class="action-meta" style="margin-top:10px">Đang xử lý…</p>';

      var run;
      if (what === "approve") {
        // Approve, then execute: two separate calls, because the backend
        // treats them as two separate decisions.
        run = SG.approve(actionId, session.username).then(function () {
          return SG.execute(actionId);
        });
      } else {
        run = SG.reject(actionId, session.username);
      }

      run
        .then(function (data) {
          card.classList.remove("is-dead");
          card.classList.add(what === "approve" ? "is-done" : "is-dead");
          card.querySelector(".action-buttons").remove();
          if (what === "approve") {
            out.innerHTML =
              '<div class="action-meta" style="margin-top:10px">' +
              statusBadge("EXECUTED") +
              " Giải ngân (mock) thành công · mã tham chiếu <code class='mono'>" +
              esc(data.provider_reference || "—") + "</code></div>";
          } else {
            out.innerHTML =
              '<div class="action-meta" style="margin-top:10px">' +
              '<span class="badge badge-bad">ĐÃ TỪ CHỐI</span> Đề xuất đã đóng.</div>';
          }
        })
        .catch(function (error) {
          Array.prototype.forEach.call(buttons, function (b) { b.disabled = false; });
          out.innerHTML =
            '<div class="msg-error" style="margin-top:10px">' +
            esc((error.code ? error.code + ": " : "") + error.message) + "</div>";
        });
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Send                                                                    */
  /* ---------------------------------------------------------------------- */

  function send(text) {
    if (busy || !text.trim()) return;
    busy = true;
    sendBtn.disabled = true;

    var placeholder = document.querySelector(".welcome");
    if (placeholder) placeholder.remove();

    addUser(text);
    input.value = "";
    input.style.height = "auto";
    var pending = thinking();

    var finish = function () {
      pending.remove();
      busy = false;
      sendBtn.disabled = false;
      scrollDown();
    };

    if (SG.demoMode) {
      window.setTimeout(function () {
        finish();
        renderResult(DEMO.replyFor(session.sellerId, text));
      }, 700);
      return;
    }

    SG.runAgent({ seller_id: session.sellerId, message: text })
      .then(function (result) {
        finish();
        renderResult(result);
      })
      .catch(function (error) {
        finish();
        addBot(function (content) {
          content.innerHTML =
            '<div class="msg-error"><strong>Không chạy được workflow.</strong><br>' +
            esc((error.code ? error.code + ": " : "") + error.message) +
            "</div>";
        });
      });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    send(input.value);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send(input.value);
    }
  });

  input.addEventListener("input", function () {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 140) + "px";
  });

  document.getElementById("suggestions").addEventListener("click", function (event) {
    var chip = event.target.closest(".chip");
    if (chip) send(chip.textContent.trim());
  });

  /* ---------------------------------------------------------------------- */

  document.getElementById("role-label").textContent = session.label || "Người bán";
  welcome();
  connect();
})();
