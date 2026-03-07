/**
 * 株式会社 清蓮 コーポレートサイト 共通JavaScript
 * Apple / LEXUS 準拠デザイン対応 / モダンモーション対応 (Spec-04)
 */

(function () {
  "use strict";

  // prefers-reduced-motion のチェック（一元管理）
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  // スクロールリビール（IntersectionObserver）とStagger制御
  // ========================================
  function initReveal() {
    if (prefersReduced) {
      document.querySelectorAll(".reveal, .clip-reveal-container").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    // 遅延キューとグループ管理用の変数
    const staggerGroups = {};
    const baseDelay = 80;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const staggerGroupName = el.getAttribute("data-stagger");

            if (staggerGroupName) {
              if (!staggerGroups[staggerGroupName]) {
                staggerGroups[staggerGroupName] = [];
              }
              staggerGroups[staggerGroupName].push(el);
              
              // グループごとに遅延を計算してクラス付与をスケジュール
              setTimeout(() => {
                const groupElements = staggerGroups[staggerGroupName];
                if (groupElements.length > 0) {
                  // ソートはDOM上の順序等でも良いが、pushされた順（≒ビューに入った順）で処理
                  groupElements.forEach((element, index) => {
                    setTimeout(() => {
                      element.classList.add("is-visible");
                      // clip-reveal 対応
                      if(element.classList.contains("clip-reveal-container")){
                          element.classList.add("is-visible");
                      }
                    }, index * baseDelay);
                  });
                  // 処理後リセット
                  staggerGroups[staggerGroupName] = [];
                }
              }, 50); // デバウンス用のわずかな待機時間
            } else {
              // Stagger不要の要素
              el.classList.add("is-visible");
            }
            
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    document.querySelectorAll(".reveal, .clip-reveal-container").forEach(function (el) {
      observer.observe(el);
    });

    // Heroセクション: .hero-content に is-visible を付与して
    // CSS blur-fade stagger を発動させる (Spec 11 §3-3)
    setTimeout(() => {
        const heroContent = document.querySelector(".hero-content.reveal-stagger");
        if (heroContent) {
          heroContent.classList.add("is-visible");
        }
    }, 100);
  }

  // ========================================
  // ヘッダースクロール制御
  // ========================================
  function initHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      function () {
        const y = window.scrollY;
        if (y > 100) {
          header.style.boxShadow = "var(--shadow-sm)";
        } else {
          header.style.boxShadow = "none";
        }
      },
      { passive: true }
    );
  }

  // ========================================
  // Sticky Progress (スクロール進行バー)
  // ========================================
  function initStickyProgress() {
    if (prefersReduced) return;

    const sections = document.querySelectorAll(".sticky-progress-section");
    if (sections.length === 0) return;

    let ticking = false;

    function updateProgress() {
      sections.forEach(function (section) {
        const barContainer = section.querySelector(".sticky-progress-container");
        const bar = section.querySelector(".sticky-progress-bar");
        if (!bar || !barContainer) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // セクションがビューポート内にあるか
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          // 進行度の計算: 0 (見え始め) から 1 (見え終わり)
          // 完全に見え始める（画面下端に触れる）〜完全に消える（画面上端を抜ける）
          const totalDistance = rect.height + viewportHeight;
          const currentDistance = viewportHeight - rect.top;
          let progress = currentDistance / totalDistance;

          // 0〜1にクランプ
          progress = Math.max(0, Math.min(1, progress));

          // バーの幅を更新 (0〜100%)
          bar.style.width = (progress * 100) + "%";
        }
      });
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateProgress);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ========================================
  // スムーススクロール（擬似）
  // ========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href === "#" || href === "#!") {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerEl = document.querySelector(".header");
          const headerHeight = headerEl ? headerEl.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }
      });
    });
  }

  // ========================================
  // 初期化
  // ========================================
  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initReveal();
    initStickyProgress();
    initHeaderScroll();
    initSmoothScroll();
  });
})();
