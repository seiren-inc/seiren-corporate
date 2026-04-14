# 04 — UI/UX Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity
> UI stack: Tailwind CSS v3 (brand colors locked), GSAP 3, Framer Motion v12, Lenis, Embla Carousel v8, Three.js

## Design System

### Brand Colors (Tailwind v3 — LOCKED)
Use only the defined brand tokens. Do not add arbitrary color values.
- `brand-primary` (#2f8c9c), `brand-hover` (#246b77), `brand-accent` (#c9789b)
- `brand-support` (#8fbf74), `brand-secondary` (#e6f3f5)
- `neutral-bg` (#ffffff), `neutral-surface` (#f5f7f8), `neutral-text` (#0f1720)

### Typography
- Use `clamp()` for all heading sizes
- Enforce `max-width` on text containers
- H1 appears once per page; H1 → H2 → H3 hierarchy is strict

### Spacing
- 8px base scale: 8, 16, 24, 32, 48, 64, 96...
- Consistent vertical rhythm between sections

### Buttons and CTAs
- Minimum height: 48px
- CTA required in: hero, mid-section, footer
- Limit primary buttons to 1 per section

### Mobile First
- 375px baseline; all tap targets ≥ 48px; no horizontal overflow

## Animation Rules

- GSAP: `useGSAP` hook; register `ScrollTrigger` inside `useEffect`; cleanup on unmount
- Lenis: configured once in `layout.tsx`, not in individual pages
- Framer Motion: always `"use client"` + `key` on `AnimatePresence`
- Three.js: `dynamic import + ssr: false + <Suspense>`
- Embla Carousel: `"use client"` required
- Respect `prefers-reduced-motion`

## Prohibited

- Modifying brand color tokens in `tailwind.config.ts`
- Using arbitrary color values instead of brand tokens
- Multiple conflicting CTAs on the same screen
- Animations that ignore `prefers-reduced-motion`
