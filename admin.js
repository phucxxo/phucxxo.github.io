/* Portfolio oversight: every financial value comes from an API or captured snapshot. */
(function () {
  "use strict";
  var session = Auth.require("admin");
  if (!session) return;
  var esc = SG.esc, fmt = SG.fmt;
  var state = { portfolio: null, sellers: [], applications: [], risk: "count", sort: "display_name", direction: 1, detail: null, tab: "scores", token: 0, busy: {}, focus: null };
  var colors = ["#6e9fff", "#62dbb8", "#c3a1ff", "#f3c975"];
  var statuses = { SUBMITTED: "Đã nộp", UNDER_REVIEW: "Đang thẩm định", APPROVED: "Đã duyệt", DISBURSED: "Đã giải ngân", REJECTED: "Từ chối", ACTIVE: "Đang hoạt động", PARKED: "Tạm nghỉ", WAITING_APPROVAL: "Chờ phê duyệt", AWAITING_APPROVAL: "Chờ phê duyệt", PROPOSAL_CREATED: "Đã tạo đề xuất", POLICY_REJECTED: "Chính sách từ chối", NO_ACTION_NEEDED: "Không cần vốn", EXECUTED: "Đã giải ngân", FAILED_TOOL: "Lỗi công cụ", REPLAN_REQUIRED: "Cần lập lại kế hoạch" };
  function el(id) { return document.getElementById(id); }
  // All renderers below produce escaped HTML. Only static markup and numeric SVG geometry bypass esc.
  function put(id, html) { el(id).innerHTML = html; }
  function empty(message) { return '<div class="empty">' + esc(message || (SG.demoMode ? "Chưa có dữ liệu trong bản chụp demo." : "Chưa có dữ liệu.")) + '</div>'; }
  function failure(error) { return '<div class="msg-error" role="alert">Không tải được dữ liệu: ' + esc(error.message || error) + '. Bấm Làm mới để thử lại.</div>'; }
  function money(value) { return esc(fmt.vnd(value)); }
  function pct(value) { return esc(fmt.pct(value)); }
  function number(value) { return typeof value === "number" && isFinite(value) ? value : 0; }
  function color(value, fallback) { return /^#[0-9a-f]{6}$/i.test(value || "") ? value : fallback; }
  function badge(status) { return '<span class="badge ' + (status === "REJECTED" || status === "HIGH" ? 'badge-bad' : status === "APPROVED" || status === "DISBURSED" || status === "LOW" ? 'badge-ok' : 'badge-info') + '">' + esc(statuses[status] || status || "—") + '</span>'; }
  function rows(data, key) { return Array.isArray(data) ? data : data && Array.isArray(data[key]) ? data[key] : []; }
  function demo(key, id) { var data = window.DEMO || {}; return id === undefined ? data[key] : data[key] && data[key][id]; }
  function fetchData(method, key, id) { return SG.demoMode ? Promise.resolve(demo(key, id)) : method(); }
  function json(data) { return '<pre class="json">' + esc(JSON.stringify(data === undefined ? null : data, null, 2)) + '</pre>'; }
  function kv(pairs) { return '<dl class="kv">' + pairs.map(function (p) { return '<div><dt>' + esc(p[0]) + '</dt><dd>' + esc(p[1] === undefined || p[1] === null ? '—' : p[1]) + '</dd></div>'; }).join('') + '</dl>'; }
  function spark(daily, field) {
    if (!daily.length) return '';
    var max = Math.max.apply(null, daily.map(function (d) { return number(d[field]); }).concat([1]));
    var points = daily.map(function (d, i) { return (i * 120 / Math.max(1, daily.length - 1)).toFixed(2) + ',' + (29 - number(d[field]) / max * 25).toFixed(2); }).join(' ');
    return '<svg class="sparkline" viewBox="0 0 120 32" role="img" aria-label="' + esc(field === 'disbursed' ? 'Giải ngân từng ngày trong 14 ngày' : 'Hồ sơ nộp từng ngày trong 14 ngày') + '"><polyline points="' + esc(points) + '" fill="none" stroke="#80aaff" stroke-width="2" /></svg>';
  }
  function renderKpis(p) {
    if (!p) { put('kpis', empty()); return; }
    var k = p.kpi || {}, total = (p.alliance || {}).totals || {}, daily = p.daily || [];
    var cards = [ ['Tổng dư nợ', fmt.vnd(k.exposure), 'VND · giải ngân 14 ngày bên dưới', 'disbursed'], ['Vốn còn lại của liên minh', fmt.vnd(total.remaining), 'VND · khả năng cấp vốn còn lại'], ['PD bình quân', fmt.pct(k.avg_pd), 'Xác suất vỡ nợ từ lõi tài chính'], ['Tỷ lệ duyệt', fmt.pct(k.approval_rate), 'Trên hồ sơ theo dữ liệu danh mục'], ['Hồ sơ chờ duyệt', k.applications_pending, 'Hồ sơ mới mỗi ngày bên dưới', 'applications'], ['Thời gian ra quyết định', k.avg_decision_seconds === undefined ? '—' : k.avg_decision_seconds + ' giây', 'Trung bình theo danh mục'] ];
    put('kpis', cards.map(function (c) { return '<div class="kpi"><div class="kpi-label">' + esc(c[0]) + '</div><div class="kpi-value">' + esc(c[1] === undefined ? '—' : c[1]) + '</div><div class="kpi-sub">' + esc(c[2]) + '</div>' + (c[3] ? spark(daily, c[3]) : '') + '</div>'; }).join(''));
  }
  function bar(deployed, remaining, fill, label) {
    var total = number(deployed) + number(remaining), width = total > 0 ? Math.max(0, Math.min(100, number(deployed) / total * 100)) : 0;
    return '<svg class="capital-bar" viewBox="0 0 100 5" preserveAspectRatio="none" role="img" aria-label="' + esc(label) + '"><rect width="100" height="5" rx="2.5" fill="#243044" /><rect width="' + width.toFixed(3) + '" height="5" rx="2.5" fill="' + esc(fill) + '" /></svg>';
  }
  function renderAlliance(p) {
    var a = p && p.alliance;
    if (!a) { put('alliance', empty()); return; }
    var lead = a.lead || {}, t = a.totals || {};
    var html = '<div class="alliance-lead"><span class="bank-mark">' + esc(lead.short || 'WeB') + '</span><div><h3>' + esc(lead.name || 'WeBank') + '</h3><span>' + esc(lead.role || 'Chủ liên minh') + '</span></div><span class="lead-line"></span><span class="mono">' + esc((a.members || []).length) + ' ngân hàng thành viên</span></div>';
    html += '<div class="alliance-total"><div><span>Vốn cam kết</span><strong>' + money(t.committed) + ' <small>VND</small></strong></div><div><span>Đã sử dụng</span><strong>' + pct(t.utilization) + '</strong></div></div>' + bar(t.deployed, t.remaining, '#82aaff', 'Tổng vốn liên minh') + '<div class="bar-labels"><span>Đã giải ngân <b>' + money(t.deployed) + '</b></span><span>Còn lại <b>' + money(t.remaining) + '</b></span></div>';
    html += (a.members || []).map(function (b, i) { return '<div class="bank-row"><div class="bank-heading"><span class="bank-mark small" style="color:' + esc(color(b.color, colors[i % 4])) + '">' + esc(b.short) + '</span><strong>' + esc(b.name) + '</strong><span class="mono">' + pct(b.utilization) + '</span></div>' + bar(b.deployed, b.remaining, color(b.color, colors[i % 4]), b.name + ': đã giải ngân ' + fmt.vnd(b.deployed) + ', còn lại ' + fmt.vnd(b.remaining)) + '<div class="bar-labels"><span>Đã giải ngân ' + money(b.deployed) + '</span><span>Còn lại ' + money(b.remaining) + '</span></div></div>'; }).join('');
    put('alliance', html);
  }
  function renderRisk() {
    var data = state.portfolio && state.portfolio.risk_distribution || [], total = data.reduce(function (sum, r) { return sum + number(r[state.risk]); }, 0), offset = 0;
    if (!data.length || !total) { put('risk', empty('Chưa có phân bố rủi ro cho đơn vị này.')); return; }
    var svg = '<svg class="risk-donut" viewBox="0 0 220 190" role="img" aria-label="Phân bố rủi ro theo ' + (state.risk === 'count' ? 'số gian hàng' : 'dư nợ') + '"><circle cx="110" cy="90" r="65" fill="none" stroke="#243044" stroke-width="20" />';
    data.forEach(function (r, i) { var size = number(r[state.risk]) / total * 408.407; svg += '<circle cx="110" cy="90" r="65" fill="none" stroke="' + esc(color(r.color, colors[i % 4])) + '" stroke-width="20" stroke-dasharray="' + size.toFixed(3) + ' 408.407" stroke-dashoffset="' + (-offset).toFixed(3) + '" transform="rotate(-90 110 90)"><title>' + esc(r.band + ': ' + (state.risk === 'count' ? r.count : fmt.vnd(r.exposure))) + '</title></circle>'; offset += size; });
    svg += '<text x="110" y="87" text-anchor="middle" fill="#f2f6ff" font-size="' + (state.risk === 'count' ? '28' : '15') + '">' + esc(state.risk === 'count' ? total : fmt.vnd(total)) + '</text><text x="110" y="109" text-anchor="middle" fill="#a9b6c9" font-size="11">' + (state.risk === 'count' ? 'gian hàng' : 'VND dư nợ') + '</text></svg>';
    put('risk', svg + '<div class="chart-legend">' + data.map(function (r, i) { return '<div><i style="background:' + esc(color(r.color, colors[i % 4])) + '"></i><span>' + esc(r.band) + '</span><strong>' + esc(state.risk === 'count' ? r.count + ' gian hàng' : fmt.vnd(r.exposure) + ' VND') + '</strong></div>'; }).join('') + '</div>');
  }
  function renderDaily(p) {
    var data = p && p.daily || [];
    if (!data.length) { put('daily', empty()); return; }
    var max = Math.max.apply(null, data.map(function (d) { return number(d.disbursed); }).concat([1]));
    var step = 560 / data.length, total = data.reduce(function (s, d) { return s + number(d.disbursed); }, 0);
    var svg = '<div class="chart-total">' + money(total) + ' <small>VND đã giải ngân</small></div><svg class="daily-chart" viewBox="0 0 600 180" role="img" aria-label="Giải ngân từng ngày trong 14 ngày"><path d="M20 30H580 M20 80H580 M20 130H580" fill="none" stroke="#263249" stroke-dasharray="3 5" />';
    data.forEach(function (d, i) { var height = number(d.disbursed) / max * 115; svg += '<rect x="' + (22 + i * step).toFixed(2) + '" y="' + (145 - height).toFixed(2) + '" width="' + Math.max(1, step - 9).toFixed(2) + '" height="' + height.toFixed(2) + '" rx="3" fill="#83aaff"><title>' + esc(d.date + ': ' + fmt.vnd(d.disbursed) + ' VND · ' + d.applications + ' hồ sơ · ' + d.workflows + ' lần chạy') + '</title></rect>'; if (i % 3 === 0 || i === data.length - 1) svg += '<text x="' + (22 + i * step).toFixed(2) + '" y="169" fill="#b0bed2" font-size="10">' + esc(String(d.date).slice(5)) + '</text>'; });
    put('daily', svg + '</svg><p class="kpi-sub">Mỗi cột là số vốn đã giải ngân trong ngày. Di chuột để xem số hồ sơ và lần chạy.</p>');
  }
  function renderFunding(p) {
    var data = p && p.funding_mix || [], total = data.reduce(function (sum, d) { return sum + number(d.amount); }, 0), x = 0;
    if (!data.length || !total) { put('funding', empty()); return; }
    var svg = '<div class="chart-total">' + money(total) + ' <small>VND</small></div><svg class="funding-bar" viewBox="0 0 400 34" role="img" aria-label="Cơ cấu tiền mặt, tín dụng nhà cung cấp và vay ngân hàng">';
    data.forEach(function (d, i) { var width = number(d.amount) / total * 400; svg += '<rect x="' + x.toFixed(3) + '" width="' + width.toFixed(3) + '" height="34" fill="' + colors[i % 4] + '"><title>' + esc(d.label + ': ' + fmt.vnd(d.amount)) + '</title></rect>'; x += width; });
    put('funding', svg + '</svg><div class="chart-legend">' + data.map(function (d, i) { return '<div><i style="background:' + colors[i % 4] + '"></i><span>' + esc(d.label) + '</span><strong>' + money(d.amount) + ' · ' + pct(d.share) + '</strong></div>'; }).join('') + '</div><p class="kpi-sub">Lõi tài chính chọn nguồn vốn theo chi phí: tiền mặt, phí tín dụng nhà cung cấp và lãi vay theo kỳ hạn.</p>');
  }
  function renderWatchlist(p) {
    var data = p && p.watchlist || [];
    put('watchlist', data.length ? data.map(function (w) { return '<button class="watch-item severity-' + (w.severity === 'HIGH' ? 'high' : 'medium') + '" data-seller="' + esc(w.seller_id) + '"><span><strong>' + esc(w.display_name) + '</strong><span>' + esc(w.detail || w.reason) + '</span></span><span>' + badge(w.severity) + '<small>PD ' + pct(w.pd) + '</small></span></button>'; }).join('') : empty(p ? 'Chưa có cảnh báo sớm.' : undefined));
  }
  function renderModel(p) {
    var m = p && p.model_health;
    if (!m) { put('model', empty()); return; }
    put('model', '<p class="model-summary">' + badge(m.degraded ? 'PARKED' : 'ACTIVE') + ' <strong>' + esc(m.active_model || 'Chưa có mô hình hoạt động') + '</strong></p><p class="kpi-sub">Gemini điều phối và giải thích; số tài chính luôn đến từ công cụ.</p><ol class="model-chain">' + (m.chain || []).map(function (c) { return '<li><span class="model-dot ' + (c.state === 'ACTIVE' ? 'is-active' : '') + '"></span><strong>' + esc(c.model) + '</strong><span>' + esc(statuses[c.state] || c.state) + (c.until ? ' · đến ' + esc(fmt.dt(c.until)) : '') + '</span></li>'; }).join('') + '</ol>');
  }
  function renderPortfolio(p) { state.portfolio = p || null; renderKpis(p); renderAlliance(p); renderRisk(); renderDaily(p); renderFunding(p); renderWatchlist(p); renderModel(p); el('updated-at').textContent = p ? 'Cập nhật ' + fmt.dt(p.generated_at) : 'Chưa có bản chụp danh mục'; }
  function renderApplications() {
    var pending = state.applications.filter(function (a) { return ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED'].indexOf(a.status) !== -1; });
    el('queue-count').textContent = pending.length + ' hồ sơ cần xử lý';
    put('applications', pending.length ? pending.map(function (a) { var disabled = SG.demoMode || state.busy[a.application_id] ? ' disabled' : ''; return '<div class="application-row"><button class="seller-link" data-seller="' + esc(a.seller_id) + '"><strong>' + esc(a.seller_name || a.seller_id) + '</strong><small>' + esc(a.application_id) + '</small></button><div><strong>' + money(a.amount) + ' VND</strong><small>PD ' + pct(a.pd) + ' · ' + esc(a.risk_band || '—') + '</small></div>' + badge(a.status) + '<div class="decision-buttons">' + (a.status === 'APPROVED' ? '<button class="btn btn-sm btn-primary" data-decision="DISBURSE" data-application="' + esc(a.application_id) + '"' + disabled + '>Giải ngân</button>' : '<button class="btn btn-sm" data-decision="APPROVE" data-application="' + esc(a.application_id) + '"' + disabled + '>Duyệt</button><button class="btn btn-sm btn-reject" data-decision="REJECT" data-application="' + esc(a.application_id) + '"' + disabled + '>Từ chối</button>') + '</div></div>'; }).join('') + (SG.demoMode ? '<p class="kpi-sub">Bản chụp demo chỉ đọc. Kết nối backend để phê duyệt hoặc giải ngân.</p>' : '') : empty(SG.demoMode && !demo('applications') ? undefined : 'Không có hồ sơ đang chờ xử lý.'));
  }
  function renderSellers() {
    var sellers = state.sellers.slice().sort(function (a, b) { var x = a[state.sort], y = b[state.sort]; if (state.sort === 'recommended_limit') { x = x === undefined ? a.recommended_credit_limit : x; y = y === undefined ? b.recommended_credit_limit : y; } return state.direction * (typeof x === 'number' && typeof y === 'number' ? x - y : String(x || '').localeCompare(String(y || ''), 'vi')); });
    el('sellers-count').textContent = sellers.length + ' gian hàng';
    put('sellers-body', sellers.length ? sellers.map(function (s) { return '<tr><td><button class="seller-link" data-seller="' + esc(s.seller_id) + '"><strong>' + esc(s.display_name || s.seller_id) + '</strong><small>' + esc(s.seller_id) + '</small></button></td><td class="num">' + money(s.recommended_limit === undefined ? s.recommended_credit_limit : s.recommended_limit) + '</td><td class="num">' + pct(s.interest_rate) + '</td><td class="num">' + pct(s.pd) + '</td><td>' + badge(s.risk_band) + '</td><td class="num">' + money(s.funding_need) + '</td><td class="num">' + money(s.exposure) + '</td></tr>'; }).join('') : '<tr><td colspan="7">' + empty() + '</td></tr>');
  }
  function loadAll() {
    put('board-notice', '');
    return Promise.all([
      fetchData(function () { return SG.adminPortfolio(); }, 'portfolio').then(renderPortfolio).catch(function (e) { ['kpis', 'alliance', 'risk', 'daily', 'funding', 'watchlist', 'model'].forEach(function (id) { put(id, failure(e)); }); }),
      fetchData(function () { return SG.adminSellers(); }, 'adminSellers').then(function (d) { state.sellers = rows(d, 'sellers'); renderSellers(); }).catch(function (e) { put('sellers-body', '<tr><td colspan="7">' + failure(e) + '</td></tr>'); }),
      fetchData(function () { return SG.adminApplications(); }, 'applications').then(function (d) { state.applications = rows(d, 'applications'); renderApplications(); }).catch(function (e) { put('applications', failure(e)); })
    ]);
  }
  function connect() {
    el('refresh').disabled = true; el('updated-at').textContent = 'Đang kết nối…';
    return SG.health().then(function () { SG.demoMode = false; el('demo-banner').hidden = true; }, function (error) { SG.demoMode = true; el('demo-banner').hidden = false; el('demo-note').textContent = error.message + '. ' + SG.connectionHint(); }).then(loadAll).then(function () { el('refresh').disabled = false; }, function (e) { el('refresh').disabled = false; put('board-notice', failure(e)); });
  }
  function decide(id, decision) {
    if (SG.demoMode || state.busy[id]) return;
    var app = state.applications.filter(function (a) { return a.application_id === id; })[0];
    if (!app || (decision === 'DISBURSE' && app.status !== 'APPROVED')) return;
    var previous = app.status; state.busy[id] = true; app.status = { APPROVE: 'APPROVED', REJECT: 'REJECTED', DISBURSE: 'DISBURSED' }[decision]; renderApplications();
    put('board-notice', '<p class="notice">Đang ghi nhận quyết định…</p>');
    SG.adminDecision(id, { decision: decision, by: session.username || 'admin', note: '' }).then(function () { delete state.busy[id]; return loadAll(); }).then(function () { put('board-notice', '<p class="notice">Đã ghi nhận quyết định và làm mới danh mục.</p>'); }, function (e) { delete state.busy[id]; app.status = previous; renderApplications(); put('board-notice', failure(e)); });
  }
  function timeline(a) { return '<ol class="application-timeline">' + (a.timeline || []).map(function (t) { return '<li><strong>' + esc(statuses[t.status] || t.status) + '</strong><small>' + esc(fmt.dt(t.at)) + ' · ' + esc(t.by || '—') + '</small>' + (t.note ? '<p>' + esc(t.note) + '</p>' : '') + '</li>'; }).join('') + '</ol>'; }
  function profileTable(value) {
    var data = Array.isArray(value) ? value : value ? [value] : [], keys = [];
    data.forEach(function (row) { Object.keys(row).forEach(function (k) { if (keys.indexOf(k) === -1) keys.push(k); }); });
    if (!data.length) return empty('Chưa có dữ liệu khối này.');
    return '<div class="table-wrap"><table><thead><tr>' + keys.map(function (k) { return '<th>' + esc(fieldLabels[k] || k) + '</th>'; }).join('') + '</tr></thead><tbody>' + data.map(function (row) { return '<tr>' + keys.map(function (k) { var v = row[k]; if (/rate$|^pd$|confidence|utilization/.test(k)) v = fmt.pct(v); else if (/balance|credit|value|sales$|payables|payout$|cost|price|limit|amount|funding_need|capital_need|exposure/.test(k)) v = fmt.vnd(v); return '<td>' + esc(v === undefined ? '—' : typeof v === 'object' ? JSON.stringify(v) : v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  var fieldLabels = { seller_id: 'Mã gian hàng', display_name: 'Tên gian hàng', currency: 'Tiền tệ', cash_balance: 'Tiền mặt', available_bank_credit: 'Hạn mức ngân hàng', current_inventory_value: 'Giá trị tồn kho', avg_daily_sales: 'Doanh thu bình quân/ngày', pending_marketplace_payout: 'Tiền sàn chờ trả', expected_payout_date: 'Ngày sàn dự kiến trả', supplier_payables: 'Công nợ nhà cung cấp', open_loan_balance: 'Dư nợ vay', sku: 'Mã hàng', on_hand: 'Tồn kho', avg_daily_units: 'Số lượng bình quân/ngày', unit_cost: 'Giá vốn', supplier_lead_time_days: 'Ngày giao hàng', order_date: 'Ngày bán', units: 'Số lượng', unit_price: 'Giá bán', supplier_id: 'Mã nhà cung cấp', credit_limit: 'Hạn mức', credit_days: 'Số ngày tín dụng', lead_time_days: 'Thời gian giao', fee_rate: 'Phí trọn kỳ', bank_id: 'Mã ngân hàng', available_credit: 'Hạn mức ngân hàng', annual_interest_rate: 'Lãi suất năm', min_tenor_days: 'Kỳ hạn tối thiểu', disbursement_fee_rate: 'Phí giải ngân' };
  function renderScores(d) {
    var s = d.scores || {};
    return '<p class="kpi-sub">Các chỉ số được tính bởi lõi tài chính tất định từ hồ sơ người bán.</p>' + kv([['PD', fmt.pct(s.pd)], ['Nhóm rủi ro', s.risk_band], ['Hạn mức khuyến nghị', fmt.vnd(s.recommended_limit)], ['Lãi suất năm', fmt.pct(s.interest_rate)], ['Nhu cầu vốn', fmt.vnd(s.funding_need)], ['Dư nợ', fmt.vnd(s.exposure)], ['Sử dụng hạn mức', fmt.pct(s.limit_utilization)], ['Độ tin cậy dự báo', fmt.pct(s.forecast_confidence)], ['Số ngày đủ hàng', s.days_of_cover], ['Đòn bẩy', s.leverage_ratio], ['Thanh khoản', s.liquidity_ratio]]) + '<h4>Yếu tố tác động</h4>' + ((s.factors || []).length ? (s.factors || []).map(function (f) { return '<div class="factor ' + (f.direction === 'bad' ? 'risk-HIGH' : 'risk-LOW') + '"><strong>' + esc(f.label) + '</strong><span>' + esc(f.value) + '</span><span>' + esc(f.impact) + '</span></div>'; }).join('') : empty('Chưa có yếu tố được trả về.'));
  }
  function conversationList(list) { return list.length ? list.slice().sort(function (a, b) { return String(b.updated_at || '').localeCompare(String(a.updated_at || '')); }).map(function (c) { return '<button class="detail-list-button" data-conversation="' + esc(c.conversation_id) + '"><strong>' + esc(c.title || 'Đoạn chat') + '</strong><small>' + esc(fmt.dt(c.updated_at)) + ' · ' + esc(c.message_count === undefined ? '—' : c.message_count) + ' tin nhắn</small></button>'; }).join('') : empty('Chưa có cuộc trò chuyện.'); }
  function switchTab(tab) {
    state.tab = tab;
    Array.prototype.forEach.call(el('tabs').querySelectorAll('[data-tab]'), function (b) { b.classList.toggle('is-active', b.getAttribute('data-tab') === tab); b.setAttribute('aria-selected', b.getAttribute('data-tab') === tab ? 'true' : 'false'); });
    var d = state.detail;
    if (!d) return;
    if (tab === 'scores') put('drawer-body', renderScores(d));
    if (tab === 'profile') { var profile = d.profile || { seller: d.seller, inventory: d.inventory, supplier_terms: d.supplier_terms, bank_facility: d.bank_facility }; put('drawer-body', [['seller', 'Bảng cân đối gian hàng'], ['inventory', 'Tồn kho'], ['sales_history', 'Lịch sử bán'], ['supplier_terms', 'Điều khoản nhà cung cấp'], ['bank_facility', 'Hạn mức ngân hàng']].map(function (b) { return '<h4>' + esc(b[1]) + '</h4>' + profileTable(profile[b[0]]); }).join('')); }
    if (tab === 'applications') put('drawer-body', (d.applications || []).length ? d.applications.map(function (a) { return '<section class="application-detail"><h4>' + esc(a.application_id) + '</h4>' + badge(a.status) + kv([['Số tiền', fmt.vnd(a.amount)], ['PD', fmt.pct(a.pd)], ['Ngân hàng', a.bank_id]]) + timeline(a) + '</section>'; }).join('') : empty('Chưa có hồ sơ vay.'));
    if (tab === 'workflows') put('drawer-body', (d.workflows || []).length ? d.workflows.map(function (w) { return '<button class="detail-list-button" data-workflow="' + esc(w.workflow_id) + '"><strong>' + esc(w.user_message || w.workflow_id) + '</strong><small>' + esc(fmt.dt(w.created_at)) + ' · ' + esc(statuses[w.status] || w.status) + '</small></button>'; }).join('') : empty('Chưa có lần chạy.'));
    if (tab === 'conversations') {
      put('drawer-body', empty('Đang tải lịch sử chat…')); var token = ++state.token;
      var request = SG.demoMode ? Promise.resolve({ conversations: d.conversations || [] }) : SG.adminConversations((d.seller || {}).seller_id || state.sellerId, 50);
      request.then(function (r) { if (token === state.token && state.tab === tab) put('drawer-body', conversationList(rows(r, 'conversations'))); }, function (e) { if (token === state.token) put('drawer-body', failure(e)); });
    }
  }
  function openSeller(id) {
    state.focus = document.activeElement; state.sellerId = id; state.detail = null; var token = ++state.token;
    el('drawer').hidden = false; el('drawer-backdrop').hidden = false; document.body.style.overflow = 'hidden'; el('drawer-title').textContent = 'Đang tải hồ sơ…'; el('drawer-sub').textContent = id; put('drawer-body', empty('Đang tải…')); el('drawer-close').focus();
    fetchData(function () { return SG.adminSellerProfile(id); }, 'sellerProfiles', id).then(function (d) { if (token !== state.token) return; if (!d) { el('drawer-title').textContent = 'Hồ sơ người bán'; put('drawer-body', empty()); return; } state.detail = d; el('drawer-title').textContent = (d.seller || {}).display_name || id; switchTab('scores'); }, function (e) { if (token === state.token) { el('drawer-title').textContent = 'Hồ sơ người bán'; put('drawer-body', failure(e)); } });
  }
  function openMessages(id) {
    var token = ++state.token; put('drawer-body', empty('Đang tải tin nhắn…'));
    fetchData(function () { return SG.conversationMessages(id); }, 'messages', id).then(function (data) { if (token !== state.token || state.tab !== 'conversations') return; var messages = rows(data, 'messages'); put('drawer-body', '<button class="btn btn-sm" data-back="conversations">← Danh sách đoạn chat</button>' + (messages.length ? '<div class="admin-chat">' + messages.map(function (m) { return '<article class="admin-message ' + (m.role === 'user' ? 'is-user' : 'is-assistant') + '"><small>' + (m.role === 'user' ? 'Người bán' : 'Trợ lý') + ' · ' + esc(fmt.dt(m.created_at)) + '</small>' + (m.role === 'assistant' && m.facts ? '<div class="facts-block"><strong>Số liệu từ lõi tài chính</strong>' + profileTable(m.facts) + '<p class="kpi-sub">Số liệu do công cụ tính. Phần văn bản bên dưới là lời giải thích của mô hình.</p></div>' : '') + '<div class="message-prose ' + (m.role === 'user' ? 'msg-user' : 'explanation') + '">' + esc(m.content || '') + '</div></article>'; }).join('') + '</div>' : empty())); }, function (e) { if (token === state.token) put('drawer-body', failure(e)); });
  }
  function openWorkflow(id) {
    var token = ++state.token; put('drawer-body', empty('Đang tải đầu vào / đầu ra…'));
    var request = SG.demoMode ? Promise.resolve(window.DEMO && typeof DEMO.workflowDetail === 'function' ? DEMO.workflowDetail(id) : null) : SG.adminWorkflowDetail(id);
    request.then(function (d) {
      if (token !== state.token || state.tab !== 'workflows') return;
      if (!d) { put('drawer-body', empty()); return; }
      var html = '<button class="btn btn-sm" data-back="workflows">← Danh sách lần chạy</button><h4>' + esc(d.workflow_id || id) + '</h4>' + badge(d.status) + '<h4>Số liệu và chính sách</h4>' + json({ facts: d.facts, policy_decision: d.policy_decision }) + '<h4>Đầu vào / đầu ra công cụ</h4><p class="kpi-sub">Mỗi lần gọi giữ nguyên đầu vào, đầu ra và hash đối chiếu nhật ký.</p>';
      html += (d.tool_calls || []).length ? d.tool_calls.map(function (c) { return '<details class="toolcall"><summary><span class="step-no">' + esc(c.step) + '</span><span class="tool-name">' + esc(c.tool_name) + '</span>' + badge(c.success ? 'APPROVED' : 'FAILED_TOOL') + '<span>' + esc(fmt.ms(c.latency_ms)) + '</span></summary><div class="toolcall-body">' + (c.error_message ? failure(c.error_message) : '') + '<div class="io-grid"><div><h5>Đầu vào</h5>' + json(c.input) + '</div><div><h5>Đầu ra</h5>' + json(c.output) + '</div></div><div class="hashes"><span>Hash đầu vào: ' + esc(c.input_hash || '—') + '</span><span>Hash đầu ra: ' + esc(c.output_hash || '—') + '</span><span>' + esc(fmt.dt(c.created_at)) + '</span></div></div></details>'; }).join('') : empty('Chưa có lần gọi công cụ.');
      html += '<details class="toolcall"><summary>Nhật ký và diễn biến</summary>' + json({ audit: d.audit || [], trace: d.trace || [], errors: d.errors || [] }) + '</details><details class="toolcall"><summary>Đề xuất, giải ngân và lịch trả nợ</summary>' + json({ action: d.action, execution: d.execution, capital_plan: d.capital_plan, repayment_schedule: d.repayment_schedule }) + '</details>';
      put('drawer-body', html);
    }, function (e) { if (token === state.token) put('drawer-body', failure(e)); });
  }
  function closeDrawer() { ++state.token; el('drawer').hidden = true; el('drawer-backdrop').hidden = true; document.body.style.overflow = ''; if (state.focus && state.focus.focus) state.focus.focus(); }
  document.addEventListener('click', function (event) {
    var button = event.target.closest('button'); if (!button) return;
    if (button.hasAttribute('data-seller')) openSeller(button.getAttribute('data-seller'));
    if (button.hasAttribute('data-decision')) decide(button.getAttribute('data-application'), button.getAttribute('data-decision'));
    if (button.hasAttribute('data-tab')) { ++state.token; switchTab(button.getAttribute('data-tab')); }
    if (button.hasAttribute('data-back')) switchTab(button.getAttribute('data-back'));
    if (button.hasAttribute('data-workflow')) openWorkflow(button.getAttribute('data-workflow'));
    if (button.hasAttribute('data-conversation')) openMessages(button.getAttribute('data-conversation'));
    if (button.hasAttribute('data-sort')) { var key = button.getAttribute('data-sort'); state.direction = state.sort === key ? -state.direction : 1; state.sort = key; Array.prototype.forEach.call(el('seller-head').querySelectorAll('th'), function (th) { th.removeAttribute('aria-sort'); }); button.parentNode.setAttribute('aria-sort', state.direction === 1 ? 'ascending' : 'descending'); renderSellers(); }
    if (button.hasAttribute('data-risk')) { state.risk = button.getAttribute('data-risk'); Array.prototype.forEach.call(el('risk-toggle').querySelectorAll('button'), function (b) { var active = b === button; b.classList.toggle('is-active', active); b.setAttribute('aria-pressed', active ? 'true' : 'false'); }); renderRisk(); }
  });
  document.addEventListener('keydown', function (event) {
    if (el('drawer').hidden) return;
    if (event.key === 'Escape') closeDrawer();
    if (event.key === 'Tab') { var nodes = el('drawer').querySelectorAll('button:not(:disabled), a[href], summary, [tabindex="0"]'), first = nodes[0], last = nodes[nodes.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
  });
  el('drawer-close').addEventListener('click', closeDrawer); el('drawer-backdrop').addEventListener('click', closeDrawer);
  el('refresh').addEventListener('click', connect); el('logout').addEventListener('click', Auth.logout);
  el('api-save').addEventListener('click', function () { SG.setBaseUrl(el('api-base').value); connect(); });
  el('api-base').value = SG.baseUrl(); el('role-label').textContent = (session.username || 'admin') + ' · Quản trị'; connect();
})();
