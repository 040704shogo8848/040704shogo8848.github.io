#!/usr/bin/env node
// Quality gate for company research reports.
//
//   node _tools/verify-report.mjs             every report
//   node _tools/verify-report.mjs <file>...   specific ones
//   node _tools/verify-report.mjs --links     also HTTP-check every source URL
//
// Checks that a report is sourced rather than asserted. Link checking is opt-in
// because it is slow and depends on the network; CI runs the offline checks.

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPORTS = path.join(ROOT, '010_research/011_company/reports');
const CHECK_LINKS = process.argv.includes('--links');

const MIN_SOURCES = 6;

// Reports written before the facts block existed. They keep their sources but
// have no machine-readable claim list, and retrofitting one means re-deriving
// every number — which is how wrong attributions get introduced. They are
// grandfathered by name and printed at the end, so the exemption stays visible.
const meta = JSON.parse(await readFile(path.join(ROOT, '010_research/011_company/data/reports.json'), 'utf8'));
const legacy = new Set(meta.filter((r) => r.legacy).map((r) => path.basename(r.file)));
const grandfathered = [];

const argv = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const files = argv.length
  ? argv.map((a) => path.resolve(a))
  : (await readdir(REPORTS)).filter((f) => f.endsWith('.html')).map((f) => path.join(REPORTS, f));

let failed = 0;
const allUrls = new Set();

for (const abs of files) {
  const file = path.relative(ROOT, abs).split(path.sep).join('/');
  const html = await readFile(abs, 'utf8');
  const bad = [];
  const warn = [];

  // Strip the shared nav so its markup never counts toward the report's own content.
  const body = html.replace(/<!-- snav:start -->[\s\S]*?<!-- snav:end -->/, '');

  // 1. sources present, and not Wikipedia alone
  const sourcesBlock = body.match(/<ol class="sources">([\s\S]*?)<\/ol>/i)?.[1] ?? '';
  const sourceItems = [...sourcesBlock.matchAll(/<li[^>]*>/gi)].length;
  const urls = [...sourcesBlock.matchAll(/href="(https?:\/\/[^"]+)"/gi)].map((m) => m[1]);
  urls.forEach((u) => allUrls.add(u));

  if (sourceItems < MIN_SOURCES) {
    if (legacy.has(path.basename(file)))
      grandfathered.push(`${path.basename(file)} — 出典リストなし（${sourceItems} 件）`);
    else bad.push(`出典 ${sourceItems} 件（${MIN_SOURCES} 件以上必要）`);
  }
  if (urls.length && urls.every((u) => /wikipedia\.org/i.test(u)))
    bad.push('出典が Wikipedia のみ');

  // 2. every <sup> reference resolves to a source item
  const refs = new Set(
    [...body.matchAll(/<sup[^>]*>([\s\S]*?)<\/sup>/gi)]
      .flatMap((m) => (m[1].match(/\d+/g) ?? []).map(Number))
  );
  const dangling = [...refs].filter((n) => n < 1 || n > sourceItems);
  if (dangling.length && !legacy.has(path.basename(file)))
    bad.push(`本文の参照番号 ${dangling.join(',')} に対応する出典がない（出典は ${sourceItems} 件）`);
  if (sourceItems >= MIN_SOURCES && refs.size === 0) warn.push('本文に <sup> 参照番号が1つもない');

  // 3. facts block: parseable, and every claim dated + sourced
  const isLegacy = legacy.has(path.basename(file));
  const factsRaw = body.match(/<script type="application\/json" id="facts">([\s\S]*?)<\/script>/i)?.[1];
  if (!factsRaw) {
    if (isLegacy) grandfathered.push(`${path.basename(file)} — facts ブロックなし`);
    else bad.push('facts ブロックがない');
  } else {
    let facts;
    try { facts = JSON.parse(factsRaw); }
    catch (e) { bad.push(`facts が JSON として壊れている: ${e.message}`); }
    if (Array.isArray(facts)) {
      if (!facts.length) warn.push('facts が空');
      facts.forEach((f, i) => {
        if (!f.as_of) bad.push(`facts[${i}] "${f.claim ?? '?'}" に as_of がない`);
        if (!f.source) bad.push(`facts[${i}] "${f.claim ?? '?'}" に source がない`);
        if (f.confidence && !['reported', 'estimated', 'single-source'].includes(f.confidence))
          bad.push(`facts[${i}] confidence が不正: ${f.confidence}`);
      });
      facts.forEach((f) => f.source && allUrls.add(f.source));
    }
  }

  // 4. skeleton — a fragment renders squashed on a phone
  if (!/<!doctype html>/i.test(html)) bad.push('doctype がない');
  if (!/<html\s+lang=/i.test(html)) bad.push('html lang がない');
  if (!/name=["']viewport["']/i.test(html)) bad.push('viewport がない');
  if (!/<!-- snav:start -->/.test(html)) bad.push('snav マーカーがない');

  // 5. no external dependencies beyond the logo — a dead CDN kills the page
  const ext = [...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/gi)]
    .map((m) => m[1])
    .filter((u) => !/logo\.clearbit\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u))
    .filter((u) => !urls.includes(u));
  const scriptsAndStyles = [...html.matchAll(/<(?:script|link)[^>]+(?:src|href)="(https?:\/\/[^"]+)"/gi)]
    .map((m) => m[1])
    .filter((u) => !/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u));
  if (scriptsAndStyles.length) bad.push(`外部 CDN 依存: ${scriptsAndStyles.join(', ')}`);

  // report
  const name = path.basename(file);
  if (bad.length) {
    failed++;
    console.error(`✗ ${name}`);
    for (const b of bad) console.error(`    ${b}`);
    for (const w of warn) console.error(`    (warn) ${w}`);
  } else {
    console.log(`✓ ${name}  出典${sourceItems} 参照${refs.size}${warn.length ? '  (warn: ' + warn.join('; ') + ')' : ''}`);
  }
}

// ─── optional link check ─────────────────────────────────────────────────────
if (CHECK_LINKS) {
  console.log(`\nchecking ${allUrls.size} URLs...`);
  let dead = 0;
  for (const u of allUrls) {
    try {
      let r = await fetch(u, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (r.status === 405 || r.status === 403)
        r = await fetch(u, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (!r.ok) { console.error(`  ${r.status}  ${u}`); dead++; }
    } catch (e) {
      console.error(`  ERR  ${u}  (${e.name})`);
      dead++;
    }
  }
  console.log(dead ? `\n${dead} URL が 2xx を返さない` : '\nすべての URL が 2xx');
  if (dead) failed++;
}

if (grandfathered.length) {
  console.log(`\n新基準より前に書かれたため免除した項目（${grandfathered.length}件）:`);
  for (const g of grandfathered) console.log(`   ${g}`);
}

console.log(`\nverify: ${files.length} reports, ${failed} failing`);
process.exit(failed ? 1 : 0);
