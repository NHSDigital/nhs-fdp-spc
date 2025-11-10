# @nhs-fdp/spc

Statistical Process Control (SPC) components and engine for the NHS FDP Design System.

> Source of truth: This repository is an automated mirror of the SPC package from the NHS FDP Design System monorepo. Please open feature/bug PRs against the monorepo. Changes made here may be overwritten by the mirror.

- Monorepo: https://github.com/NHSDigital/nhs-fdp-design-system
- Package path in monorepo: `packages/nhs-fdp-spc`

## Install

```bash
npm install @nhs-fdp/spc
```

Peer dependencies: React 19, React DOM 19.

## Usage

```tsx
import { SPCChart } from '@nhs-fdp/spc';
import '@nhs-fdp/spc/styles'; // CSS bundle (dist/spc.css)

export default function Example() {
  return <SPCChart /* props */ />;
}
```

## Installation (External via GitHub Packages)

Until this package is on npmjs, install from GitHub Packages. First, authenticate npm to GitHub Packages (once per machine):

Create a `.npmrc` in your user home directory or project root with:

```ini
@nhs-fdp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install the alpha build:

```bash
npm install @nhs-fdp/spc@alpha
```

Usage in your app:

```tsx
import { SPCChart } from '@nhs-fdp/spc';
// Import the minimal SPC CSS bundle
import '@nhs-fdp/spc/styles';
```

Notes:

- Your GitHub token needs the “read:packages” scope (and access to the repository if private).
- If your project has a `.npmrc` with a default registry, ensure the scoped registry line for `@nhs-fdp` is present as above.
- Types ship with the package; no extra typings install is needed.

## Export Surface (Initial)

This repo is currently a mirror. To contribute code:
1. Work in the monorepo under `packages/nhs-fdp-spc`
2. Run validation gates there (build, export-snapshot check, SSR, size)
3. The mirror will be updated via subtree split / CI sync

## Releases

Releases are built and published from the monorepo pipeline to ensure consistency with tokens and shared infrastructure.

## License

See LICENSE in this repository.
