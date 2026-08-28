#!/usr/bin/env node
// Refuses to let private material reach a public repo.
//
//   node _tools/leak-check.mjs           scan every tracked text file
//   node _tools/leak-check.mjs a.html    scan specific files
//
// The keyword dictionary lives OUTSIDE this repo, at
// ~/System/site-guard/secrets.json — committing it here would publish the list
// of things worth hiding. When the file is absent (CI), the dictionary rules are
// skipped and only the built-in rules below run.
//
// It used to live under ~/System/shogo-profile/, which was deleted on
// 2026-07-29. Nothing noticed, because a missing dictionary degrades to a
// passing run: every check below kept working and the client names simply
// stopped being checked. The old path is still tried second so an older
// checkout keeps working, and the run now prints which path it read.

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DICT_PATHS = [
  path.join(os.homedir(), 'System/site-guard/secrets.json'),
  path.join(os.homedir(), 'System/shogo-profile/build/secrets.json'),
];
const DICT = DICT_PATHS.find((p) => existsSync(p));

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

// ─── reviewed exceptions ─────────────────────────────────────────────────────
// One rule firing on one file, looked at and deliberately allowed. Exceptions
// live here rather than in `git push --no-verify`, because --no-verify turns
// the whole gate off for the whole push — the next genuine leak would ship with
// it. Narrow by file AND by the matched text: the same name in a different file
// still blocks. Every entry needs a date and a reason, and the run prints them
// so an exception stays visible instead of quietly becoming the norm.
const ACCEPTED = [
  {
    file: '010_research/011_company/reports/mitsubishi_corp_research_260727.html',
    hit: '小島信明',
    why: '本人は公開人物（Wikipedia・公開講演あり）。実名掲載は 2026-08-02 に Shogo が判断済み',
  },
  // 2026-08-28、辞書を復活させたときに既存の公開済みファイルで出た3件。
  // どれも origin/main で公開済みなので、ここで止めても新規の露出は防げず、
  // 代わりに全 push が止まる。それは --no-verify を常用させてゲートを殺す道なので、
  // 中身を読んだ上で例外にしてある。
  {
    file: '010_research/013_geo/japan_projects.html',
    hit: '住友化学',
    why: 'ジュロン島のエチレン工場とラービグの減損の話。JOI/JETRO の公開PDFが出典で、'
      + '受注関係とは無関係の産業地理。2026-08-28 レビュー',
  },
  {
    file: '010_research/013_geo/data/japan_projects.json',
    hit: '住友化学',
    why: '上と同じ内容のデータ側。2026-08-28 レビュー',
  },
  {
    file: '010_research/011_company/reports/mitsubishi_corp_research_260727.html',
    hit: '日本管財',
    why: '人脈ドセの表内。2026-07-27 時点で公開済み。ただし現行クライアントの常務名が'
      + '「当方ヒアリング」と併記されており、第三者情報としては要再判断（Shogo に報告済み）',
  },
];

const accepted = (file, hit) => ACCEPTED.some((a) => a.file === file && a.hit === hit);

// ─── dictionary rules ────────────────────────────────────────────────────────

// Third-party names are a hard block anywhere. The rest of the dictionary is
// financial vocabulary — "M&A", "評価額", "億円" — which flags an internal deck
// but is the entire subject matter of a company research report. Those stay as
// warnings on research pages and remain blocking everywhere else.
//
// `hardAnywhere` exists because that split left no slot for a client company
// name. Inside 010_research the only blocking dictionary tier was
// thirdPartyNames, a list built for people, so a current client's name in a
// research report was a warning at most. Once x-agent started publishing there
// on its own, a warning was indistinguishable from a pass. These are the names
// where the leak is not the company — it is public — but the fact that it
// appears on Shogo's site next to his work.
const pii = [];
const money = [];

if (DICT) {
  const d = JSON.parse(await readFile(DICT, 'utf8'));
  for (const h of d.hardAnywhere ?? []) {
    try { pii.push({ re: new RegExp(h.pattern), why: `非公開レイヤ（${h.label ?? 'hardAnywhere'}）`, hard: true }); }
    catch { /* skip unparseable patterns rather than fail the run */ }
  }
  for (const t of d.thirdPartyNames ?? [])
    pii.push({ re: new RegExp(escapeRe(t.pattern)), why: `第三者氏名（${t.label ?? 'thirdPartyNames'}）`, hard: true });
  for (const h of d.high ?? [])
    money.push({ re: new RegExp(escapeRe(h.pattern), 'i'), why: `機密キーワード（${h.label ?? 'high'}）` });
  for (const r of d.regex ?? []) {
    try { money.push({ re: new RegExp(r.pattern, 'i'), why: `機密パターン（${r.label ?? 'regex'}）` }); }
    catch { /* skip unparseable patterns rather than fail the run */ }
  }
  console.log(
    `dictionary: ${pii.length} hard + ${money.length} financial rules from ` +
      DICT.replace(os.homedir(), '~')
  );
} else {
  console.log(
    'dictionary: not found (built-in rules only) — クライアント名は検査されない。\n' +
      '            期待する場所: ' + DICT_PATHS.map((p) => p.replace(os.homedir(), '~')).join(' または ')
  );
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
const allowed = [];

for (const abs of targets) {
  // The scanner's own rule list is full of the strings it looks for.
  if (abs === fileURLToPath(import.meta.url)) continue;
  // pre-push feeds this `git ls-files`, which still lists a file whose deletion
  // has not been staged yet. A file that is not there cannot leak, so skip it
  // rather than crashing and reporting the gate as failed for the wrong reason.
  let st;
  try { st = await stat(abs); } catch { continue; }
  if (!st.isFile()) continue;

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
      if (!m) continue;
      const hit = m[0].slice(0, 60);
      if (accepted(file, hit)) { allowed.push({ file, line: i + 1, why: r.why, hit }); continue; }
      findings.push({ file, line: i + 1, why: r.why, hit, hard: !!r.hard });
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

if (allowed.length) {
  const byFile = {};
  for (const a of allowed) byFile[a.file] = (byFile[a.file] || 0) + 1;
  console.log(`\n${allowed.length} 件はレビュー済みの例外として通した:`);
  for (const [file, n] of Object.entries(byFile)) {
    const e = ACCEPTED.find((x) => x.file === file);
    console.log(`   ${String(n).padStart(4)}  ${file}\n         "${e.hit}" — ${e.why}`);
  }
}

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
