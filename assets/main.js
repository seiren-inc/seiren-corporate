/**
 * 株式会社 清蓮 コーポレートサイト 共通JavaScript
 * Apple / LEXUS 準拠デザイン対応
 */

(function () {
  "use strict";

  // ========================================
  // モバイルメニュー制御
  // ========================================
  function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const headerNav = document.querySelector(".header-nav");

    if (menuToggle && headerNav) {
      menuToggle.addEventListener("click", function () {
        headerNav.classList.toggle("active");
        const isExpanded = headerNav.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
      });

      document.addEventListener("click", function (e) {
        if (!e.target.closest(".header-container")) {
          headerNav.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  // ========================================
  // スクロールリビール（IntersectionObserver）
  // ========================================
  function initReveal() {
    // prefers-reduced-motion 対応
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      // アニメーション無効：即座に表示
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // ========================================
  // ヘッダースクロール制御
  // ========================================
  function initHeaderScroll() {
    var header = document.querySelector(".header");
    if (!header) return;

    var lastY = 0;

    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (y > 100) {
          header.style.boxShadow = "var(--shadow-sm)";
        } else {
          header.style.boxShadow = "none";
        }
        lastY = y;
      },
      { passive: true },
    );
  }

  // ========================================
  // フォーム送信処理（ダミー）
  // ========================================
  function initContactForm() {
    var contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(contactForm);
        var name = formData.get("name");
        var phone = formData.get("phone");
        var category = formData.get("category");
        var message = formData.get("message");
        var agreement = formData.get("agreement");

        if (!name || !phone || !category || !message || !agreement) {
          alert("必須項目をすべて入力してください。");
          return;
        }

        var formContainer = document.querySelector(".contact-form-container");
        if (formContainer) {
          formContainer.innerHTML =
            '<div class="form-success" style="text-align: center; padding: var(--sp-xl);">' +
            '<h2 style="color: var(--brand-primary); margin-bottom: var(--sp-md);">' +
            "お問い合わせを受け付けました" +
            "</h2>" +
            '<p style="margin-bottom: var(--sp-sm);">' +
            "お問い合わせいただきありがとうございます。<br>" +
            "内容を確認の上、担当者より折り返しご連絡させていただきます。" +
            "</p>" +
            '<p style="margin-bottom: var(--sp-md); color: var(--muted);">' +
            "お急ぎの場合は、お電話でもお問い合わせいただけます。" +
            "</p>" +
            '<p style="font-size: var(--fs-xl); font-weight: 700; color: var(--brand-primary);">' +
            "TEL: 045-881-9952" +
            "</p>" +
            '<p style="margin-top: var(--sp-lg);">' +
            '<a href="/" class="btn btn-primary">トップページへ戻る</a>' +
            "</p>" +
            "</div>";
        }

        if (typeof gtag !== "undefined") {
          gtag("event", "form_submit", {
            event_category: "contact",
            event_label: category,
          });
        }
      });
    }
  }

  // ========================================
  // スムーススクロール
  // ========================================
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = this.getAttribute("href");

        if (href === "#" || href === "#!") {
          e.preventDefault();
          return;
        }

        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerEl = document.querySelector(".header");
          var headerHeight = headerEl ? headerEl.offsetHeight : 0;
          var targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // ========================================
  // 外部リンククリック計測
  // ========================================
  function initOutboundTracking() {
    var outboundLinks = document.querySelectorAll("a[data-outbound]");

    outboundLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var label = this.getAttribute("data-outbound");

        if (typeof gtag !== "undefined") {
          gtag("event", "outbound_click", {
            event_category: "business",
            event_label: label,
          });
        }
      });
    });
  }

  // ========================================
  // 現在のページをナビゲーションでハイライト
  // ========================================
  function highlightCurrentPage() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll(".header-nav a");

    navLinks.forEach(function (link) {
      var linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  // ========================================
  // 初期化
  // ========================================
  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initReveal();
    initHeaderScroll();
    initContactForm();
    initSmoothScroll();
    initOutboundTracking();
    highlightCurrentPage();
  });
})();
