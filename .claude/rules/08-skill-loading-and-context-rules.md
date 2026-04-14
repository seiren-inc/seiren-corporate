# 08 — Skill Loading and Context Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity

## Canonical Skill Layer

`.claude/skills/` is the only active core shelf.

## Compatibility Bridge

`.agents/skills` → `../.claude/skills`. Do NOT retarget to `.agent/skills`.

## Legacy Layer

`.agent/skills/` is legacy migration source only. NOT active, NOT canonical, must NOT be bulk-loaded.

## Core Shelf (this repo)

| Skill | Trigger |
|-------|---------|
| `commit-writer` | Any commit |
| `bugfix-flow` | Any bug investigation |
| `implementation-flow` | Any feature implementation |
| `ui-qa-check` | Any UI change — especially Tailwind v3 brand color compliance |
| `docs-writer` | Any documentation task |
| `handoff-flow` | Session end or agent switch |
| `schema-markup` | Any JSON-LD / structured data task |

## Context Budget

Default max active skills: 3 per task.
