#!/usr/bin/env node
// Cuts every page into sentences with the same code the browser runs
// (_gloss/core.js) and writes the work list for the generator.
//
//   node _tools/gloss/extract.mjs
//
// Output (gitignored, under _tools/gloss/work/):
//   pages.json      { "<page>": ["<key>", ...] }
//   sentences.jsonl {"k": key, "t": sentence, "p": first page, "title": page title}

import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const WORK = path.join(ROOT, '_tools/gloss/work');
vm.runInThisContext(await readFile(path.join(ROOT, '_gloss/core.js'), 'utf8'));
const { blocks, sentences } = globalThis.GlossCore;

const SKIP_DIRS = new Set(['.git', 'node_modules', '_tools', '_gloss']);
// Drills and tools rather than prose, or already bilingual.
export const EXCLUDE = [
  '020_personal/02I_quiz/',
  '020_personal/029_mental_math/',
  '020_personal/02A_plan/',
  '020_personal/028_english/',
  '030_ideas/032_evacsim/',
];

async function* htmlFiles(dir = ROOT) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(abs);
    else if (e.name.endsWith('.html')) yield abs;
  }
}

export function pageSentences(src) {
  const { document } = parseHTML(src);
  const title = (document.querySelector('title')?.textContent || '').trim();
  const out = [];
  for (const b of blocks(document.body)) {
    for (const s of sentences(b.text)) out.push({ key: s.key, text: b.text.slice(s.s, s.e) });
  }
  return { title, out };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await mkdir(WORK, { recursive: true });
  const pages = {};
  const seen = new Map();
  for await (const abs of htmlFiles()) {
    const file = path.relative(ROOT, abs).split(path.sep).join('/');
    if (EXCLUDE.some((p) => file.startsWith(p))) continue;
    const src = await readFile(abs, 'utf8');
    if (src.includes('<!-- snav:none -->')) continue;
    const { title, out } = pageSentences(src);
    if (!out.length) continue;
    pages[file] = [...new Set(out.map((s) => s.key))];
    for (const s of out) if (!seen.has(s.key)) seen.set(s.key, { k: s.key, t: s.text.replace(/\s*\n\s*/g, ' '), p: file, title });
  }
  await writeFile(path.join(WORK, 'pages.json'), JSON.stringify(pages));
  await writeFile(path.join(WORK, 'sentences.jsonl'), [...seen.values()].map((x) => JSON.stringify(x)).join('\n') + '\n');
  const chars = [...seen.values()].reduce((a, x) => a + x.t.length, 0);
  console.log(`pages ${Object.keys(pages).length}, unique sentences ${seen.size}, chars ${chars}`);
}
