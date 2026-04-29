# AGENTS.md — seiren-corporate

## Execution Flow
Analysis → Plan → Explicit Approval → Execution → Verification
Execution requires explicit approval.

## Core Objective
- Maintain Seiren as a high-trust, authoritative brand site
- Serve as the central hub for all service sites
- Preserve SEO, GEO, and brand integrity across all pages
- Optimize for Context Management and Token Save

## Non-Negotiables
- Do not break brand consistency or positioning
- Do not modify routing, metadata, canonical, sitemap, or structured data without approval
- No DB / auth / environment changes without approval
- No unsafe API exposure
- Type safety required (no `any`)

## Brand Protection
- Do not alter tone, messaging, or positioning without explicit request
- Maintain consistency across all service links and descriptions
- Do not introduce misleading or unverified claims

## Site Integrity
- Preserve relationships between corporate site and service sites
- Do not break internal linking structure
- Maintain correct navigation and hierarchy across pages

## Search Quality Protection
- Preserve structured data and indexable content quality
- Maintain entity clarity and brand authority
- Do not weaken SEO, GEO, or MEO signals
- Ensure consistency between corporate content and service site content

## Data / Security
- Never expose secrets or internal endpoints
- Validate all external data before use
- No PII in logs or external APIs

## UI Protection
- Do not change layout, spacing, typography, or visual hierarchy without explicit request
- Preserve visual quality and brand presentation

## Validation
- Build must pass
- No SEO / GEO / MEO regression
- No brand inconsistency across pages
- All service links must remain valid

## Stop Conditions
- Unclear requirements
- Brand impact uncertainty
- SEO / GEO / MEO impact uncertainty
- Cross-site consistency issues
- Navigation or hierarchy side effects
