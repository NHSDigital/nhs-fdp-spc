# ADR-0003: Establish SPC as an internal package ("subrepo") within the monorepo

Status: Accepted

Date: 2025-11-10

## Context

The Statistical Process Control (SPC) components in the NHS FDP Design System have grown into a substantial, semi-independent slice of functionality with distinct consumers and a faster iteration cadence than much of the core. We want to:

- Deliver SPC updates faster and with clearer ownership.
- Reduce cognitive load for teams not using SPC.
- Preserve shared infrastructure (tokens, CI, SSR testing) to avoid duplication.
- Keep the option open to extract SPC into its own repository later, if justified by adoption and governance.

Constraints and guidance:

- Engineering principles: eliminate waste, build quality in, create knowledge, defer commitment, deliver fast, respect people, optimise the whole.
- GitHub governance: NHSDigital (products) / NHS England Tools (libraries) orgs, securing-repositories.md requirements, SonarCloud and security scanning, engineering dashboards data collection.

## Decision

Create a dedicated internal package ("subrepo") for SPC within this monorepo at `packages/nhs-fdp-spc/` with:

1. Independent package identity and exports
   - Name: `@nhs-fdp/spc`
   - Public entrypoints: `.` (components), `./engine`, `./icons`, `./styles`
   - Peer deps: `react`, `react-dom`, selected `d3-*`, `react-aria` (avoid duplication)

2. Dual-export period (no breaking change)
   - Maintain legacy re-exports from the core design system entry for a defined grace period.
   - Publish migration guidance and provide a codemod for import path updates.

3. Shared infra; no duplication
   - Reuse monorepo tooling: tokens build, Vite/Vitest, Storybook, lint, typecheck, CI.
   - SPC-specific build entries configured via library mode while preserving modules for tree-shaking.

4. Quality gates specific to SPC
   - SSR tests pass (100% for SPC scope).
   - Accessibility smoke checks (roles, names, focus management) pass.
   - Bundle size budget for SPC entry stays within agreed limit.
   - No circular deps; stable export surface (diff check) per release.

5. Reversibility
   - Allow later extraction using `git subtree split -P packages/nhs-fdp-spc` once triggers are met (see below).

## Options Considered

1. Keep SPC fully inside core (status quo)

   - Pros: No structural change, simplest now.
   - Cons: Slower iteration; mixed ownership; larger blast radius; harder to consume SPC-only.

2. Separate public repository now

   - Pros: Clear independence, separate versioning.
   - Cons: Duplicated infra and tokens; governance effort; premature commitment; higher maintenance.

3. Internal package (subrepo) in monorepo — **SELECTED**

   - Pros: Shares infra; minimal waste; reversible; enables faster, scoped iteration; clear import path.
   - Cons: Still coupled to monorepo lifecycle; requires migration guidance.

4. Git submodule

   - Pros: Strong separation, optional pull-based sync.
   - Cons: Developer friction, CI complexity, brittle; rejected for day-to-day productivity concerns.

## Consequences

Positive:

- Faster SPC releases and reviews scoped to package.
- Clear import path for consumers; reduced cognitive load elsewhere.
- Single source of truth for tokens and shared utilities.

Negative / mitigations:

- Perceived coupling to monorepo: mitigate with independent versioning and package-level CHANGELOG.
- Migration overhead: provide codemod and dual exports with long deprecation horizon.
- Risk of token drift if later extracted: mitigate via shared tokens package or established token publication pipeline.

## Implementation Outline

Structure:

```text
packages/
  nhs-fdp-spc/
    package.json
    src/            # charts/, engine/, icons/, utils/
    tests/          # unit/, ssr/, hydration/
    stories/
    README.md
    adr/
      ADR-0003-spc-subrepo.md
```

Phases (high level):

1. Skeleton package: create directory, package.json, copy code, baseline build.
2. Build + tests: wire library entries, scoped Vitest config, SSR pass.
3. Dual exports: maintain legacy re-exports; publish migration guide + codemod.
4. Validation gates: SSR, a11y smoke, bundle budget, cycles, export surface diff.
5. Adoption & deprecation: track import-path adoption; later escalate warnings.
6. Review: decide on subtree extraction based on triggers.

## Triggers for Potential Extraction to Separate Repo

- ≥90% internal adoption of `@nhs-fdp/spc` import path over 2 consecutive months.
- 3+ external consumers requesting independent version cadence.
- SPC release cadence ≥2× core over the last quarter.
- Stable API (no breaking changes across last two minor versions).

If triggered, execute a controlled `git subtree split` to a new repository under the recommended organisation (see governance) and set up synchronized tokens consumption.

## Rollback Plan

If unforeseen issues arise:

- Keep dual exports; switch consumer imports back to legacy path.
- Revert package build entries to previous known-good state; no persistent data migration is required.
- Remove or archive `packages/nhs-fdp-spc/` if abandoning, and revert re-exports.

## Governance & Compliance

- Continue to follow securing-repositories.md configuration standards.
- Security scanning (Dependabot, secret scanning) and SonarCloud remain enforced at org/monorepo level.
- If extracted later: create the new repository from the approved template; enforce branch protection, SSO/MFA, required checks, and dashboard reporting.

## Success Metrics

- Build: PASS on `build:parity`.
- Tests: ≥90% coverage for SPC unit tests; 100% pass on SPC SSR tests.
- Accessibility: no critical findings in smoke checks.
- Bundle: primary SPC ESM bundle within budget (target ≤150KB gzipped; refine after baseline).
- Adoption: ≥70% internal consumers migrated by Week 6 of rollout.
- Stability: no accidental breaking export changes (export surface diff clean) across releases.

## References

- NHS Engineering Principles (Lean-aligned).
- GitHub enterprise governance (NHSDigital / NHS England Tools) and repository template guidance.
- Monorepo build/test practices in this design system (Vite, Vitest, Style Dictionary).
