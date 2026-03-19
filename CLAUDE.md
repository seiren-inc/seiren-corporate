# CLAUDE.md — seiren-corporate（技術エージェント向け憲法）

> 最終更新: 2026-03-19 | Package Manager: npm | Node: >=18.0.0

---

## コマンド一覧

```bash
npm run dev          # 開発サーバー起動
npm run build        # next build
npm run start        # 本番サーバー起動
npm run lint         # ESLint
```

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| Framework | Next.js 15.x (App Router) |
| React | 19.x |
| Styling | Tailwind CSS v3（tailwind.config.tsにブランドカラー定義済み） |
| Animation | GSAP 3 + Lenis（スクロール）+ Framer Motion v12（UI） |
| 3D | Three.js / @react-three/fiber / @react-three/drei |
| Carousel | Embla Carousel v8 |

---

## 重要：tailwind.config.tsのカスタムカラー

```ts
// 変更禁止のブランドカラー定義
brand: { primary: "#2f8c9c", hover: "#246b77", accent: "#c9789b", support: "#8fbf74", secondary: "#e6f3f5" }
neutral: { bg: "#ffffff", surface: "#f5f7f8", text: "#0f1720", muted: "#5f6b75" }
```

---

## TypeScript 規約

```ts
// ✅ GSAP + useGSAP（@gsap/react）パターン
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// ✅ Lenis セットアップ（layout.tsx で一度だけ）
import Lenis from "lenis"

// ✅ Three.js は必ず dynamic import + ssr: false
import dynamic from "next/dynamic"
const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false })
```

---

## PPR & 最適化

```ts
// next.config.ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
```

---

## エラー解決

```bash
# GSAPのSSRエラー → ScrollTrigger は useEffect 内で register
# Three.js のSSRエラー → ssr: false + Suspense
# Tailwind v3の purge → content パスが正しいか確認
```
