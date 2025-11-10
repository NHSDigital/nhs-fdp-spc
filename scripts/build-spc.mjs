#!/usr/bin/env node
/**
 * Flexible build script that works both inside the monorepo and after subtree split.
 * It detects available Vite config locations and runs both JS & CSS builds.
 */
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const candidates = [
  // Local (post-split) copies
  resolve(root, 'config/vite.spc.config.ts'),
  // Monorepo root copies
  resolve(root, '../../config/vite.spc.config.ts')
];

const cssCandidates = [
  resolve(root, 'config/vite.spc.css.config.ts'),
  resolve(root, '../../config/vite.spc.css.config.ts')
];

function pick(paths) {
  for (const p of paths) if (existsSync(p)) return p;
  console.error('No valid config found among:', paths);
  process.exit(1);
}

const jsConfig = pick(candidates);
const cssConfig = pick(cssCandidates);

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status);
}

console.log('[spc-build] Using JS config:', jsConfig);
run('vite', ['build', '--config', jsConfig]);
console.log('[spc-build] Using CSS config:', cssConfig);
run('vite', ['build', '--config', cssConfig]);
console.log('[spc-build] Completed.');
