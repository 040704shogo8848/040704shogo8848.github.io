#!/usr/bin/env node
// Renders the chemistry textbook from HTML fragments.
//
//   node 020_personal/02C_chemistry/build.mjs          write
//   node 020_personal/02C_chemistry/build.mjs --check  exit 1 if any output is stale
//
// This section does not use _tools/build-textbook.mjs: that script re-renders
// every section at once, and the verification records of 017 science exist only
// in its HTML. Running it would overwrite them.
//
// Source:  data/chapters/NN_slug.frag   (a <!--meta {json} --> header, then body HTML)
// Output:  chapters/NN_slug.html, data/chapters.json, the card list in index.html
//
// After writing, each rendered chapter is passed through ~/.claude/scripts/ja_lint.py
// when it exists. Lint findings are reported but do not block the build.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CHECK = process.argv.includes('--check');
const SRC = path.join(HERE, 'data', 'chapters');
const START = '<!-- chapters:start -->';
const END = '<!-- chapters:end -->';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const css = await readFile(path.join(HERE, 'data', 'chapter.css'), 'utf8');

function parse(raw, file) {
  const m = raw.match(/^<!--meta\s*([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`no meta header: ${file}`);
  const meta = JSON.parse(m[1]);
  meta.slug = file.replace(/\.frag$/, '');
  meta.file = `${meta.slug}.html`;
  return { meta, body: raw.slice(m[0].length).trim() };
}

function headings(body) {
  return [...body.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)]
    .map(([, id, t]) => ({ id, text: t.replace(/<[^>]+>/g, '') }));
}

const label = (m) => (m.chapter === 0 ? '序章' : m.chapter === 16 ? '終章' : `第${m.chapter}章`);

function status(meta) {
  const v = meta.verify;
  if (!v) return `<p class="tb-warn"><strong>この章はまだ出典照合を通していない。</strong>数値と定義は執筆時に調べた値である。本文の出典リンクから確かめること。</p>`;
  return `<p class="tb-ok"><strong>この章は${esc(v.date)}に出典照合を通した。</strong> 検証した事実は${v.checked}件である。出典と一致したものは${v.match}件である。食い違ったものは${v.fixed}件で本文を修正済みである。出典で確認できなかったものは${v.unconfirmed}件である。${v.unconfirmed ? 'これらは本文で断定していない。' : ''}</p>`;
}

function page(meta, body, nav) {
  const hs = headings(body);
  const toc = hs.length ? `<nav class="tb-toc"><div class="tb-toc-l">この章の構成</div><ol>${hs
    .map((h) => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></nav>` : '';
  const prev = nav.prev ? `<a class="tb-nav-a" href="${esc(nav.prev.file)}">← ${esc(nav.prev.title)}</a>` : '<a class="tb-nav-a" href="../index.html">← 目次</a>';
  const next = nav.next ? `<a class="tb-nav-a" href="${esc(nav.next.file)}">${esc(nav.next.title)} →</a>` : '<a class="tb-nav-a" href="../drill.html">計算ドリル →</a>';
  return `<!doctype html>
<html lang="ja">
<head>
<meta name="robots" content="noindex, nofollow">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}｜化学基礎</title>
<style>
${css}</style>
</head>
<body>
<!-- snav:start -->
<!-- snav:end -->

<div class="wrap">
  <div class="crumb"><a href="../../../index.html">shogo</a> / personal /
    <a href="../index.html">02C chemistry</a> / ${esc(label(meta))}</div>

  <div class="tb-ch">${meta.part === label(meta) ? esc(meta.part) : `${esc(meta.part)} — ${esc(label(meta))}`}</div>
  <h1>${esc(meta.title)}</h1>
  <p class="tb-thesis">${esc(meta.thesis)}</p>

${status(meta)}

${toc}

${body}

  <div class="tb-nav">${prev}${next}</div>
</div>
<script>
(function(){
  var bar = document.createElement('div'); bar.className = 'tb-prog';
  document.body.appendChild(bar);
  var links = [].slice.call(document.querySelectorAll('.tb-toc a'));
  var heads = links.map(function(a){ return document.getElementById(a.hash.slice(1)); });
  var tick = false;
  function draw(){
    tick = false;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
    var at = -1;
    for (var k = 0; k < heads.length; k++) {
      if (heads[k] && heads[k].getBoundingClientRect().top < 120) at = k;
    }
    for (var j = 0; j < links.length; j++) links[j].classList.toggle('on', j === at);
  }
  addEventListener('scroll', function(){ if (!tick) { tick = true; requestAnimationFrame(draw); } }, {passive:true});
  draw();
})();
</script>
</body>
</html>
`;
}

function cards(chs) {
  let part = null;
  const out = [];
  for (const c of chs) {
    if (c.part !== part) {
      if (part !== null) out.push('  </div>');
      part = c.part;
      out.push(`  <h3 class="tbk-p">${esc(part)}</h3>\n  <div class="tbk-list">`);
    }
    const badge = c.verify ? '<span class="tbk-b tbk-b-ok">検証済み</span>' : '<span class="tbk-b">未照合</span>';
    out.push(`    <a class="tbk-item" href="chapters/${esc(c.file)}">
      <div class="tbk-n">${esc(label(c))}${badge}</div>
      <div class="tbk-t">${esc(c.title)}</div>
      <div class="tbk-s">${esc(c.thesis)}</div>
    </a>`);
  }
  if (part !== null) out.push('  </div>');
  return `${START}\n<section class="tbk">\n  <h2>教科書</h2>\n${out.join('\n')}\n</section>\n${END}`;
}

const files = existsSync(SRC) ? (await readdir(SRC)).filter((f) => f.endsWith('.frag')).sort() : [];
const chs = [];
for (const f of files) chs.push(parse(await readFile(path.join(SRC, f), 'utf8'), f));

let stale = 0;
async function put(p, s) {
  const cur = existsSync(p) ? await readFile(p, 'utf8') : null;
  // Pages carry a nav that build-nav.mjs fills in afterwards; compare without it.
  const strip = (x) => x && x.replace(/<!-- snav:start -->[\s\S]*?<!-- snav:end -->/, '');
  if (strip(cur) === strip(s)) return;
  if (CHECK) { console.error(`  WOULD CHANGE  ${path.relative(HERE, p)}`); stale++; return; }
  // Keep the nav already injected so a rebuild does not strip it.
  const nav = cur && cur.match(/<!-- snav:start -->[\s\S]*?<!-- snav:end -->/);
  await writeFile(p, nav ? s.replace(/<!-- snav:start -->[\s\S]*?<!-- snav:end -->/, nav[0]) : s);
  console.log(`  wrote         ${path.relative(HERE, p)}`);
}

for (let i = 0; i < chs.length; i++) {
  const { meta, body } = chs[i];
  await put(path.join(HERE, 'chapters', meta.file),
    page(meta, body, { prev: chs[i - 1]?.meta, next: chs[i + 1]?.meta }));
}
const metas = chs.map((c) => c.meta);
await put(path.join(HERE, 'data', 'chapters.json'), JSON.stringify(metas.map(({ chapter, part, title, thesis, file, verify }) =>
  ({ chapter, part, title, thesis, file, verify: verify ?? null })), null, 2) + '\n');

const idxPath = path.join(HERE, 'index.html');
if (existsSync(idxPath)) {
  const idx = await readFile(idxPath, 'utf8');
  const i = idx.indexOf(START), j = idx.indexOf(END);
  if (i === -1 || j === -1) { console.error('  MISSING MARKERS index.html'); stale++; }
  else await put(idxPath, idx.slice(0, i) + cards(metas) + idx.slice(j + END.length));
}

const lint = path.join(os.homedir(), '.claude/scripts/ja_lint.py');
if (!CHECK && existsSync(lint) && files.length) {
  try { execFileSync('python3', [lint, ...metas.map((m) => path.join(HERE, 'chapters', m.file))], { stdio: 'inherit' }); }
  catch { console.error('  ja_lint: 指摘あり'); }
}
if (stale) process.exit(1);
