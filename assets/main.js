/**
 * 株式会社 清蓮 コーポレートサイト 共通JavaScript
 */

(function() {
  'use strict';

  // ========================================
  // モバイルメニュー制御
  // ========================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (menuToggle && headerNav) {
      menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('active');
        
        // アクセシビリティ対応
        const isExpanded = headerNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
      });
      
      // メニュー外をクリックしたら閉じる
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.header-container')) {
          headerNav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // ========================================
  // フォーム送信処理（ダミー）
  // ========================================
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // バリデーション
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const category = formData.get('category');
        const message = formData.get('message');
        const agreement = formData.get('agreement');
        
        // 必須項目チェック
        if (!name || !phone || !category || !message || !agreement) {
          alert('必須項目をすべて入力してください。');
          return;
        }
        
        // 送信処理（ダミー）
        // 実際の実装では、ここでバックエンドAPIへ送信するか、
        // mailto:を使用するか、外部フォームサービスを利用します
        
        // 完了メッセージ表示
        const formContainer = document.querySelector('.contact-form-container');
        if (formContainer) {
          formContainer.innerHTML = `
            <div class="form-success" style="text-align: center; padding: var(--spacing-lg);">
              <h2 style="color: var(--color-primary); margin-bottom: var(--spacing-md);">
                お問い合わせを受け付けました
              </h2>
              <p style="margin-bottom: var(--spacing-sm);">
                お問い合わせいただきありがとうございます。<br>
                内容を確認の上、担当者より折り返しご連絡させていただきます。
              </p>
              <p style="margin-bottom: var(--spacing-md); color: var(--color-text-light);">
                お急ぎの場合は、お電話でもお問い合わせいただけます。
              </p>
              <p style="font-size: var(--font-size-xl); font-weight: 700; color: var(--color-primary);">
                TEL: 045-881-9952
              </p>
              <p style="margin-top: var(--spacing-lg);">
                <a href="/" class="btn btn-primary">トップページへ戻る</a>
              </p>
            </div>
          `;
        }
        
        // GA4イベント送信（実装時に有効化）
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            'event_category': 'contact',
            'event_label': category
          });
        }
      });
    }
  }

  // ========================================
  // スムーススクロール
  // ========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // ハッシュのみの場合はスキップ
        if (href === '#' || href === '#!') {
          e.preventDefault();
          return;
        }
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========================================
  // 外部リンククリック計測
  // ========================================
  function initOutboundTracking() {
    const outboundLinks = document.querySelectorAll('a[data-outbound]');
    
    outboundLinks.forEach(link => {
      link.addEventListener('click', function() {
        const label = this.getAttribute('data-outbound');
        
        // GA4イベント送信（実装時に有効化）
        if (typeof gtag !== 'undefined') {
          gtag('event', 'outbound_click', {
            'event_category': 'business',
            'event_label': label
          });
        }
      });
    });
  }

  // ========================================
  // 現在のページをナビゲーションでハイライト
  // ========================================
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.header-nav a');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath) {
        link.style.fontWeight = '700';
        link.style.color = 'var(--color-primary)';
      }
    });
  }

  // ========================================
  // 初期化
  // ========================================
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
    initOutboundTracking();
    highlightCurrentPage();
  });

})();
