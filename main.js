/* =============================================================================
   Intelligence Designed To Evolve — count-up stats + mobile menu
   ============================================================================= */

(function () {
  "use strict";

  var MOBILE_BREAKPOINT = 720;
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------------------
     Stats count-up
     ------------------------------------------------------------------------- */

  var statValues = Array.prototype.slice.call(
    document.querySelectorAll(".stat-value")
  );

  function format(value, decimals, suffix) {
    return value.toFixed(decimals) + suffix;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function countUp(el, index) {
    var target = parseFloat(el.dataset.target);
    var decimals = parseInt(el.dataset.decimals, 10) || 0;
    var suffix = el.dataset.suffix || "";

    if (isNaN(target)) return;

    if (prefersReducedMotion) {
      el.textContent = format(target, decimals, suffix);
      return;
    }

    var duration = 1500 + index * 80;
    var startDelay = 480 + index * 90;
    var startedAt = null;

    function frame(now) {
      if (startedAt === null) startedAt = now;
      var elapsed = now - startedAt;
      var progress = Math.min(elapsed / duration, 1);
      el.textContent = format(
        target * easeOutCubic(progress),
        decimals,
        suffix
      );
      if (progress < 1) requestAnimationFrame(frame);
    }

    window.setTimeout(function () {
      requestAnimationFrame(frame);
    }, startDelay);
  }

  // Run once, when the stats row is actually on screen.
  if (statValues.length) {
    if (!("IntersectionObserver" in window)) {
      statValues.forEach(countUp);
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            observer.unobserve(el);
            countUp(el, statValues.indexOf(el));
          });
        },
        { threshold: 0.25 }
      );
      statValues.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---------------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------------- */

  var burger = document.querySelector(".burger");
  var menu = document.getElementById("mobile-menu");
  var overlay = document.querySelector("[data-menu-overlay]");

  if (burger && menu && overlay) {
    var isOpen = false;

    function setMenu(open) {
      isOpen = open;
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Đóng trình đơn" : "Mở trình đơn");
      menu.hidden = !open;
      overlay.hidden = !open;
      document.body.classList.toggle("menu-open", open);
    }

    burger.addEventListener("click", function () {
      setMenu(!isOpen);
    });

    overlay.addEventListener("click", function () {
      setMenu(false);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen) setMenu(false);
    });

    // Leaving the mobile breakpoint must not strand an open sheet.
    window.addEventListener("resize", function () {
      if (isOpen && window.innerWidth > MOBILE_BREAKPOINT) setMenu(false);
    });
  }

  /* ---------------------------------------------------------------------------
     Background video
     ------------------------------------------------------------------------- */

  var video = document.querySelector(".bg-video");
  if (video) {
    // Some mobile browsers ignore the autoplay attribute until a play() call.
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {
        /* Autoplay blocked; the black backdrop stands in. */
      });
    }
  }
})();
