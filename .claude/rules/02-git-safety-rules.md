# 02 — Git Safety Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity

## Commit Rules

1. Always check current branch: `git branch --show-current`
2. Never commit directly to `main` unless explicitly instructed.
3. Create a feature branch for all non-trivial work.
4. Use conventional commit format: `<type>(<scope>): <subject>`
5. Include `Co-Authored-By: Claude <noreply@anthropic.com>` in AI-generated commits.

## Branch Safety

- `main` is protected. Never force-push.
- Never use `--no-verify` unless explicitly requested.

## Verification Before Commit

```bash
npm run lint     # ESLint
npm run build    # TypeScript + Next.js build gate
```

There is no separate `typecheck` script. Build is the type gate.
