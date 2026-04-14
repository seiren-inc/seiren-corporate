# 05 — Data and Safety Rules

> Repo: seiren-corporate | Applies to: Claude Code, Codex, Antigravity
> No database. Static/animation corporate site.

## No Database

This repo has no database, no CMS, and no auth layer.
Do not add Supabase, Prisma, microCMS, or any persistence layer.

## Environment Variables

1. `.env.local` holds any secrets (e.g., form API keys). Never commit to git.
2. If adding a contact form API endpoint, validate all inputs server-side before sending.

## Structured Data (SEO)

1. Use JSON-LD only — no Microdata or RDFa.
2. Schema must match displayed content exactly. No dummy values.
3. Required base fields: `@context`, `@type`, `@id`, `url`, `name`, `description`, `inLanguage`.
4. Appropriate types for a corporate site: `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`.
5. Validate with Rich Results Test before release.

## Contact Form Safety

If a contact form is present or added:
1. Validate all inputs server-side
2. Apply rate limiting to the API route
3. Never expose third-party API keys to the client
