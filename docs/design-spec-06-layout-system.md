# 清蓮コーポレートサイト デザイン設計書 06

## レイアウト統一設計

【BLOCK 1】

対象：

- /index.html
- /business.html
- /strength.html
- /partner.html
- /company.html
- /contact.html
- /privacy.html
- /terms.html
- /assets/styles.css

目的：

- サイト全体の空気感を統一（余白・幅・整列）
- 上質さを「余白」と「タイポ」で作る（派手な装飾は禁止）
- セクションヘッダーの構造を統一し、情報理解を早くする

絶対ルール（破壊禁止）：

- ページ構造（セクション順）変更禁止
- 文言変更禁止
- リンク/CTAのURL変更禁止
- カードの表示条件（公開/準備中）変更禁止
- SEOタグ（canonical/OGP/JSON-LD）変更禁止
- a11y（skip-link/main/aria）削除禁止
- UI刷新禁止

実装要件：

■ 1) コンテナ（全ページ共通）

- max-width: 1200px
- margin: 0 auto
- padding: 0 24px（SPは 0 20px）

■ 2) セクション余白（全ページ共通）

- PC: padding 120px 0
- SP: padding 80px 0

■ 3) 余白スケール
使用可能サイズのみ：16 / 24 / 32 / 48 / 80 / 120（px）

- セクションヘッダー下：48px
- 段落間：24px
- 画像とテキストの間：48px
- カード間：PC 32px / SP 24px

■ 4) セクションヘッダーの統一（最重要）
標準構造：

<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">BUSINESS</span>
      <h2>日本語見出し</h2>
      <p class="lead">短い説明（最大2行程度）</p>
    </div>
    <div class="section-body">
      ...
    </div>
  </div>
</section>

eyebrowの語彙（固定）：
BUSINESS / ABOUT / PARTNERS / COMPANY / CONTACT / LEGAL

■ 5) セクションヘッダースタイル（styles.css）

- .section-header：下に48px
- .eyebrow：13px、letter-spacing 0.1em、muted、uppercase
- h2：28〜32px、600、line-height 1.4
- .lead：最大幅720px、muted、line-height 1.8

■ 6) グリッド（2カラム基準）

- gap: 48px
- SPは1カラム

■ 7) 本文ブロック max-width：720〜800px

■ 8) 罫線（line）の運用

- 1pxのみ
- color: var(--line)
- 多用禁止
