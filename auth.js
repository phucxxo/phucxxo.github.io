/* =============================================================================
   Demo role gate.

   !! THIS IS NOT AUTHENTICATION !!

   The credentials below are hard-coded in client-side JavaScript that anyone
   can read, and the backend does not check who is calling. This exists so the
   demo can show two different screens, nothing more. Production RBAC is
   explicitly out of scope for the MVP (implementation plan section 2.2).

   Anyone who can reach the API can call every endpoint directly, with or
   without this screen.
   ============================================================================= */

(function (global) {
  "use strict";

  var KEY = "sg_session";

  var ACCOUNTS = {
    admin: { password: "1234", role: "admin", label: "Quản trị viên" },
    seller: { password: "1234", role: "seller", label: "Người bán" },
  };

  var Auth = {
    accounts: ACCOUNTS,

    login: function (username, password) {
      var account = ACCOUNTS[String(username || "").trim().toLowerCase()];
      if (!account || account.password !== String(password)) return null;

      var session = {
        username: String(username).trim().toLowerCase(),
        role: account.role,
        label: account.label,
        // Which seller account the seller view is acting as.
        sellerId: "seller_demo_001",
        at: new Date().toISOString(),
      };
      try {
        global.sessionStorage.setItem(KEY, JSON.stringify(session));
      } catch (e) {
        /* ignore */
      }
      return session;
    },

    session: function () {
      try {
        var raw = global.sessionStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    update: function (patch) {
      var current = Auth.session();
      if (!current) return null;
      var next = Object.assign({}, current, patch);
      try {
        global.sessionStorage.setItem(KEY, JSON.stringify(next));
      } catch (e) {
        /* ignore */
      }
      return next;
    },

    logout: function () {
      try {
        global.sessionStorage.removeItem(KEY);
      } catch (e) {
        /* ignore */
      }
      global.location.href = "login.html";
    },

    /** Send the visitor to login unless their role matches. */
    require: function (role) {
      var session = Auth.session();
      if (!session || (role && session.role !== role)) {
        global.location.href = "login.html";
        return null;
      }
      return session;
    },
  };

  global.Auth = Auth;
})(window);
