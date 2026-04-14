# Execution Contract

> Local pointer. Full contract: `/Users/takumashinnyo/workspace/projects/docs/ai/execution-contract.md`

## Repo-Specific Additions

### Brand Color Gate
`tailwind.config.ts` brand color tokens must not be modified.
Any UI change must pass the Tailwind v3 brand color compliance check in `ui-qa-check`.

### Build Gate
`npm run lint && npm run build` must pass before any PR or deploy.
