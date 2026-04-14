# 06 — Testing and Validation Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity

## Validation Before Any Commit

```bash
npm run lint     # ESLint
npm run build    # TypeScript + Next.js build gate
```

TypeScript errors surface during `npm run build`. There is no separate `typecheck` script.

## Build Verification

Watch for:
- Tailwind v3 purge issues (check content paths in `tailwind.config.ts`)
- GSAP SSR errors (ScrollTrigger must be registered inside `useEffect`)
- Three.js SSR errors (`ssr: false` required)
- Embla Carousel SSR errors (`"use client"` required)

## Schema Validation

After any JSON-LD change: run Rich Results Test. Confirm H1 / title / schema alignment.

## What "Verified" Means

1. `npm run lint` passes
2. `npm run build` passes
3. No visual regressions
4. For schema changes: Rich Results Test passes
