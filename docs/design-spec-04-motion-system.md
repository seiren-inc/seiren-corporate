# 清蓮コーポレートサイト デザイン設計書 04

## モーション設計詳細

【BLOCK 1】

清蓮コーポレートサイトを「最新のモダンデザインサイト水準」に引き上げるため、トップページ中心に“先進的なモーション/エフェクト”を実装してください。
ただし信頼業種（供養/終活）として不安を与える派手さは避け、「上質で現代的」な範囲に収めます。
配色は清蓮ロゴ配色（青緑/蓮ピンク/若草）をアクセント運用し、ニュートラル主体を維持します。

────────────────────────
【対象】
/index.html
/assets/styles.css
/assets/main.js（なければ新規）
/assets/img/\*（既存の仮画像運用OK）

※既存のa11y（skip-link, main, aria-label等）/SEO（canonical/OGP/JSON-LD等）は破壊禁止。

────────────────────────
【実装方針（“最新”の定義）】

- スクロール連動の“滑らかさ”と“段差のある情報提示”を作る
- 単なるフェードではなく、以下のモダン手法を採用する
  1. Stagger（段差表示）
  2. Blur→Clear（霧が晴れる表現）
  3. Clip/Mask reveal（画像の切り抜き表示：控えめ）
  4. Sticky＋Scroll progress（セクションの進行を感じさせる：控えめ）
  5. Hover micro interaction（浮き・ハイライト・境界線アニメ）
- ただし重いライブラリは避け、原則 “素のJS + IntersectionObserver + requestAnimationFrame” で構成。
- 追加ライブラリが必要な場合は「GSAP（最小）をCDNで導入」まで許可（ScrollTriggerは使わない方向で検討）。

────────────────────────
【モーション仕様（必須）】

■ 1) Smooth-ish scroll（擬似スムース）

- iOS/アクセシビリティを壊さないため、強制スムーススクロールライブラリは原則禁止。
- 代替として「セクション内の表示が滑らかに感じる」ように、スクロールリビールとsticky演出で体感を作る。

■ 2) Reveal system（段差＋ブラー解除＋軽いY移動）

- class="reveal" を付けた要素を IntersectionObserver で監視。
- 可視化時に is-visible を付与。
- 追加で data-stagger="groupName" を導入し、同一group内は 80ms間隔で段差表示。

CSS（例：必須要件）

- 初期：opacity:0 / translateY(18px) / blur(10px)
- 表示：opacity:1 / translateY(0) / blur(0)
- duration：600ms前後
- easing：cubic-bezier(0.2,0.8,0.2,1)

■ 3) Hero “最新っぽさ”の肝（テキスト＆背景の演出）

- Hero背景画像に薄いノイズ/グレイン“風”をCSSで（画像追加不要、CSS疑似要素でOK）
- Hero見出しは「1文字ずつ」ではなく、単語/行単位の分割にして上品に（過剰演出禁止）
  - 実装：見出しを <span class="split-line"> で2行程度に分割し、行ごとにstagger
- HeroのCTAは hover 時に「境界線が伸びる」or「ハイライトが走る」どちらか1つだけ採用

■ 4) 画像の“モダン”表示（Clip reveal）

- 画像コンテナに overflow:hidden
- is-visible で clip-path を 0%→100%（または scaleX）で見せる
- 速度は600ms、動きは小さく

■ 5) Sticky progress（最新の“体験感”）

- トップの「事業領域」セクションに小さな進行ラインを追加（左端 or 上端）
- スクロール進行で width が増える（requestAnimationFrameでscroll位置から計算）
- 視認性は弱く（--line + 低opacity）
- アクセントで brand-primary を 1箇所のみ使用可

■ 6) Hover micro（カード・ボタン）

- カード：hoverで1〜2px浮く + 影弱 + border-colorがbrand-primaryへ
- ボタン：hoverで背景/枠の色変化＋軽い浮き
- クリック時：activeでtranslateY(0)へ戻す

────────────────────────
【prefers-reduced-motion（必須）】

- reduce の場合：
  - reveal/clip/sticky progress を無効化
  - すべて即時表示
  - hoverの浮きも最小化
- CSSとJS両方で対応（matchMediaで分岐）

────────────────────────
【配色（清蓮ロゴ配色の運用・必須）】
styles.css を以下のトークン前提に整理し、エフェクトの色もここから参照：

--bg #ffffff
--surface #f5f7f8
--text #0f1720
--muted #5f6b75
--line rgba(15,23,32,.10)
--brand-primary #2F8C9C
--brand-primary-2 #246B77
--brand-accent #C9789B（極小：装飾点/バッジのみ）
--brand-support #8FBF74（極小）

アクセントの使い方：

- モーションの“光”や“ライン”は基本 brand-primary
- ピンクは“点”として1箇所まで（例：アイブロウ左の小ドット）
- 若草は区切り/補助のみ

────────────────────────
【コンテンツ（必須）】

- 既存の文言・セクション順は維持
- “最新化”はあくまで演出・余白・タイポ・写真配置で行う
- 予約制・電話中心の信頼情報は削除禁止（むしろ見つけやすく）

────────────────────────
【実装の優先順位】
P0：Reveal system（stagger対応） + reduced-motion
P0：Hero（split line + 背景グレイン + CTA hover）
P1：画像 clip reveal
P1：Sticky progress（事業領域）
P2：カード/ボタン micro最適化
