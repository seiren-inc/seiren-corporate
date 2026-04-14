---
name: bugfix-flow
description: Use for any bug investigation, unexpected behavior, or build failure. Mandates root cause investigation before any fix. Covers Next.js, GSAP, Framer Motion, Embla, and Three.js patterns.
---

# Bugfix Flow

**Iron Law: no fix without root cause.**

## Workflow

1. Reproduce: identify exact error, confirm steps
2. Investigate: read affected file, run `npm run lint && npm run build`
3. Hypothesis: "error occurs because X causes Y"
4. Fix: smallest change that fixes root cause
5. Verify: `npm run lint && npm run build`

## Common Patterns

- GSAP SSR error → register ScrollTrigger inside `useEffect`
- Three.js hydration → `dynamic import + ssr: false + <Suspense>`
- Embla Carousel SSR → add `"use client"`
- Framer Motion hydration → add `"use client"`; `AnimatePresence` → add `key`
- Tailwind v3 purge → check content paths in `tailwind.config.ts`
