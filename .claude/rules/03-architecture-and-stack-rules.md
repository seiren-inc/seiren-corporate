# 03 — Architecture and Stack Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity
> Stack: Next.js 15 / React 19 / TypeScript / Tailwind CSS v3 / npm / No database

## Directory Conventions

```
src/
  app/           ← Pages and layouts only
  components/
    ui/           ← Generic UI components
    common/       ← Shared components (Button, SmoothScroll, etc.)
    sections/     ← Page section components
    three/        ← Three.js scene components
  lib/            ← Utilities and helpers
  types/          ← Type definitions
```

## Component Rules

- Server Component is the default. Use `"use client"` only for animation or browser APIs.
- Framer Motion always requires `"use client"` and `key` on `AnimatePresence`.
- Three.js: always `dynamic import + ssr: false + <Suspense>`.
- Embla Carousel: `"use client"` required.

## TypeScript Rules

- `any` type is forbidden. Use `unknown` and narrow.
- All functions must have explicit return types.
- Path alias: `@/*` → `./src/*`

## Tailwind CSS v3 — Critical Rules

This repo uses **Tailwind CSS v3** (not v4). The `tailwind.config.ts` contains locked brand colors. Do NOT modify it.

```ts
// LOCKED — do not change these values
brand: { primary: "#2f8c9c", hover: "#246b77", accent: "#c9789b", support: "#8fbf74", secondary: "#e6f3f5" }
neutral: { bg: "#ffffff", surface: "#f5f7f8", text: "#0f1720", muted: "#5f6b75" }
```

For conditional class merging, use the `cn()` utility (not arbitrary Tailwind values).

## Animation Stack

```ts
// GSAP + useGSAP pattern
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// Lenis — initialize once in layout.tsx only
import Lenis from "lenis"

// Three.js — always dynamic import
const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false })
```

## No Database

This repo has no database layer. Do not add Supabase, Prisma, or any ORM.

## Package Manager

npm. Do not use pnpm or yarn.
