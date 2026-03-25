# global-rules.md — seiren-corporate

> グループ: **A（清蓮 / Seiren）**  
> 最終更新: 2026-03-19

---

## 1. ブランドアイデンティティ

### カラーシステム（tailwind.config.ts 定義済み）

```ts
// tailwind.config.ts に定義済み—変更禁止
colors: {
  brand: {
    primary:   "#2f8c9c",  // Seiren Teal（最多使用・ロゴ主役）
    hover:     "#246b77",  // brand-primary のホバー/アクティブ
    accent:    "#c9789b",  // Lotus Pink（極小アクセント）
    support:   "#8fbf74",  // Soft Sage（区切り線補助のみ）
    secondary: "#e6f3f5",  // Teal の薄い背景
  },
  neutral: {
    bg:      "#ffffff",
    surface: "#f5f7f8",
    text:    "#0f1720",
    muted:   "#5f6b75",
    line:    "rgba(15, 23, 32, 0.10)",
  },
  surface: {
    light: "#f5f7f8",
    dark:  "#0f1720",
  },
}
```

> **ブランドカラーの追加・変更は禁止**。`brand.*` / `neutral.*` 以外のカラーをインラインで使わないこと。

### ブランドトーン
- 清潔・温かみ・信頼をベースとした、上品かつ誠実な企業らしさ
- 過度にカジュアルにならず、過度にフォーマルにもならないバランス

---

## 2. デザインシステム

### 基本方針
- **水彩調・品格ある余白感**を基本姿勢とする
- セクション間の余白は十分に確保（`py-24` / `py-32` を基本）
- カードの角丸は `rounded-2xl` 以上
- ボーダーは `neutral-line` カラーのみ使用

### フォント（tailwind.config.ts 定義済み）
```ts
fontFamily: {
  sans:  ['"Noto Sans JP"', 'sans-serif'],
  serif: ['"Noto Serif JP"', 'serif'],
}
```

| 要素 | フォント |
|------|---------|
| `h1`, `h2` | `font-serif`（Noto Serif JP・格調） |
| `h3` 以下 | `font-sans`（Noto Sans JP）|
| 本文・UI | `font-sans` |

---

## 3. アニメーション（GSAP 3 + Lenis）

このプロジェクトは `gsap@^3.14` / `lenis@^1.3` / `embla-carousel@^8.6` / `three@^0.183` を使用。
Framer Motionは**使用しない**。

### Lenis セットアップ（スムーズスクロール）

```tsx
// components/SmoothScroll.tsx
"use client"
import Lenis from "lenis"
import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return null
}
```

### GSAP ScrollTrigger パターン（清蓮向け：ゆっくり浮き上がり）

```tsx
"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.0,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }
    )
  }, { scope: ref })
  return <div ref={ref}>{children}</div>
}
```

### Embla Carousel 基本パターン

```tsx
"use client"
import useEmblaCarousel from "embla-carousel-react"

export function SerenCarousel({ slides }: { slides: React.ReactNode[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" })
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%]">{slide}</div>
        ))}
      </div>
    </div>
  )
}
```

### 禁止パターン
- GSAP `duration` が 0.3秒未満のアニメーション
- `power4` 以上の強い Ease（ブランドイメージと不一致）
- Three.js を本番ページの LCP 要素に使用すること（遅延ロード必須）

---

## 4. SEO / GEO

### 最優先エリア
横浜市 / 神奈川県全般

### JSON-LD（Organization）

```tsx
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "清蓮株式会社",
  "url": "https://seiren.co.jp",
  "logo": "https://seiren.co.jp/og-image.jpg",
  "areaServed": { "@type": "State", "name": "神奈川県" },
}
```

---

## 5. 技術スタック最適化パターン

**スタック**: Next.js 15 / React 19 / GSAP 3 / Lenis / Embla Carousel / Three.js / Tailwind CSS v3

### Three.js（パーフォーマンス必須事項）
```tsx
// Three.js は必ず dynamic import で遅延ロード
import dynamic from "next/dynamic"
const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-surface-light h-96 rounded-2xl" />,
})
```

### Image最適化
```tsx
// next/image を必ず使用
import Image from "next/image"
// priority: LCP対象の画像のみ true に設定
<Image src="/hero.webp" alt="清蓮" fill priority sizes="100vw" />
```

---

## 6. コンポーネント設計ルール

- `src/components/ui/` → 汎用UIコンポーネント
- `src/components/sections/` → ページセクション
- アニメーション用コンポーネントは `src/components/animation/` に集約
- `any` 型の使用禁止
- `console.log` の本番コードへの混入禁止

---

## 7. アニメーション アクセシビリティ基準（2026追加）

### useReducedMotion 必須ルール（framer-motion 新規追加）

このプロジェクトはframer-motionが新規追加された（既存はGSAP）。
GSAPとフランマーモーションの**両方で**`prefers-reduced-motion`を尊重すること。

```tsx
// Framer Motion の場合
import { useReducedMotion } from "framer-motion"

export function useMotionSafe() {
  return !useReducedMotion()
}
```

```ts
// GSAP の場合（ScrollTrigger内）
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

if (!prefersReduced) {
  gsap.fromTo(el, { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 1.0, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%", once: true },
  })
} else {
  gsap.set(el, { opacity: 1, y: 0 }) // 即時表示
}
```

### Suspense による重エフェクトの遅延

```tsx
// Three.js は必ずSuspense + dynamic import
import { Suspense } from "react"
import dynamic from "next/dynamic"
const ThreeScene = dynamic(() => import("@/components/three/Scene"), { ssr: false })

<Suspense fallback={<div className="animate-pulse bg-neutral-surface h-96 rounded-2xl" />}>
  <ThreeScene />
</Suspense>
```

### パフォーマンス基準
- LCP要素にアニメーションを付けることは禁止
- `will-change` は必要な要素のみ適用
- Lighthouse Performance スコア 90+ を維持すること

---

## 10. 2026年最新：AEO・高速配信・セキュリティルール（一括追加）

### Bento Grid 2.0（グリッドUIの2026標準）

```tsx
// 角丸24px以上・Spatial UI（ガラスモーフィズム）を標準化
<div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
  {/* コンテンツ */}
</div>
```

### AEO（AI回答エンジン最適化）— JSON-LD 必須実装

```tsx
// 全ページに JSON-LD を実装する共通パターン
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", /* スキーマオブジェクト */ }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
// グループA（清蓮）: LocalBusiness + Service + FAQPage + BreadcrumbList
// グループB（テック）: Organization/SoftwareApplication + FAQPage + Article
```

### PPR（Partial Prerendering）+ AVIF デフォルト化

```ts
// next.config.ts
const config: NextConfig = {
  experimental: { ppr: true },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
}
```

### Cloudflare Turnstile（reCAPTCHA代替・全フォーム必須）

```bash
npm install @marsidev/react-turnstile
# .env.local: NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY / CLOUDFLARE_TURNSTILE_SECRET_KEY
```

```tsx
"use client"
import { Turnstile } from "@marsidev/react-turnstile"
export function TurnstileWidget({ onSuccess }: { onSuccess: (token: string) => void }) {
  return <Turnstile siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!} onSuccess={onSuccess} options={{ theme: "auto", language: "ja" }} />
}
// Server Action: challenges.cloudflare.com/turnstile/v0/siteverify でトークン検証を忘れずに
```

### Lighthouse パフォーマンス目標

| 指標 | 目標 |
|------|------|
| Performance | 90+ |
| Accessibility | 95+ |
| SEO | 100 |
| LCP | < 2.5秒 |
| CLS | < 0.1 |
