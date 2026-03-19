# CODEX.md — seiren-corporate（事業エージェント向け文脈）

> 最終更新: 2026-03-19 | グループ: A（清蓮 / Seiren）

---

## Project Goal（事業の目的）

**「清蓮グループの事業全体を、高品位なブランドとして一つに伝える」**

「お墓じまいナビ」「お墓ナビ」「遺骨ラボ」などのサービスを展開する
清蓮株式会社のコーポレートサイト。神奈川・横浜エリアを中心に
「終活・葬送・供養」の市場でグループの統一ブランドを確立する。

ターゲット: B2B（提携希望の霊園・葬儀社）+ B2C（終活を考える家族）

---

## Brand Identity

**「静謐・格調・信頼」**（清蓮グループの最上位ブランド）
- Seiren Teal (#2f8c9c) をロゴ主役に、Lotus Pink (#c9789b) を極小アクセントとして使用
- GSAP ScrollTrigger によるゆっくりとした浮き上がりアニメーション
- Three.js を使った上品な背景演出（重くなりすぎない範囲で）

---

## AEO（JSON-LD）ルール

```tsx
// Organization（全ページ）
{ "@type": "Organization", "name": "清蓮株式会社", "url": "https://seiren.co.jp", "areaServed": "神奈川県" }

// 企業ページ: AboutPage
{ "@type": "AboutPage", "name": "会社概要｜清蓮株式会社" }

// サービス一覧
{ "@type": "Service", "serviceType": "終活支援・お墓じまい・改葬サポート" }
```

---

## プライバシー・AI生成ルール

- コーポレートサイトのコピーライティングにAIを使う場合、法的情報（会社概要・登記情報等）をAIが創作することは禁止
- 企業メールアドレス・電話番号を実在しない情報に差し替えることは禁止

---

## PPR & Edge

```ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
```
