# @nhs-fdp/spc (Draft)

> Statistical Process Control (SPC) components and engine for the NHS FDP Design System — internal package ("subrepo") enabling faster iteration, clear ownership, and eventual optional extraction.

## Status

Draft (Phase 1 – Skeleton). Dual exports planned; no breaking changes yet.

## Purpose

Provide a focused, testable, tree‑shakable consumable set of SPC components (charts, spark, icons, engine functions) while:

- Reusing shared tokens and build infrastructure (eliminate waste)
- Guaranteeing SSR, accessibility, and deterministic evaluation (build quality in)
- Remaining reversible via subtree split triggers (defer commitment)

## Package Structure

```text
packages/nhs-fdp-spc/
  package.json
  src/
    charts/
    engine/
    icons/
    utils/
    index.ts
  tests/
    unit/
    ssr/
    hydration/
  stories/
  adr/
    ADR-0003-spc-subrepo.md
  README.md
```

## Installation (Internal)

Until published separately, SPC may be consumed via the monorepo workspace install.

```ts
// Preferred (new) path
import { SPCChart, SPCSpark } from '@nhs-fdp/spc';

// Legacy (still valid during dual-export window)
import { SPCChart } from '@nhs-fdp/design-system';
```

## Export Surface (Initial)

| Entry | Description |
|-------|-------------|
| `@nhs-fdp/spc` | Primary React components & types |
| `@nhs-fdp/spc/engine` | Pure rule/evaluation functions & engine types |
| `@nhs-fdp/spc/icons` | Semantic SPC state / variation icons |
| `@nhs-fdp/spc/styles` | (Planned) Precompiled minimal CSS / SCSS entry |

## Quality Gates

| Gate | Target |
|------|--------|
| Build (Vite lib mode) | PASS (no warnings) |
| Typecheck | 0 errors |
| Unit coverage | ≥90% lines |
| SSR tests | 100% pass |
| A11y smoke | 0 critical issues |
| Bundle (ESM gzipped) | ≤150KB (refine after baseline) |
| Circular deps | 0 cycles |
| Export diff | No accidental removals |

Validation script (planned): `npm run validate:spc`.

## Migration Guide (Preview)

1. Identify SPC imports from `@nhs-fdp/design-system`.
2. Replace with `@nhs-fdp/spc` path (codemod will be provided).
3. Remove any deep relative imports into SPC internals; use public barrel only.
4. Run local build/test to confirm no behavioural change.

### Codemod (Planned)

`npx tsx scripts/codemod-spc-imports.ts --write`

## Design Tokens

SPC components use shared design system tokens; no fork. Token overrides are prohibited—use semantic variables only.

## SSR & Accessibility Guarantees

- No direct `window`/`document` in render paths.
- Semantic roles and aria labels preserved server-side.
- Interactive regions focusable via keyboard.

## Error Handling (Engine)

| Condition | Behaviour |
|-----------|-----------|
| Invalid data shape | Throw `SpcValidationError` |
| Evaluation exception | Return diagnostic object (no crash) |
| Missing required prop | Runtime prop-type guard error (to be implemented) |

## Versioning & Release

- Pre‑1.0: may track root minor versions.
- Post dual-export adoption (≥70%): independent semver progression.
- Release scripts (planned): `npm run release:spc:patch|minor|major`.
- CHANGELOG section scoped via conventional commits `feat(spc):`, `fix(spc):`.

## Future Extraction Triggers

| Trigger | Threshold |
|---------|-----------|
| Internal adoption of new path | ≥90% sustained 2 months |
| External separate cadence requests | ≥3 consumers |
| SPC release velocity | ≥2× core over last quarter |
| API stability | 2 consecutive minor versions no breaks |

## Rollback Plan

Remove/ignore the package and continue consuming legacy exports; no data migration required.

## Security & Compliance

Inherits monorepo: secret scanning, Dependabot, SonarCloud. If externalised, new repo will use enterprise template before public visibility.

## Contributing (Internal)

1. Add / modify component inside `src/` adhering to existing patterns (component + types + tests + story).
2. Add SSR + hydration test if interactive.
3. Run validation gates locally.
4. Conventional commit with `feat(spc):`, `fix(spc):`, etc.
5. Open PR; ensure status checks (build, tests, lint, validate-spc) are green.

## Open Questions

- Final bundle shape for icons (inline vs separate chunk).
- Minimum token subset export for potential external repo.
- Whether to provide a data pre‑processing CLI.

## FAQ (Early)

**Q: Why not a separate repo now?**  We are deferring commitment to avoid duplicating infra prematurely.

**Q: Will legacy import be removed?**  Yes, after published schedule post adoption milestones (minimum 6‑month notice).

**Q: Can I depend on internal engine types?**  Use public `engine` barrel; internal paths may change.

## License

Assumed to follow root project license; adjust if variance needed before external publication.

## References

- ADR-0003 (this decision)
- Engineering principles (Lean‑aligned)
- GitHub governance and securing-repositories.md (enterprise config)
