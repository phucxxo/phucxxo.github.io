/* =============================================================================
   SellerGraph API client.

   The console can run in two places:
     - served BY the backend at /app/  -> same origin, no CORS, no config
     - served from GitHub Pages        -> needs an explicit backend URL

   When no backend is reachable the console falls back to a clearly-labelled
   demo dataset so the UI can still be reviewed. Demo data is never presented
   as live: every screen shows a banner while it is in use.
   ============================================================================= */

(function (global) {
  "use strict";

  var STORAGE_KEY = "sg_api_base";

  function defaultBase() {
    // Served from the backend itself (…/app/admin.html) -> same origin.
    if (global.location.pathname.indexOf("/app/") === 0) return "";
    if (/^https?:$/.test(global.location.protocol) &&
        /^(localhost|127\.0\.0\.1)$/.test(global.location.hostname)) {
      return global.location.origin;
    }
    // Anywhere else (GitHub Pages, file://) -> assume a local backend.
    return "http://localhost:8000";
  }

  var API = {
    /* ---- configuration -------------------------------------------------- */
    baseUrl: function () {
      try {
        var stored = global.localStorage.getItem(STORAGE_KEY);
        if (stored !== null) return stored;
      } catch (e) {
        /* private mode / blocked storage */
      }
      return defaultBase();
    },

    setBaseUrl: function (url) {
      var clean = (url || "").trim().replace(/\/+$/, "");
      try {
        global.localStorage.setItem(STORAGE_KEY, clean);
      } catch (e) {
        /* ignore */
      }
      return clean;
    },

    demoMode: false,

    /* ---- transport ------------------------------------------------------ */
    request: function (path, options) {
      var opts = options || {};
      var url = API.baseUrl() + path;
      var init = {
        method: opts.method || "GET",
        headers: { Accept: "application/json" },
        mode: "cors",
      };
      if (opts.body !== undefined) {
        init.headers["Content-Type"] = "application/json";
        init.body = JSON.stringify(opts.body);
      }

      var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      if (controller) init.signal = controller.signal;
      var timer = global.setTimeout(function () {
        if (controller) controller.abort();
      }, opts.timeout || 120000);

      return fetch(url, init)
        .then(function (response) {
          global.clearTimeout(timer);
          return response.text().then(function (text) {
            var data = null;
            try {
              data = text ? JSON.parse(text) : null;
            } catch (e) {
              data = { raw: text };
            }
            if (!response.ok) {
              var err = new Error(
                (data && data.error && data.error.message) ||
                  "HTTP " + response.status
              );
              err.status = response.status;
              err.code = (data && data.error && data.error.code) || "HTTP_ERROR";
              err.payload = data;
              throw err;
            }
            return data;
          });
        })
        .catch(function (error) {
          global.clearTimeout(timer);
          if (error.status) throw error;
          // Network-level failure: unreachable, CORS, or blocked mixed content.
          var netErr = new Error(
            "Không kết nối được backend tại " + API.baseUrl()
          );
          netErr.code = "NETWORK";
          netErr.cause = error;
          throw netErr;
        });
    },

    get: function (path, opts) {
      return API.request(path, opts);
    },

    post: function (path, body, opts) {
      var merged = opts || {};
      merged.method = "POST";
      merged.body = body === undefined ? {} : body;
      return API.request(path, merged);
    },

    /* ---- endpoints ------------------------------------------------------ */
    health: function () {
      return API.get("/health", { timeout: 6000 });
    },
    systemInfo: function () {
      return API.get("/v1/system/info", { timeout: 10000 });
    },
    listSellers: function () {
      return API.get("/v1/sellers");
    },
    sellerState: function (id) {
      return API.get("/v1/sellers/" + encodeURIComponent(id) + "/state");
    },
    sellerOverview: function (id) {
      return API.get("/v1/sellers/" + encodeURIComponent(id) + "/overview");
    },
    runAgent: function (payload) {
      return API.post("/v1/agent/run", payload, { timeout: 180000 });
    },
    workflow: function (id) {
      return API.get("/v1/workflows/" + encodeURIComponent(id));
    },
    action: function (id) {
      return API.get("/v1/actions/" + encodeURIComponent(id));
    },
    approve: function (id, who) {
      return API.post("/v1/actions/" + encodeURIComponent(id) + "/approve", {
        approved_by: who,
      });
    },
    reject: function (id, who) {
      return API.post("/v1/actions/" + encodeURIComponent(id) + "/reject", {
        rejected_by: who,
      });
    },
    execute: function (id) {
      return API.post("/v1/actions/" + encodeURIComponent(id) + "/execute", undefined, {
        timeout: 60000,
      });
    },
    monitoringTick: function (id, replan) {
      return API.post(
        "/v1/monitoring/tick/" + encodeURIComponent(id) + "?replan=" + (replan ? "true" : "false"),
        undefined,
        { timeout: 180000 }
      );
    },

    /* admin */
    adminStats: function () {
      return API.get("/v1/admin/stats");
    },
    adminSellers: function () {
      return API.get("/v1/admin/sellers");
    },
    adminWorkflows: function (sellerId, limit) {
      var q = "?limit=" + (limit || 50);
      if (sellerId) q += "&seller_id=" + encodeURIComponent(sellerId);
      return API.get("/v1/admin/workflows" + q);
    },
    adminActions: function () {
      return API.get("/v1/admin/actions");
    },
    adminWorkflowDetail: function (id) {
      return API.get("/v1/admin/workflows/" + encodeURIComponent(id));
    },
  };

  /* ---- formatting helpers shared by every screen ------------------------- */

  API.fmt = {
    vnd: function (value) {
      if (value === null || value === undefined || isNaN(value)) return "—";
      return Math.round(Number(value)).toLocaleString("vi-VN");
    },
    compact: function (value) {
      if (value === null || value === undefined || isNaN(value)) return "—";
      var n = Number(value);
      if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(2) + " tỷ";
      if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1) + " tr";
      return API.fmt.vnd(n);
    },
    pct: function (value, digits) {
      if (value === null || value === undefined || isNaN(value)) return "—";
      return (Number(value) * 100).toFixed(digits === undefined ? 2 : digits) + "%";
    },
    dt: function (iso) {
      if (!iso) return "—";
      var d = new Date(iso.length <= 19 ? iso + "Z" : iso);
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleString("vi-VN", {
        day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
      });
    },
    ms: function (value) {
      if (value === null || value === undefined) return "—";
      return Number(value).toFixed(2) + "ms";
    },
  };

  /* Escape before any innerHTML use. */
  API.esc = function (value) {
    return String(value === null || value === undefined ? "" : value).replace(
      /[&<>"']/g,
      function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      }
    );
  };

  global.SG = API;
})(window);
