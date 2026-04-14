# Skills Runtime Shelf — seiren-corporate

Always-on core shelf: `.claude/skills/` — 7 skills.
This directory is for task-scoped runtime skills loaded on demand.

## Runtime Skill Groups

| Task Type | Skills to load |
|-----------|---------------|
| Animation sprint | `gsap-core`, `gsap-react`, `gsap-scrolltrigger` |
| SEO deep audit | `seo-audit`, `seo-checklist`, `homepage-audit` |
| Performance sprint | `vercel-performance-optimizer`, `next-cache-components` |
| Design implementation | `figma`, `figma-implement-design` |
| Mobile audit | `mobile-first-design-rules` |
| Code review | `code-review-automation` |
| PR / CI | `pull-request-manager`, `gh-fix-ci` |

`schema-markup` is always-on for this repo. Do not load it as runtime.

## Context Budget

Core: 7 skills. Runtime addition: max 3 per task.
