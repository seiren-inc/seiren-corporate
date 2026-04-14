# Decision Log — seiren-corporate

## 2026-04-03 — Agent OS Migration: Phase 2 Rollout

**Context**: Standard web batch rollout. seiren-corporate is a no-DB, animation-heavy corporate site.

**Decisions**:

1. **`.claude/rules/` created with 9 rule files**
   - Stack-specific: Tailwind v3 brand color lock documented in rules/03 and rules/04
   - No DB rules in rules/05 (no database layer)
   - Build gate is `npm run build` (no separate typecheck script)

2. **`.claude/skills/` created with standard 7-skill shelf**
   - `schema-markup` as always-on (corporate site with SEO needs)
   - No deviation from standard lightweight web pattern

3. **`.agents/skills` symlink corrected** — `../.agent/skills` → `../.claude/skills`

4. **Legacy marker added to `.agent/skills/`**

5. **`docs/ai/` created with 7 governance documents**
