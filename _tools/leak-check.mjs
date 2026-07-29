#!/usr/bin/env node
// Refuses to let private material reach a public repo.
//
//   node _tools/leak-check.mjs           scan every tracked text file
//   node _tools/leak-check.mjs a.html    scan specific files
//
// The keyword dictionary lives OUTSIDE this repo, at
// ~/System/shogo-profile/build/secrets.json — committing it here would publish
// the list of things worth hiding. When the file is absent (CI), the dictionary
// rules are skipped and only the built-in rules below run.

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DICT = path.join(os.homedir(), 'System/shogo-profile/build/secrets.json');

const SKIP_DIRS = new Set(['.git', 'node_modules', 'dist']);
const TEXT_EXT = new Set(['.html', '.md', '.json', '.js', '.mjs', '.css', '.txt', '.sh', '.yml', '.yaml']);

// ─── built-in rules ──────────────────────────────────────────────────────────
// These always run. Each is something that must never appear on the public site.

const BLOCK = [
  // Internal systems. A link to any of these leaks that the page came from
  // private material, and often leaks the material itself.
  { re: /wanderlust8848\.slack\.com/i, why: 'WL 社内 Slack へのリンク' },
  { re: /tldv\.io\/app\/meetings/i, why: '商談録画へのリンク' },
  { re: /(app\.)?notion\.(so|com)\/[0-9a-f]{16,}/i, why: '内部 Notion ページ' },
  { re: /docs\.google\.com\/(spreadsheets|document)\/d\//i, why: '個人 Google Drive ファイル' },

  // Local filesystem paths — leak the home directory layout and often names.
  { re: /\/Users\/[a-z0-9._-]+\//i, why: 'ローカル絶対パス' },

  // Deliberately withheld from the public layer. Shogo marked the Abe material
  // "confidential" himself; the political-career strategy is his own.
  { re: /回顧展/, why: '非公開レイヤの語（安倍晋三回顧展メモ）' },
  { re: /黄川田/, why: '非公開レイヤの語（seiji-watch）' },
  { re: /埼玉\s*3\s*区/, why: '非公開レイヤの語（seiji-watch）' },
  { re: /非世襲ルート/, why: '非公開レイヤの語（本人の政治キャリア戦略）' },
  { re: /小島信明/, why: '第三者の人脈リスト' },

  // Credentials.
  { re: /\b(sk-ant-|ghp_|gho_|github_pat_|xox[baprs]-|AKIA[0-9A-Z]{16})/, why: '認証情報らしき文字列' },
  { re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/, why: '秘密鍵' },
];

// Placeholders are fine in consulting decks but never in a research report.
const PLACEHOLDER = { re: /\b(XX,XXX|XX\.X%|TBD|TODO|FIXME|Lorem ipsum)\b/i, why: 'プレースホルダー' };

// ─── dictionary rules ────────────────────────────────────────────────────────

// Third-party names are a hard block anywhere. The rest of the dictionary is
// financial vocabulary — "M&A", "評価額", "億円" — which flags an internal deck
// but is the entire subject matter of a company research report. Those stay as
// warnings on research pages and remain blocking everywhere else.
const pii = [];
const money = [];

if (existsSync(DICT)) {
  const d = JSON.parse(await readFile(DICT, 'utf8'));
  for (const t of d.thirdPartyNames ?? [])
    pii.push({ re: new RegExp(escapeRe(t.pattern)), why: `第三者氏名（${t.label ?? 'thirdPartyNames'}）`, hard: true });
  for (const h of d.high ?? [])
    money.push({ re: new RegExp(escapeRe(h.pattern), 'i'), why: `機密キーワード（${h.label ?? 'high'}）` });
  for (const r of d.regex ?? []) {
    try { money.push({ re: new RegExp(r.pattern, 'i'), why: `機密パターン（${r.label ?? 'regex'}）` }); }
    catch { /* skip unparseable patterns rather than fail the run */ }
  }
  console.log(`dictionary: ${pii.length} PII + ${money.length} financial rules from ~/System/shogo-profile/build/secrets.json`);
} else {
  console.log('dictionary: not found (built-in rules only)');
}

function escapeRe(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// ─── scan ────────────────────────────────────────────────────────────────────

async function* files(dir = ROOT) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* files(abs);
    else if (TEXT_EXT.has(path.extname(e.name))) yield abs;
  }
}

const argv = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const targets = [];
if (argv.length) for (const a of argv) targets.push(path.resolve(a));
else for await (const f of files()) targets.push(f);

const findings = [];
const warnings = [];

for (const abs of targets) {
  // The scanner's own rule list is full of the strings it looks for.
  if (abs === fileURLToPath(import.meta.url)) continue;
  if (!(await stat(abs)).isFile()) continue;

  const file = path.relative(ROOT, abs).split(path.sep).join('/');
  const lines = (await readFile(abs, 'utf8')).split('\n');

  // Everything under 010_research exists to discuss money, deals and public
  // finance. The dictionary was built to spot an internal deck, so its financial
  // vocabulary fires on all of it by design. The built-in rules below — internal
  // links, local paths, withheld vocabulary, credentials — still apply here.
  const financial =
    file.startsWith('010_research/') ||
    file.startsWith('_tools/') && file.endsWith('-template.md');

  const blocking = [...BLOCK, ...pii, ...(financial ? [PLACEHOLDER] : money)];

  lines.forEach((line, i) => {
    for (const r of blocking) {
      const m = line.match(r.re);
      if (m) findings.push({ file, line: i + 1, why: r.why, hit: m[0].slice(0, 60), hard: !!r.hard });
    }
    if (!financial) return;
    for (const r of money) {
      const m = line.match(r.re);
      if (m) warnings.push({ file, line: i + 1, why: r.why, hit: m[0].slice(0, 60) });
    }
  });
}

// ─── report ──────────────────────────────────────────────────────────────────

console.log(`scanned ${targets.length} files`);

if (warnings.length) {
  const byWhy = {};
  for (const w of warnings) byWhy[w.why] = (byWhy[w.why] || 0) + 1;
  console.log(`\n${warnings.length} 件の金額・M&A語をリサーチ記事内で検出（公開情報として想定内、続行）:`);
  for (const [why, n] of Object.entries(byWhy).sort((a, b) => b[1] - a[1]))
    console.log(`   ${String(n).padStart(4)}  ${why}`);
}

if (!findings.length) {
  console.log('\n✓ leak-check clean');
  process.exit(0);
}

console.error(`\n${findings.length} finding(s):\n`);
for (const f of findings) {
  console.error(`  ${f.hard ? '[PII] ' : ''}${f.file}:${f.line}`);
  console.error(`        ${f.why} — "${f.hit}"`);
}
console.error('\nこれらは public リポに入れられません。履歴は消えないので push 前に直すこと。');
process.exit(2);
