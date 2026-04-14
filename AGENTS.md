# AGENTS.md — seiren-corporate

> Applies to: Claude Code, Codex, Antigravity
> Compact pointer contract. Full policy lives in `.claude/rules/` and `docs/ai/`.

---

## Core rules
- Plan-first
- Minimal diff
- No unrelated refactor

## UI protection
- DO NOT change layout, spacing, typography
- DO NOT modify design or animations

## SEO protection
- DO NOT change meta tags (title, description)
- DO NOT modify canonical URLs
- DO NOT alter structured data (JSON-LD)
- DO NOT change sitemap or robots configuration
- DO NOT modify URL structure or routing

## Agent boundaries
- implementation → coding only
- audit → analysis only
- explorer → investigation only

## Context isolation
- repo-only scope
- no cross-project references

## Stop conditions
- UI conflict occurs
- SEO structure change required
- routing/URL change required
- multiple modules impacted
- requirements unclear
→ STOP and ask before proceeding

## Read Order

1. `CLAUDE.md` — commands, npm, Tailwind v3 brand colors, Next.js 15 stack
2. `docs/ai/` — workspace overview, architecture summary, execution contract
3. `.claude/rules/` — load rules relevant to the current task
4. `.claude/skills/` — load skills relevant to the current task

---

## Skill Layers

| Layer | Path | Role |
|-------|------|------|
| Always-on core shelf | `.claude/skills/` | 7 core skills — canonical |
| Compatibility bridge | `.agents/skills` → `.claude/skills` | for tools resolving `.agents/` |
| Runtime shelf | `.claude/skills-runtime/` | task-scoped, load on demand |
| Legacy migration source | `.agent/` | NOT active — reference only |

---

## Core Shelf (7 skills)

| Skill | Trigger |
|-------|---------|
| `commit-writer` | Any commit |
| `bugfix-flow` | Any bug investigation |
| `implementation-flow` | Any feature implementation |
| `ui-qa-check` | Any UI change (includes Tailwind v3 brand compliance) |
| `docs-writer` | Any documentation task |
| `handoff-flow` | Session end or agent switch |
| `schema-markup` | Any JSON-LD / structured data task |

---

## Key Operating Rules

**Implementation flow**: Analysis → Plan → Approval → Execution → Verification.

**Completion**: File paths, diff, verification output, and skill usage report required.

**Critical**: `tailwind.config.ts` brand color tokens are locked — do not modify.

**Commits**: `npm run lint && npm run build` before committing. Conventional commit format.

---

## Stack Highlights (from CLAUDE.md)

- Next.js 15 / React 19 / TypeScript / Tailwind CSS v3 / npm
- GSAP 3 + `useGSAP` — register ScrollTrigger inside `useEffect`
- Lenis — initialized once in `layout.tsx` only
- Three.js — `dynamic import + ssr: false + <Suspense>`
- Embla Carousel v8 — `"use client"` required
- No database, no CMS, no auth layer
