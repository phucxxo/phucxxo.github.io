/* Seller workspace. Financial results are rendered from API responses only. */
(function () {
  "use strict";
  var session = Auth.require("seller");
  if (!session) return;
  var esc = SG.esc, fmt = SG.fmt;
  var main = document.getElementById("workspace-main");
  var state = { projects: [], project: null, conversations: [], conversation: null, messages: [], schema: null, profile: {}, validation: null, before: null, mode: "chat", step: 1, name: "", generation: 0, revision: 0, busy: false, validating: false };
  var validationTimer, noticeTimer;
  var draftKey = "sg_profile_draft_" + session.username;
  var sidebarKey = "sg_sidebar_" + session.username;
  var sourceColors = ["#84b7a5", "#b9aad9", "#829fd7"];
  var statusLabels = { OK: "OK", WARNINGS: "Cảnh báo", INVALID: "Lỗi", NONE: "Chưa nộp", SUBMITTED: "Đã nộp", UNDER_REVIEW: "Đang thẩm định", AWAITING_APPROVAL: "Chờ duyệt", APPROVED: "Đã duyệt", DISBURSED: "Đã giải ngân", REJECTED: "Từ chối", LOW: "Thấp", MEDIUM: "Trung bình", HIGH: "Cao" };

  function byId(id) { return document.getElementById(id); }
  function store(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; } }
  function restore(key) { try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; } }
  function remove(key) { try { localStorage.removeItem(key); } catch (e) { /* optional storage */ } }
  function array(data, key) { return Array.isArray(data) ? data : (data && data[key]) || []; }
  function snapshot(key) { return window.DEMO && window.DEMO[key]; }
  function read(live, frozen) {
    if (!SG.demoMode) return live();
    if (frozen === undefined || frozen === null) return Promise.reject(new Error("Bản chụp demo chưa có dữ liệu cho mục này. Kết nối backend để tiếp tục."));
    return Promise.resolve(frozen);
  }
  function writable() { if (SG.demoMode) { notice("Đang xem bản chụp demo. Kết nối backend để lưu, trò chuyện hoặc nộp hồ sơ.", true); return false; } return true; }
  function notice(message, error) {
    var node = byId("notice");
    clearTimeout(noticeTimer); node.textContent = message; node.hidden = false; node.className = "workspace-notice" + (error ? " error" : "");
    noticeTimer = setTimeout(function () { node.hidden = true; }, 14000);
  }
  function errorPanel(error, retry) { return '<div class="empty" role="alert">' + esc(error.message || error) + (retry ? '<p><button class="btn" data-do="' + esc(retry) + '">Thử lại</button></p>' : "") + "</div>"; }
  function loading(text) { return '<div class="empty" role="status"><span class="spinner"></span> ' + esc(text || "Đang tải…") + "</div>"; }
  function badge(value) {
    var kind = /^(OK|LOW|APPROVED|DISBURSED)$/.test(value) ? "ok" : /^(INVALID|HIGH|REJECTED)$/.test(value) ? "bad" : "warn";
    return '<span class="badge badge-' + kind + '">' + esc(statusLabels[value] || value || "Chưa có") + "</span>";
  }
  function relative(iso) {
    if (!iso) return "Chưa có tin nhắn";
    var age = Math.max(0, Date.now() - new Date(iso).getTime());
    if (!isFinite(age)) return fmt.dt(iso);
    if (age < 60000) return "Vừa xong";
    if (age < 3600000) return Math.floor(age / 60000) + " phút trước";
    if (age < 86400000) return Math.floor(age / 3600000) + " giờ trước";
    return Math.floor(age / 86400000) + " ngày trước";
  }
  function sortedConversations(rows) { return rows.slice().sort(function (a, b) { return String(b.updated_at || b.created_at).localeCompare(String(a.updated_at || a.created_at)); }); }
  function closeSidebar() { byId("workspace-shell").classList.remove("sidebar-open"); syncSidebar(); }
  function syncSidebar() {
    var shell = byId("workspace-shell");
    var open = window.innerWidth <= 720 ? shell.classList.contains("sidebar-open") : !shell.classList.contains("sidebar-collapsed");
    byId("sidebar-toggle").setAttribute("aria-expanded", String(open));
    byId("sidebar-backdrop").hidden = !open;
  }
  function renderProjects() {
    byId("project-list").innerHTML = state.projects.length ? state.projects.map(function (project) {
      var active = state.project && project.project_id === state.project.project_id;
      var dot = project.funding_status === "DISBURSED" ? "funded" : project.funding_status === "REJECTED" ? "rejected" : project.funding_status && project.funding_status !== "NONE" ? "pending" : "";
      var html = '<button class="project-button' + (active ? " active" : "") + '" data-do="project" data-id="' + esc(project.project_id) + '" aria-current="' + (active ? "true" : "false") + '"><span class="project-title"><i class="funding-dot ' + dot + '" aria-label="' + esc(statusLabels[project.funding_status] || "Chưa nộp") + '"></i>' + esc(project.name) + '</span>' + badge(project.risk_band) + '</button>';
      if (active) {
        html += '<div class="conversation-list">' + (state.conversations.length ? state.conversations.map(function (conversation) {
          return '<button class="conversation-button' + (state.conversation && state.conversation.conversation_id === conversation.conversation_id ? " active" : "") + '" data-do="conversation" data-id="' + esc(conversation.conversation_id) + '"><span>' + esc(conversation.title || "Đoạn chat mới") + '</span><small>' + esc(relative(conversation.updated_at || conversation.created_at)) + '</small></button>';
        }).join("") : '<p class="schema-help">Chưa có đoạn chat.</p>') + '<button class="conversation-button" data-do="new-conversation">+ Đoạn chat mới</button></div>';
      }
      return html;
    }).join("") : '<p class="schema-help">Chưa có dự án. Thêm gian hàng đầu tiên của bạn.</p>';
    byId("profile-nav").innerHTML = state.project ? '<h2>Hồ sơ ' + badge(state.project.profile_status) + '</h2><button class="btn sidebar-button" data-do="edit-profile">Xem &amp; sửa hồ sơ</button><button class="btn sidebar-button" data-do="template">Tải file mẫu</button><button class="btn sidebar-button" data-do="upload-profile">Cập nhật bằng file</button>' : "";
  }
  function applicationHtml(app) {
    return '<div class="application-status">' + badge(app.status) + '<p class="schema-help">' + esc(fmt.vnd(app.amount)) + ' VND</p><ol class="timeline">' + (app.timeline || []).map(function (item) {
      return '<li>' + esc(statusLabels[item.status] || item.status) + '<small>' + esc(fmt.dt(item.at)) + '</small>' + (item.note ? '<small>' + esc(item.note) + '</small>' : "") + '</li>';
    }).join("") + '</ol></div>';
  }
  function loadApplications() {
    if (!state.project) { byId("application-nav").innerHTML = ""; return Promise.resolve(); }
    var id = state.project.project_id;
    byId("application-nav").innerHTML = '<button class="btn btn-primary sidebar-button" data-do="apply">Nộp hồ sơ xin cấp vốn</button><div id="application-status">' + loading() + '</div>';
    var frozen = snapshot("applications");
    if (frozen) frozen = { applications: array(frozen, "applications").filter(function (item) { return item.project_id === id; }) };
    return read(function () { return SG.projectApplications(id); }, frozen).then(function (data) {
      if (!state.project || state.project.project_id !== id) return;
      var rows = array(data, "applications").slice().sort(function (a, b) { return String(b.submitted_at).localeCompare(String(a.submitted_at)); });
      byId("application-status").innerHTML = rows.length ? rows.map(applicationHtml).join("") : '<p class="schema-help">Chưa nộp hồ sơ xin cấp vốn.</p>';
    }).catch(function (error) { if (state.project && state.project.project_id === id && byId("application-status")) byId("application-status").innerHTML = errorPanel(error, "reload-applications"); });
  }
  function projectSnapshot(project) {
    var profiles = snapshot("sellerProfiles");
    var data = profiles && profiles[project.seller_id];
    if (!data || !data.profile) return undefined;
    return { project: project, profile: data.profile, preview: data.preview || null, errors: data.errors || [], warnings: data.warnings || [] };
  }
  function loadProjects() {
    byId("project-list").innerHTML = loading("Đang tải dự án…");
    return read(function () { return SG.projects(session.username); }, snapshot("projects")).then(function (data) {
      state.projects = array(data, "projects").filter(function (project) { return project.owner === session.username; });
      renderProjects();
      if (!state.projects.length) return startWizard();
      var saved = restore("sg_active_project_" + session.username);
      return selectProject(state.projects.some(function (p) { return p.project_id === saved; }) ? saved : state.projects[0].project_id);
    }).catch(function (error) {
      byId("project-list").innerHTML = errorPanel(error, "reload-projects");
      main.innerHTML = '<div class="wizard"><div class="view-heading"><div><h1>Chào mừng đến SellerGraph</h1><p>Thêm hồ sơ để bắt đầu quản lý vốn lưu động.</p></div></div>' + errorPanel(error, "reload-projects") + '<button class="btn btn-primary" data-do="new-project">+ Dự án mới</button></div>';
    });
  }
  function selectProject(id) {
    var project = state.projects.filter(function (p) { return p.project_id === id; })[0];
    if (!project) return Promise.resolve();
    clearTimeout(validationTimer); state.generation += 1; state.project = project; state.conversations = []; state.conversation = null; state.messages = []; state.mode = "chat"; state.busy = false;
    store("sg_active_project_" + session.username, id); closeSidebar(); renderProjects(); renderChat(); loadApplications();
    var generation = state.generation;
    return read(function () { return SG.conversations(id); }, (snapshot("conversations") || {})[id]).then(function (data) {
      if (generation !== state.generation) return;
      state.conversations = sortedConversations(array(data, "conversations")); renderProjects();
      if (state.conversations.length) return openConversation(state.conversations[0].conversation_id);
    }).catch(function (error) { if (generation === state.generation) notice(error.message, true); });
  }
  function figure(label, value) { return '<div class="figure"><small>' + esc(label) + '</small><strong>' + esc(value) + '</strong></div>'; }
  function fundingBar(plan) {
    if (!Array.isArray(plan) || !plan.length) return '<p class="schema-help">Chưa có phương án vốn.</p>';
    var total = plan.reduce(function (sum, item) { return sum + Math.max(0, Number(item.amount) || 0); }, 0), offset = 0;
    var bars = plan.map(function (item, index) {
      var width = total ? Math.max(0, Number(item.amount) || 0) / total * 100 : 0;
      var rect = '<rect x="' + esc(offset) + '" y="0" width="' + esc(width) + '" height="12" fill="' + esc(sourceColors[index % sourceColors.length]) + '"><title>' + esc(item.label || item.source) + ': ' + esc(fmt.vnd(item.amount)) + ' VND</title></rect>';
      offset += width; return rect;
    }).join("");
    return '<svg class="funding-chart" viewBox="0 0 100 12" preserveAspectRatio="none" role="img" aria-label="Phương án vốn"><rect width="100" height="12" fill="#353b49" />' + bars + '</svg><div class="funding-legend">' + plan.map(function (item, index) {
      return '<span><i style="background:' + esc(sourceColors[index % sourceColors.length]) + '"></i>' + esc(item.label || item.source) + ' · ' + esc(fmt.vnd(item.amount)) + ' VND</span>';
    }).join("") + '</div>';
  }
  function policyLabel(policy) {
    if (!policy) return "Chưa có kết luận";
    if (policy.decision === "DECLINE" || policy.decision === "REJECT") return "Từ chối";
    if (policy.requires_human_approval) return "Cần người thẩm định phê duyệt";
    return policy.decision === "APPROVE" ? "Đáp ứng chính sách" : "Cần thẩm định";
  }
  function previewHtml(preview) {
    if (!preview) return '<div class="empty">Chưa có kết quả tính. Hoàn thiện các trường và kiểm tra hồ sơ.</div>';
    return '<section class="preview-card"><h3>Kết quả từ lõi tài chính</h3><div class="figure-grid">' + figure("Nhu cầu vốn", fmt.vnd(preview.funding_need) + " VND") + figure("Độ tin cậy dự báo", fmt.pct(preview.forecast_confidence)) + figure("Xác suất vỡ nợ (PD)", fmt.pct(preview.pd)) + figure("Nhóm rủi ro", statusLabels[preview.risk_band] || preview.risk_band || "—") + figure("Hạn mức khuyến nghị", fmt.vnd(preview.recommended_limit) + " VND") + figure("Chi phí tài chính", fmt.vnd(preview.total_cost) + " VND") + '</div>' + fundingBar(preview.funding_plan) + '<p class="policy-line">' + esc(policyLabel(preview.policy)) + '</p><p class="schema-help">Số liệu do công cụ tất định tính từ hồ sơ. Gemini lập kế hoạch, chọn công cụ và diễn giải; không tự tạo số tài chính.</p></section>';
  }
  function factsHtml(facts) {
    if (!facts) return '<p class="schema-help">Tin nhắn này không kèm số liệu công cụ.</p>';
    var fields = [["capital_need", "Nhu cầu vốn", "money"], ["funding_need", "Nhu cầu vốn", "money"], ["cash_amount", "Tiền mặt", "money"], ["supplier_credit_amount", "Tín dụng nhà cung cấp", "money"], ["loan_amount", "Vay ngân hàng", "money"], ["estimated_financing_cost", "Chi phí tài chính", "money"], ["recommended_credit_limit", "Hạn mức khuyến nghị", "money"], ["recommended_limit", "Hạn mức khuyến nghị", "money"], ["pd", "Xác suất vỡ nợ (PD)", "rate"], ["risk_band", "Nhóm rủi ro", "band"], ["projected_stockout_days", "Số ngày còn đủ hàng", "number"]];
    var html = fields.filter(function (field) { return facts[field[0]] !== undefined; }).map(function (field) {
      var value = facts[field[0]];
      return figure(field[1], field[2] === "money" ? fmt.vnd(value) + " VND" : field[2] === "rate" ? fmt.pct(value) : field[2] === "band" ? statusLabels[value] || value : value);
    }).join("");
    return '<section class="message-facts"><div class="eyebrow">Số liệu công cụ tất định</div><div class="figure-grid">' + html + '</div>' + (!html ? '<pre>' + esc(JSON.stringify(facts, null, 2)) + '</pre>' : "") + '</section>';
  }
  function messagePlan(message) {
    if (message.funding_plan) return message.funding_plan;
    var facts = message.facts || {};
    if (facts.funding_plan) return facts.funding_plan;
    var map = [["cash_amount", "cash", "Tiền mặt"], ["supplier_credit_amount", "supplier", "Tín dụng NCC"], ["loan_amount", "loan", "Vay ngân hàng"]];
    return map.filter(function (item) { return facts[item[0]] !== undefined; }).map(function (item) { return { source: item[1], label: item[2], amount: facts[item[0]] }; });
  }
  function messagesHtml() {
    if (!state.messages.length) return '<div class="welcome"><div class="eyebrow">Gian hàng đã sẵn sàng</div><h2>Chủ động vốn.<br />Rõ từng quyết định.</h2><p>Hãy hỏi về vốn nhập hàng, tồn kho hoặc chi phí vay. Gemini chọn công cụ và giải thích; dự báo, rủi ro, phương án vốn và chính sách đều do lõi tài chính tính từ hồ sơ của bạn.</p></div>';
    return state.messages.map(function (message) {
      if (message.role === "user") return '<div class="msg-user">' + esc(message.content) + '</div>';
      return '<article class="msg-bot">' + factsHtml(message.facts) + '<p class="facts-disclaimer">Các số phía trên là kết quả lõi tài chính. Phần dưới là diễn giải của mô hình' + (message.degraded ? " hoặc mẫu dự phòng khi mô hình không khả dụng" : "") + '.</p><div class="explanation">' + esc(message.content || "Chưa có diễn giải.") + '</div>' + (message.action_id ? '<div class="action-card"><strong>Phương án xin cấp vốn</strong>' + fundingBar(messagePlan(message)) + '<p class="message-meta">Đề xuất: ' + esc(message.action_id) + '</p><button class="btn btn-primary btn-sm" data-do="apply" data-id="' + esc(message.action_id) + '">Nộp hồ sơ xin cấp vốn</button></div>' : "") + '<div class="message-meta">' + esc(fmt.dt(message.created_at)) + (message.workflow_id ? " · Lần chạy " + esc(message.workflow_id) : "") + '</div></article>';
    }).join("");
  }
  function renderChat() {
    state.mode = "chat";
    main.innerHTML = '<div class="chat-view"><section class="chat-main"><div class="view-heading"><div><div class="eyebrow">Không gian gian hàng</div><h1>' + esc(state.project ? state.project.name : "Gian hàng của tôi") + '</h1><p>' + esc(state.conversation ? state.conversation.title || "Đoạn chat mới" : "Trợ lý tài chính của bạn") + '</p></div></div><section class="workspace-thread" id="thread" aria-live="polite">' + messagesHtml() + '</section><div class="workspace-composer"><div class="suggestions"><button class="chip" data-do="suggest">30 ngày tới tôi cần bao nhiêu vốn nhập hàng?</button><button class="chip" data-do="suggest">Phương án huy động vốn nào có chi phí thấp nhất?</button><button class="chip" data-do="suggest">Hồ sơ của tôi cần bổ sung gì để xin cấp vốn?</button></div><form class="composer" id="composer"><label class="sr-only" for="message">Câu hỏi của bạn</label><textarea id="message" rows="2" maxlength="2000" placeholder="Hỏi về vốn, tồn kho, hạn mức…"></textarea><button class="btn btn-primary" id="send" type="submit">Gửi</button></form><p class="composer-note">Enter để gửi · Shift + Enter để xuống dòng. Mọi số tài chính truy ngược được về công cụ.</p></div></section><aside class="health-card" id="health-card" aria-label="Sức khỏe hồ sơ">' + loading("Đang kiểm tra hồ sơ…") + '</aside></div>';
    loadHealth();
  }
  function healthFix(check, health) {
    if (check.block) return check.block;
    var issue = (health.errors || []).concat(health.warnings || []).filter(function (item) { return item.code === check.code; })[0];
    if (issue && issue.block) return issue.block;
    return { HISTORY_LENGTH: "sales_history", SKU_COVERAGE: "inventory", MARGIN: "inventory", CAPACITY: "seller" }[check.code] || "seller";
  }
  function loadHealth() {
    if (!state.project || !byId("health-card")) return;
    var id = state.project.project_id;
    var profiles = snapshot("sellerProfiles"), frozen = profiles && profiles[state.project.seller_id];
    read(function () { return SG.projectHealth(id); }, frozen && frozen.health).then(function (health) {
      if (!state.project || state.project.project_id !== id || !byId("health-card")) return;
      var score = Math.max(0, Math.min(100, Number(health.score) || 0));
      byId("health-card").innerHTML = '<h2>Hồ sơ của tôi</h2><svg class="score-ring" viewBox="0 0 100 100" role="img" aria-label="' + esc("Điểm hồ sơ " + health.score + " trên 100") + '"><circle cx="50" cy="50" r="40" fill="none" stroke="#303747" stroke-width="6"/><circle cx="50" cy="50" r="40" fill="none" stroke="#99b6dc" stroke-width="6" stroke-dasharray="' + esc(score / 100 * 251.33) + ' 251.33" transform="rotate(-90 50 50)"/><text x="50" y="53" text-anchor="middle" fill="#f2f4fa" font-size="22">' + esc(health.score) + '</text><text x="50" y="68" text-anchor="middle" fill="#b9c2d4" font-size="9">/ 100</text></svg>' + badge(health.status) + '<p class="schema-help">' + esc(health.ready_for_funding ? "Sẵn sàng nộp hồ sơ xin cấp vốn." : "Cần hoàn thiện trước khi xin cấp vốn.") + '</p><details open><summary>Kiểm tra hồ sơ</summary>' + (health.checks || []).map(function (check) {
        return '<div class="health-check"><span class="' + (check.ok ? "pass" : "fail") + '">' + (check.ok ? "✓ " : "! ") + esc(check.label) + '</span><small>' + esc(check.detail) + '</small>' + (!check.ok ? '<button class="btn btn-sm" data-do="fix" data-id="' + esc(healthFix(check, health)) + '">Bổ sung hồ sơ</button>' : "") + '</div>';
      }).join("") + '</details><button class="btn sidebar-button" data-do="edit-profile">Xem &amp; sửa hồ sơ ↗</button>';
    }).catch(function (error) { if (state.project && state.project.project_id === id && byId("health-card")) byId("health-card").innerHTML = '<h2>Hồ sơ của tôi</h2>' + errorPanel(error, "reload-health"); });
  }
  function openConversation(id) {
    state.conversation = state.conversations.filter(function (c) { return c.conversation_id === id; })[0] || { conversation_id: id };
    state.messages = []; state.generation += 1; state.busy = false;
    var generation = state.generation;
    renderChat(); renderProjects(); closeSidebar(); byId("thread").innerHTML = loading("Đang tải cuộc trò chuyện…");
    return read(function () { return SG.messages(id); }, (snapshot("messages") || {})[id]).then(function (data) {
      if (generation !== state.generation || state.mode !== "chat") return;
      state.messages = array(data, "messages"); byId("thread").innerHTML = messagesHtml(); scrollThread();
    }).catch(function (error) { if (generation === state.generation && byId("thread")) byId("thread").innerHTML = errorPanel(error, "reload-messages"); });
  }
  function newConversation(forSend) {
    if (!writable() || !state.project) return Promise.resolve(null);
    if (!forSend) state.generation += 1;
    var id = state.project.project_id, generation = state.generation;
    return SG.createConversation(id).then(function (data) {
      if (!state.project || state.project.project_id !== id || generation !== state.generation) return null;
      state.conversation = data.conversation; state.conversations.unshift(data.conversation); state.messages = []; renderProjects(); renderChat(); closeSidebar(); return data.conversation;
    });
  }
  function scrollThread() { var thread = byId("thread"); if (thread) thread.scrollTop = thread.scrollHeight; }
  function send(text) {
    text = String(text || "").trim();
    if (!text || state.busy || !writable()) return;
    state.busy = true;
    var generation = state.generation;
    byId("send").disabled = true;
    var start = state.conversation ? Promise.resolve(state.conversation) : newConversation(true);
    start.then(function (conversation) {
      if (!conversation || generation !== state.generation) return null;
      state.busy = true; byId("send").disabled = true; byId("message").value = "";
      byId("thread").innerHTML = messagesHtml() + '<div class="msg-user">' + esc(text) + '</div>' + loading("Đang chạy dự báo, rủi ro, tối ưu vốn và chính sách…"); scrollThread();
      return SG.sendMessage(conversation.conversation_id, { message: text, use_llm: true, horizon_days: null });
    }).then(function (data) {
      if (!data || generation !== state.generation || state.mode !== "chat") return;
      state.messages.push(data.user_message, data.assistant_message);
      if (data.conversation) {
        state.conversation = data.conversation;
        state.conversations = sortedConversations(state.conversations.map(function (c) { return c.conversation_id === data.conversation.conversation_id ? data.conversation : c; }));
      }
      byId("thread").innerHTML = messagesHtml(); renderProjects(); loadHealth(); scrollThread();
    }).catch(function (error) {
      if (generation !== state.generation || state.mode !== "chat") return;
      byId("thread").innerHTML = messagesHtml(); byId("message").value = text;
      byId("thread").innerHTML += '<p><button class="btn btn-sm" data-do="reload-messages">Tải lại đoạn chat</button></p>';
      notice("Chưa nhận được phản hồi: " + error.message + " Nội dung vẫn ở ô soạn; tải lại đoạn chat trước khi gửi lại để tránh trùng tin.", true);
    }).then(function () { if (generation === state.generation) { state.busy = false; if (byId("send")) byId("send").disabled = false; } });
  }
  function getSchema() {
    if (state.schema) return Promise.resolve(state.schema);
    return read(function () { return SG.onboardingSchema(); }, snapshot("onboardingSchema")).then(function (schema) {
      if (!schema || !Array.isArray(schema.blocks)) throw new Error("Schema hồ sơ chưa có dữ liệu. Hãy tải lại khi backend sẵn sàng.");
      state.schema = schema; return schema;
    });
  }
  function ensureProfile() {
    (state.schema.blocks || []).forEach(function (block) {
      if (block.repeat) { if (!Array.isArray(state.profile[block.key])) state.profile[block.key] = [{}]; }
      else if (!state.profile[block.key] || typeof state.profile[block.key] !== "object") state.profile[block.key] = {};
    });
  }
  function saveDraft() {
    if (state.mode !== "wizard") return;
    if (!store(draftKey, { profile: state.profile, name: state.name, step: state.step, method: state.method })) notice("Trình duyệt không lưu được bản nháp. Giữ trang này mở cho đến khi lưu hồ sơ.", true);
  }
  function startWizard() {
    clearTimeout(validationTimer); state.generation += 1; state.mode = "wizard"; state.busy = false; state.validation = null; state.validating = false;
    var draft = restore(draftKey);
    state.profile = draft && draft.profile || {}; state.name = draft && draft.name || ""; state.step = draft && draft.step || 1; state.method = draft && draft.method || "manual";
    closeSidebar(); main.innerHTML = loading("Đang tải hướng dẫn hồ sơ…");
    var generation = state.generation;
    return getSchema().then(function () { if (generation !== state.generation) return; ensureProfile(); renderWizard(); if (state.step > 1) validate(); }).catch(function (error) { if (generation === state.generation) main.innerHTML = errorPanel(error, "new-project"); });
  }
  function displayValue(field, value) {
    if (value === null || value === undefined || value === "") return "";
    if (field.type === "money") return fmt.vnd(value);
    if (field.type === "rate") return String(Number((Number(value) * 100).toFixed(8))).replace(".", ",");
    return value;
  }
  function fieldBounds(field) {
    var bounds = [];
    if (field.min !== null && field.min !== undefined) bounds.push("Tối thiểu " + displayValue(field, field.min) + (field.type === "rate" ? "%" : ""));
    if (field.max !== null && field.max !== undefined) bounds.push("Tối đa " + displayValue(field, field.max) + (field.type === "rate" ? "%" : ""));
    return bounds.length ? '<small>' + esc(bounds.join(" · ")) + '</small>' : "";
  }
  function formHtml() {
    return '<div class="profile-form">' + state.schema.blocks.map(function (block, blockIndex) {
      var rows = block.repeat ? state.profile[block.key] : [state.profile[block.key]];
      return '<section class="schema-block" id="block-' + esc(block.key) + '"><h2>' + esc(block.title || block.key) + '</h2><p class="schema-help">' + esc(block.help || "") + (block.repeat && block.min_rows ? " · Tối thiểu " + esc(block.min_rows) + " dòng" : "") + '</p>' + rows.map(function (row, rowIndex) {
        return '<div class="schema-row">' + block.fields.map(function (field, fieldIndex) {
          var fieldId = "field-" + blockIndex + "-" + rowIndex + "-" + fieldIndex;
          return '<label class="schema-field" for="' + fieldId + '">' + esc(field.label || field.name) + (field.type === "rate" ? " (%)" : "") + (field.required ? " *" : "") + '<input id="' + fieldId + '" data-field="' + esc(field.name) + '" data-block="' + esc(block.key) + '" data-row="' + esc(rowIndex) + '" data-type="' + esc(field.type) + '" type="' + (field.type === "date" ? "date" : "text") + '"' + (/^(money|number|integer|rate)$/.test(field.type) ? ' inputmode="decimal"' : "") + (field.required ? " required" : "") + ' value="' + esc(displayValue(field, row[field.name])) + '" placeholder="' + esc(field.placeholder || "") + '"' + (state.mode === "editor" && block.key === "seller" && field.name === "seller_id" ? " readonly" : "") + '/>' + (field.help ? '<small>' + esc(field.help) + '</small>' : "") + fieldBounds(field) + '</label>';
        }).join("") + (block.repeat ? '<button class="btn btn-sm remove-row" data-do="remove-row" data-id="' + esc(block.key) + '" data-row="' + esc(rowIndex) + '">Xóa dòng ' + esc(rowIndex + 1) + '</button>' : "") + '</div>';
      }).join("") + (block.repeat ? '<button class="btn btn-sm" data-do="add-row" data-id="' + esc(block.key) + '">+ Thêm dòng</button><details class="paste-box"><summary>Dán nhiều dòng từ bảng tính</summary><p>Thứ tự cột: ' + esc(block.fields.map(function (f) { return f.name; }).join(" · ")) + '. Dùng tab hoặc dấu phẩy; tỷ lệ nhập theo %. Dòng tiêu đề là tùy chọn.</p><textarea id="paste-' + esc(block.key) + '" aria-label="' + esc("Dữ liệu bảng tính " + (block.title || block.key)) + '" placeholder="Dán các dòng tại đây"></textarea><button class="btn btn-sm" data-do="paste" data-id="' + esc(block.key) + '">Thêm dữ liệu đã dán</button></details>' : "") + '</section>';
    }).join("") + '</div>';
  }
  function stepsHtml() { return '<ol class="wizard-steps">' + ["1 · Chọn cách nhập", "2 · Hoàn thiện hồ sơ", "3 · Kiểm tra", "4 · Lưu gian hàng"].map(function (label, index) { return '<li class="' + (state.step === index + 1 ? "active" : "") + '">' + esc(label) + '</li>'; }).join("") + '</ol>'; }
  function renderWizard() {
    var html = '<div class="wizard"><div class="view-heading"><div><div class="eyebrow">Khởi tạo gian hàng</div><h1>Hiểu hồ sơ. Chủ động nguồn vốn.</h1><p>Hồ sơ gồm 5 khối dữ liệu; bản nháp được lưu trên trình duyệt theo tài khoản.</p></div>' + (state.project ? '<button class="btn btn-sm" data-do="back-chat">Về đoạn chat</button>' : "") + '</div>' + stepsHtml();
    if (state.step === 1) {
      html += '<div class="method-grid"><button class="method-card" data-do="manual"><span class="method-icon">⌨</span><strong>Nhập tay</strong><small>Điền từng khối. Dán hàng loạt dòng tồn kho và lịch sử bán từ bảng tính.</small></button><button class="method-card" data-do="upload-method"><span class="method-icon">↥</span><strong>Tải lên file Excel</strong><small>Một tệp, nhiều sheet. Kiểm tra và sửa dữ liệu ngay trên màn hình.</small></button><button class="method-card" data-do="sample"><span class="method-icon">◇</span><strong>Dùng gian hàng mẫu</strong><small>Nhận gian hàng mẫu đã được nạp sẵn để khám phá kết quả công cụ.</small></button></div><p class="schema-help" style="margin-top:22px">Chuẩn bị bảng cân đối, tồn kho, 30 ngày bán hàng, điều khoản nhà cung cấp và hạn mức ngân hàng.</p>';
    } else {
      html += '<label class="name-field" for="project-name">Tên dự án<input id="project-name" value="' + esc(state.name) + '" placeholder="Tên gian hàng của bạn" /></label>';
      if (state.step === 2) {
        html += '<button class="btn btn-sm" data-do="template">↓ Tải file mẫu Excel · một sổ làm việc, nhiều trang tính</button>';
        if (state.method === "upload") html += '<div class="drop-zone" id="drop-zone"><strong>Thả hồ sơ vào đây</strong><p>Chấp nhận .xlsx, .xls, .json hoặc .zip gồm 5 CSV</p><input id="onboarding-file" type="file" accept=".xlsx,.xls,.json,.zip" aria-label="Chọn hồ sơ tải lên" /><small>File được phân tích trước; bạn có thể sửa ngay các trường bên dưới.</small></div>';
        html += formHtml();
      }
      html += '<div id="validation" class="validation-box" aria-live="polite"></div><div class="wizard-actions"><button class="btn" data-do="wizard-back">Quay lại</button>' + (state.step === 2 ? '<button class="btn btn-primary" data-do="review">Kiểm tra hồ sơ →</button>' : '<button class="btn" data-do="edit-draft">Sửa dữ liệu</button><button class="btn btn-primary" id="save-profile" data-do="save-project"' + (!canSave() ? " disabled" : "") + '>Lưu và mở gian hàng</button>') + '</div>';
    }
    main.innerHTML = html + '</div>'; renderValidation(); saveDraft();
  }
  function issueBlock(issue) {
    if (typeof issue === "object" && issue.block) return issue.block;
    var text = typeof issue === "object" ? issue.message || issue.path || "" : String(issue);
    var block = state.schema.blocks.filter(function (b) { return text.indexOf(b.key) >= 0; })[0];
    if (block) return block.key;
    text = text.toLowerCase();
    if (/lịch sử|ngày bán|ngày ở tương lai|sales/.test(text)) return "sales_history";
    if (/sku|tồn kho|giá vốn|giá bán|inventory/.test(text)) return "inventory";
    if (/nhà cung cấp|ncc|công nợ|supplier|credit_limit/.test(text)) return "supplier_terms";
    if (/ngân hàng|lãi suất|kỳ hạn|dư nợ|bank/.test(text)) return "bank_facility";
    return "seller";
  }
  function issuesHtml(items, kind) {
    return (items || []).map(function (issue) { return '<div class="issue ' + kind + '"><button data-do="jump" data-id="' + esc(issueBlock(issue)) + '">' + (kind === "error" ? "Lỗi cần sửa: " : "Cảnh báo: ") + esc(typeof issue === "string" ? issue : issue.message || issue.code || JSON.stringify(issue)) + '</button></div>'; }).join("");
  }
  function canSave() { return !state.busy && !state.validating && state.validation && state.validation.ok !== false && !(state.validation.errors || []).length && !!state.validation.preview; }
  function renderValidation() {
    var node = byId("validation"); if (!node) return;
    if (state.validating) node.innerHTML = loading("Đang kiểm tra dữ liệu và tính lại…");
    else if (!state.validation) node.innerHTML = '<p class="schema-help">Nhập dữ liệu để kiểm tra hồ sơ.</p>';
    else node.innerHTML = issuesHtml(state.validation.errors, "error") + issuesHtml(state.validation.warnings, "warning") + previewHtml(state.validation.preview);
    if (byId("save-profile")) byId("save-profile").disabled = !canSave();
  }
  function validate() {
    clearTimeout(validationTimer);
    var generation = state.generation, revision = state.revision;
    state.validating = true; renderValidation();
    var run;
    if (SG.demoMode) {
      var samplePreview = snapshot("previewFor");
      if (typeof samplePreview === "function") {
        var preview = samplePreview(state.profile);
        run = Promise.resolve({ ok: !!preview, errors: [], warnings: ["Bản xem trước demo cố định, không xác thực những thay đổi vừa nhập."], preview: preview });
      } else run = Promise.reject(new Error("Bản chụp demo chưa có kết quả xem trước. Kết nối backend để xác thực hồ sơ."));
    } else run = SG.onboardingValidate(state.profile);
    return run.then(function (result) {
      if (generation !== state.generation || revision !== state.revision) return null;
      state.validation = result; state.validating = false; renderValidation(); return result;
    }).catch(function (error) {
      if (generation !== state.generation || revision !== state.revision) return null;
      state.validating = false; state.validation = null; renderValidation();
      if (byId("validation")) byId("validation").innerHTML = errorPanel(error, "validate");
      return null;
    });
  }
  function changed() { state.revision += 1; state.validation = null; state.validating = true; saveDraft(); renderValidation(); clearTimeout(validationTimer); validationTimer = setTimeout(validate, 600); }
  function parseValue(type, value) {
    if (value === "") return null;
    if (type === "money") { var money = Number(String(value).replace(/[.\s]/g, "").replace(",", ".")); return isFinite(money) ? money : value; }
    if (/^(rate|number|integer)$/.test(type)) { var n = Number(String(value).replace(",", ".")); return isFinite(n) ? type === "rate" ? n / 100 : n : value; }
    return value;
  }
  function inputField(input) {
    var block = state.schema.blocks.filter(function (item) { return item.key === input.dataset.block; })[0];
    if (!block) return;
    var row = block.repeat ? state.profile[block.key][Number(input.dataset.row)] : state.profile[block.key];
    var value = parseValue(input.dataset.type, input.value); row[input.dataset.field] = value;
    if (input.dataset.type === "money" && value !== null && typeof value === "number") {
      var digitsAfter = input.value.slice(input.selectionStart || 0).replace(/\D/g, "").length;
      input.value = fmt.vnd(value);
      var cursor = input.value.length, remaining = digitsAfter;
      while (cursor > 0 && remaining) { cursor -= 1; if (/\d/.test(input.value.charAt(cursor))) remaining -= 1; }
      input.setSelectionRange(cursor, cursor);
    }
    changed();
  }
  function csvRows(text) {
    var delimiter = text.indexOf("\t") >= 0 ? "\t" : ",", rows = [], row = [], cell = "", quoted = false;
    for (var i = 0; i < text.length; i += 1) {
      var c = text.charAt(i);
      if (c === '"') { if (quoted && text.charAt(i + 1) === '"') { cell += '"'; i += 1; } else quoted = !quoted; }
      else if (!quoted && c === delimiter) { row.push(cell); cell = ""; }
      else if (!quoted && (c === "\n" || c === "\r")) { if (c === "\r" && text.charAt(i + 1) === "\n") i += 1; row.push(cell); if (row.some(function (v) { return v.trim(); })) rows.push(row); row = []; cell = ""; }
      else cell += c;
    }
    row.push(cell); if (row.some(function (v) { return v.trim(); })) rows.push(row);
    if (quoted) throw new Error("Dữ liệu có dấu ngoặc kép chưa đóng.");
    return rows;
  }
  function pasteRows(key) {
    var block = state.schema.blocks.filter(function (b) { return b.key === key; })[0];
    try {
      var rows = csvRows(byId("paste-" + key).value);
      if (rows.length && rows[0].every(function (value, index) { return block.fields[index] && value.trim() === block.fields[index].name; })) rows.shift();
      if (!rows.length) { notice("Chưa có dòng dữ liệu để thêm.", true); return; }
      if (rows.some(function (row) { return row.length !== block.fields.length; })) throw new Error("Số cột chưa khớp. Cần " + block.fields.length + " cột theo thứ tự hiển thị; dùng tab nếu số có dấu phẩy.");
      var imported = rows.map(function (values) { var row = {}; block.fields.forEach(function (field, index) { row[field.name] = parseValue(field.type, values[index].trim()); }); return row; });
      state.profile[key] = state.profile[key].filter(function (row) { return Object.keys(row).some(function (field) { return row[field] !== null && row[field] !== ""; }); }).concat(imported);
      changed(); renderFormView(); notice("Đã thêm " + imported.length + " dòng; đang kiểm tra dữ liệu.");
    } catch (error) { notice(error.message, true); }
  }
  function renderFormView() { if (state.mode === "editor") renderEditor(); else renderWizard(); }
  function uploadOnboarding(file) {
    if (!file || !writable()) return;
    clearTimeout(validationTimer); state.revision += 1;
    var generation = state.generation, revision = state.revision; state.busy = true; notice("Đang đọc và kiểm tra file…");
    SG.onboardingUpload(file).then(function (result) {
      if (generation !== state.generation) return;
      if (revision !== state.revision) { state.busy = false; notice("Dữ liệu đã thay đổi trong lúc đọc file. Tải lại file nếu muốn thay thế các trường vừa nhập.", true); return; }
      if (result.profile) { state.profile = result.profile; ensureProfile(); state.name = state.name || (state.profile.seller || {}).display_name || ""; }
      state.validation = result; state.validating = false; state.step = 2; state.busy = false; renderWizard();
      notice(result.ok ? "Đã đọc file. Kiểm tra và sửa dữ liệu trước khi lưu." : "File có lỗi; sửa các trường đã đọc được bên dưới.", !result.ok);
    }).catch(function (error) { if (generation === state.generation) { state.busy = false; notice(error.message, true); } });
  }
  function saveProject() {
    if (!canSave() || !writable()) return;
    state.busy = true; state.step = 4; renderWizard();
    SG.createProject({ owner: session.username, name: state.name.trim() || (state.profile.seller || {}).display_name || "Gian hàng của tôi", profile: state.profile }).then(function (result) {
      remove(draftKey); state.busy = false; state.projects.push(result.project); state.validation = result; return selectProject(result.project.project_id);
    }).then(function () { notice("Đã lưu hồ sơ. Bạn có thể hỏi về nhu cầu vốn và phương án huy động ngay."); }).catch(function (error) { state.busy = false; state.step = 3; renderWizard(); notice(error.message, true); });
  }
  function importSample() {
    if (state.busy || !writable()) return;
    state.busy = true; notice("Đang mở gian hàng mẫu…");
    SG.importProject({ owner: session.username, seller_id: session.sellerId || "seller_demo_001" }).then(function (result) {
      state.busy = false; state.projects = state.projects.filter(function (p) { return p.project_id !== result.project.project_id; }); state.projects.push(result.project); return selectProject(result.project.project_id);
    }).catch(function (error) { state.busy = false; notice(error.message, true); });
  }
  function editProfile(jump) {
    if (!state.project) return;
    clearTimeout(validationTimer); state.generation += 1; state.mode = "editor"; state.validation = null; state.busy = false; state.validating = false; closeSidebar();
    var generation = state.generation, project = state.project;
    main.innerHTML = loading("Đang tải hồ sơ hiện tại…");
    return Promise.all([getSchema(), read(function () { return SG.project(project.project_id); }, projectSnapshot(project))]).then(function (results) {
      if (generation !== state.generation) return;
      state.profile = results[1].profile || {}; state.before = results[1].preview; state.validation = results[1]; state.diff = null; ensureProfile(); renderEditor(); if (jump) jumpBlock(jump);
    }).catch(function (error) { if (generation === state.generation) main.innerHTML = errorPanel(error, "edit-profile"); });
  }
  function diffHtml(before, after) {
    if (!before || !after) return '<p class="schema-help">Đã lưu. Chưa có đủ hai kết quả công cụ để so sánh trước và sau.</p>';
    var fields = [["funding_need", "Nhu cầu vốn", "money"], ["pd", "Xác suất vỡ nợ", "rate"], ["recommended_limit", "Hạn mức khuyến nghị", "money"], ["total_cost", "Chi phí tài chính", "money"], ["risk_band", "Nhóm rủi ro", "band"]];
    function value(field, data) { return field[2] === "money" ? fmt.vnd(data[field[0]]) + " VND" : field[2] === "rate" ? fmt.pct(data[field[0]]) : statusLabels[data[field[0]]] || data[field[0]] || "—"; }
    return '<section class="card diff-card"><h3>Đã lưu · so sánh kết quả công cụ</h3><div class="table-wrap"><table><thead><tr><th>Chỉ số</th><th>Trước</th><th>Sau</th></tr></thead><tbody>' + fields.map(function (field) { return '<tr><td>' + esc(field[1]) + '</td><td>' + esc(value(field, before)) + '</td><td>' + esc(value(field, after)) + '</td></tr>'; }).join("") + '</tbody></table></div></section>';
  }
  function renderEditor() {
    main.innerHTML = '<div class="wizard"><div class="view-heading"><div><div class="eyebrow">Dữ liệu nguồn</div><h1>Hồ sơ gian hàng</h1><p>' + esc(state.project.name) + ' · Mọi kết quả tính bắt đầu từ 5 khối này.</p></div><button class="btn btn-sm" data-do="back-chat">Về đoạn chat</button></div><div class="wizard-actions"><button class="btn" data-do="download-profile">Tải hồ sơ hiện tại (.xlsx)</button><button class="btn" data-do="upload-profile">Cập nhật bằng file</button></div>' + (state.diff || "") + formHtml() + '<div id="validation" class="validation-box" aria-live="polite"></div><div class="wizard-actions"><button class="btn" data-do="validate">Kiểm tra lại</button><button class="btn btn-primary" id="save-profile" data-do="save-editor"' + (!canSave() ? " disabled" : "") + '>Lưu thay đổi</button></div></div>'; renderValidation();
  }
  function updateProject(result) {
    state.project = result.project || state.project;
    state.projects = state.projects.map(function (project) { return project.project_id === state.project.project_id ? state.project : project; }); renderProjects();
  }
  function saveEditor() {
    if (!canSave() || !writable()) return;
    var id = state.project.project_id, before = state.before, generation = state.generation;
    state.busy = true; renderValidation();
    SG.updateProjectProfile(id, state.profile).then(function (result) {
      if (generation !== state.generation) return;
      state.busy = false; state.diff = diffHtml(before, result.preview); state.before = result.preview; state.validation = result; updateProject(result); renderEditor(); main.scrollTop = 0; loadApplications(); notice("Đã cập nhật hồ sơ và tính lại các chỉ số.");
    }).catch(function (error) { if (generation === state.generation) { state.busy = false; renderValidation(); notice(error.message, true); } });
  }
  function uploadProfile(file) {
    if (!file || !state.project || !writable()) return;
    var project = state.project, before, generation = state.generation;
    notice("Đang kiểm tra file cập nhật…");
    SG.project(project.project_id).then(function (data) { before = data.preview; return SG.uploadProjectProfile(project.project_id, file); }).then(function (result) {
      if (!state.project || state.project.project_id !== project.project_id || generation !== state.generation) return;
      updateProject(result);
      return editProfile().then(function () { state.diff = diffHtml(before, result.preview); renderEditor(); main.scrollTop = 0; notice("Đã cập nhật hồ sơ bằng file và tính lại kết quả."); });
    }).catch(function (error) { notice("Chưa cập nhật hồ sơ: " + error.message + " Hồ sơ đã lưu được giữ nguyên nếu file không hợp lệ.", true); });
  }
  function submitApplication(actionId) {
    if (!state.project || state.busy || !writable()) return;
    var id = state.project.project_id; state.busy = true;
    notice("Đang nộp hồ sơ xin cấp vốn…");
    SG.createApplication(id, { amount: null, action_id: actionId || null, note: "" }).then(function (result) {
      state.busy = false;
      if (state.project && state.project.project_id === id) { state.project.funding_status = result.application.status; renderProjects(); loadApplications(); }
      notice("Đã nộp hồ sơ. Theo dõi tiến trình thẩm định tại thanh dự án.");
    }).catch(function (error) { state.busy = false; notice(error.message, true); });
  }
  function jumpBlock(key) {
    if (state.mode === "wizard" && state.step !== 2) { state.step = 2; renderWizard(); }
    var block = byId("block-" + key);
    if (block) { block.scrollIntoView({ block: "start" }); var input = block.querySelector("input"); if (input) input.focus({ preventScroll: true }); }
  }
  function download(url) { if (!writable()) return; var link = document.createElement("a"); link.href = url; link.download = ""; document.body.appendChild(link); link.click(); link.remove(); }
  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-do]"); if (!button || button.disabled) return;
    var action = button.dataset.do, id = button.dataset.id;
    if (action === "project") selectProject(id);
    else if (action === "conversation") openConversation(id);
    else if (action === "new-project") startWizard();
    else if (action === "reload-projects") loadProjects();
    else if (action === "new-conversation") newConversation().catch(function (error) { notice(error.message, true); });
    else if (action === "edit-profile") editProfile();
    else if (action === "fix") editProfile(id);
    else if (action === "back-chat") { state.generation += 1; clearTimeout(validationTimer); state.busy = false; renderChat(); }
    else if (action === "reload-health") loadHealth();
    else if (action === "reload-applications") loadApplications();
    else if (action === "reload-messages" && state.conversation) openConversation(state.conversation.conversation_id);
    else if (action === "suggest") { if (byId("message")) { byId("message").value = button.textContent; byId("message").focus(); } }
    else if (action === "manual" || action === "upload-method") { state.method = action === "manual" ? "manual" : "upload"; state.step = 2; renderWizard(); }
    else if (action === "sample") importSample();
    else if (action === "wizard-back") { state.step = Math.max(1, state.step - 1); renderWizard(); }
    else if (action === "edit-draft") { state.step = 2; renderWizard(); }
    else if (action === "review") { state.step = 3; renderWizard(); validate(); main.scrollTop = 0; }
    else if (action === "validate") validate();
    else if (action === "add-row" || action === "remove-row") { if (action === "add-row") state.profile[id].push({}); else state.profile[id].splice(Number(button.dataset.row), 1); changed(); renderFormView(); }
    else if (action === "paste") pasteRows(id);
    else if (action === "jump") jumpBlock(id);
    else if (action === "save-project") saveProject();
    else if (action === "save-editor") saveEditor();
    else if (action === "template") download(SG.onboardingTemplate());
    else if (action === "download-profile" && state.project) download(SG.downloadProjectProfile(state.project.project_id));
    else if (action === "upload-profile") { if (writable()) byId("profile-file").click(); }
    else if (action === "apply") submitApplication(id);
  });
  main.addEventListener("input", function (event) {
    if (event.target.dataset.field) inputField(event.target);
    if (event.target.id === "project-name") { state.name = event.target.value; saveDraft(); }
  });
  main.addEventListener("change", function (event) { if (event.target.id === "onboarding-file") uploadOnboarding(event.target.files[0]); });
  main.addEventListener("submit", function (event) { if (event.target.id === "composer") { event.preventDefault(); send(byId("message").value); } });
  main.addEventListener("keydown", function (event) { if (event.target.id === "message" && event.key === "Enter" && !event.shiftKey && !event.isComposing) { event.preventDefault(); send(event.target.value); } });
  main.addEventListener("dragover", function (event) { var zone = event.target.closest("#drop-zone"); if (zone) { event.preventDefault(); zone.classList.add("dragging"); } });
  main.addEventListener("dragleave", function (event) { var zone = event.target.closest("#drop-zone"); if (zone) zone.classList.remove("dragging"); });
  main.addEventListener("drop", function (event) { var zone = event.target.closest("#drop-zone"); if (zone) { event.preventDefault(); zone.classList.remove("dragging"); uploadOnboarding(event.dataTransfer.files[0]); } });
  byId("profile-file").addEventListener("change", function () { var file = this.files[0]; this.value = ""; uploadProfile(file); });
  byId("logout").addEventListener("click", Auth.logout);
  byId("account-name").textContent = session.username;
  byId("account-role").textContent = session.label || (session.role === "seller" ? "Người bán" : "Quản trị viên");
  var sidebar = restore(sidebarKey) || {};
  if (sidebar.collapsed) byId("workspace-shell").classList.add("sidebar-collapsed");
  byId("sidebar-width").value = Math.max(240, Math.min(380, Number(sidebar.width) || 280));
  document.body.style.setProperty("--sidebar-width", byId("sidebar-width").value + "px");
  byId("sidebar-toggle").addEventListener("click", function () {
    var shell = byId("workspace-shell");
    if (window.innerWidth <= 720) shell.classList.toggle("sidebar-open");
    else { shell.classList.toggle("sidebar-collapsed"); store(sidebarKey, { width: Number(byId("sidebar-width").value), collapsed: shell.classList.contains("sidebar-collapsed") }); }
    syncSidebar();
  });
  byId("sidebar-width").addEventListener("input", function () { document.body.style.setProperty("--sidebar-width", this.value + "px"); store(sidebarKey, { width: Number(this.value), collapsed: byId("workspace-shell").classList.contains("sidebar-collapsed") }); });
  byId("sidebar-backdrop").addEventListener("click", closeSidebar);
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeSidebar(); });
  window.addEventListener("resize", syncSidebar); syncSidebar();
  function connect() {
    state.generation += 1; state.schema = null; byId("project-list").innerHTML = loading(); main.innerHTML = loading("Đang kết nối…");
    var attempt = SG.isBlockedByBrowser() ? Promise.reject(new Error(SG.connectionHint())) : SG.health();
    return attempt.then(function () { SG.demoMode = false; byId("demo-banner").hidden = true; }).catch(function (error) { SG.demoMode = true; byId("demo-banner").hidden = false; notice(error.message, true); }).then(loadProjects);
  }
  byId("api-base").value = SG.baseUrl();
  byId("api-save").addEventListener("click", function () { SG.setBaseUrl(byId("api-base").value); connect(); });
  connect();
})();
