#!/usr/bin/env node
// Writes _gloss/pages/<page>.js for every page that has at least one cached
// gloss. Run extract.mjs first so the sentence lists match the current pages,
// then build-nav.mjs, which adds the gloss scripts to pages that have data.
//
//   node _tools/gloss/pack.mjs

import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, '_tools/gloss');
const OUT = path.join(ROOT, '_gloss/pages');
vm.runInThisContext(await readFile(path.join(ROOT, '_gloss/core.js'), 'utf8'));
const { hash } = globalThis.GlossCore;

const done = new Map();
for (const f of await readdir(path.join(DIR, 'cache'))) {
  if (!f.endsWith('.jsonl')) continue;
  for (const line of (await readFile(path.join(DIR, 'cache', f), 'utf8')).split('\n')) {
    if (!line) continue;
    try { const r = JSON.parse(line); if (r.e) done.set(r.k, r); } catch {}
  }
}

const pages = JSON.parse(await readFile(path.join(DIR, 'work/pages.json'), 'utf8'));
await rm(OUT, { recursive: true, force: true });
let nPages = 0, nHit = 0, nAll = 0, bytes = 0;
for (const [page, keys] of Object.entries(pages)) {
  const data = {};
  for (const k of keys) {
    nAll++;
    const r = done.get(k);
    if (!r) continue;
    data[hash(k)] = [r.e, r.x];
    nHit++;
  }
  if (!Object.keys(data).length) continue;
  const file = path.join(OUT, page + '.js');
  await mkdir(path.dirname(file), { recursive: true });
  const body = `GlossData(${JSON.stringify(data)});\n`;
  await writeFile(file, body);
  nPages++; bytes += body.length;
}
console.log(`packed ${nPages} pages, ${nHit}/${nAll} sentences, ${(bytes / 1e6).toFixed(1)} MB`);
