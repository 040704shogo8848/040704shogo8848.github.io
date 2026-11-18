#!/usr/bin/env node
// Builds the client-side search index for the static site.

import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const NONE = '<!-- snav:none -->';
const SKIP_DIRS = new Set(['.git', 'node_modules', '_tools', '_gloss', 'shots']);
const INDEX_OUT = path.join(ROOT, '_search', 'index.js');
const BODY_OUT = path.join(ROOT, '_search', 'body.js');
const BODY_WARN_BYTES = 20 * 1024 * 1024;

const nav = JSON.parse(await readFile(path.join(ROOT, '_tools/nav.json'), 'utf8'));

async function* htmlFiles(dir = ROOT) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(abs);
    else if (e.name.endsWith('.html')) yield abs;
  }
}

function sectionFor(file) {
  for (const section of nav.sections ?? []) {
    for (const link of section.links ?? []) {
      const dir = path.posix.dirname(link.href);
      if (file === link.href || file.startsWith(`${dir}/`)) return `${section.label} / ${link.text}`;
    }
  }
  return '';
}

function cleanBody(document) {
  const body = document.body;
  if (!body) return '';
  for (const el of body.querySelectorAll('script, style, nav, footer, [class^="snav"]')) el.remove();
  return body.textContent.replace(/\s+/g, ' ').trim();
}

// Index git-tracked pages only. An untracked or ignored page may be private
// work in progress; putting its text into _search/ would publish it.
const TRACKED = new Set(
  execFileSync('git', ['ls-files', '-z', '--', '*.html'], { cwd: ROOT, encoding: 'utf8' }).split('\0').filter(Boolean)
);

async function buildRecords() {
  const records = [];
  for await (const abs of htmlFiles()) {
    const file = path.relative(ROOT, abs).split(path.sep).join('/');
    if (!TRACKED.has(file)) continue;
    const src = await readFile(abs, 'utf8');
    if (src.includes(NONE)) continue;
    const { document } = parseHTML(src);
    const title = document.querySelector('title')?.textContent.trim()
      || document.querySelector('h1')?.textContent.trim() || '';
    const headings = [];
    for (const el of document.querySelectorAll('h1, h2, h3')) {
      const text = el.textContent.replace(/\s+/g, ' ').trim();
      if (text && !headings.includes(text)) headings.push(text);
      if (headings.length >= 60) break;
    }
    records.push({
      u: file,
      t: title,
      s: sectionFor(file),
      h: headings,
      p: cleanBody(document).slice(0, 300),
      body: cleanBody(document),
    });
  }
  return records;
}

function indexOutput(records) {
  return `window.SITE_SEARCH=${JSON.stringify(records.map(({ u, t, s, h, p }) => ({ u, t, s, h, p })))};\n`;
}

const records = await buildRecords();
const indexContent = indexOutput(records);
const bodyContent = `window.SITE_SEARCH_BODY=${JSON.stringify(records.map(({ body }) => body))};\n`;
const outputs = [
  [INDEX_OUT, indexContent],
  [BODY_OUT, bodyContent],
];
for (const [file, content] of outputs) {
  const previous = existsSync(file) ? await readFile(file, 'utf8') : '';
  if (CHECK) {
    if (content !== previous) {
      console.error(`  WOULD CHANGE     ${path.relative(ROOT, file)}`);
      process.exitCode = 1;
    }
  } else {
    await mkdir(path.dirname(file), { recursive: true });
    if (content !== previous) await writeFile(file, content);
  }
}
const indexSize = Buffer.byteLength(indexContent, 'utf8');
const bodySize = Buffer.byteLength(bodyContent, 'utf8');
console.log(`search ${CHECK ? 'check' : 'build'}: ${records.length} records, index ${indexSize} bytes, body ${bodySize} bytes`);
if (bodySize > BODY_WARN_BYTES) {
  console.error('Search body index exceeds 20MB.');
  process.exitCode = 1;
}
