#!/usr/bin/env node
/**
 * Compare current SPC export surface to snapshot.
 * Works both in monorepo and in a split repo.
 */
const { Project } = require('ts-morph');
const { readFileSync, existsSync } = require('fs');
const path = require('path');

function gatherExports(sourceFile) {
  const names = new Set();
  sourceFile.getExportedDeclarations().forEach((_decls, name) => names.add(name));
  return Array.from(names).sort();
}

function resolvePath(p) {
  const local = path.resolve(__dirname, '..', p);
  if (existsSync(local)) return local;
  const mono = path.resolve(__dirname, '..', '..', p);
  return mono;
}

function main() {
  const snapshotPath = path.resolve(__dirname, '../.exports-snapshot.json');
  let snapshot;
  try {
    snapshot = JSON.parse(readFileSync(snapshotPath, 'utf-8'));
  } catch (e) {
    console.log('No snapshot found; create one with npm run spc:exports:snapshot');
    return;
  }
  const tsConfigCandidates = [
    resolvePath('tsconfig.build.json'),
    path.resolve(__dirname, '../../tsconfig.build.json')
  ];
  const tsConfig = tsConfigCandidates.find((p) => existsSync(p));
  const project = new Project({ tsConfigFilePath: tsConfig });
  const files = Object.keys(snapshot);
  const breaking = [];
  for (const rel of files) {
    const abs = resolvePath(rel);
    const sf = project.addSourceFileAtPathIfExists(abs);
    if (!sf) continue;
    const current = gatherExports(sf);
    const previous = snapshot[rel] || [];
    const missing = previous.filter((p) => !current.includes(p));
    if (missing.length) breaking.push({ file: rel, missing });
  }
  if (breaking.length) {
    console.error(
      'Breaking export changes detected:\n' +
        breaking.map((b) => `${b.file}: ${b.missing.join(', ')}`).join('\n')
    );
    process.exit(1);
  } else {
    console.log('Export surface consistent with snapshot.');
  }
}

main();
