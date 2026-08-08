#!/usr/bin/env node
// Renders textbook chapters from Markdown into each research section.
//
//   node _tools/build-textbook.mjs                 render from each section's data/chapters/
//   node _tools/build-textbook.mjs --import <dir>  file loose *.md into the right sections first
//   node _tools/build-textbook.mjs --check         exit 1 if any output is stale (CI)
//
// The Markdown lives in the repo at 010_research/<dir>/data/chapters/*.md and is
// the source of truth, the same way data/reports.json is for the report tables.
// The HTML next to it is generated and committed, because the site has no build
// step at serve time — pages must work when opened over file://.
//
// Front matter: section, chapter, slug, title, thesis.
// Output:  010_research/<dir>/chapters/<NN>_<slug>.html
//          010_research/<dir>/data/chapters.json
//          the chapter list between the markers in <dir>/index.html

import { readFile, writeFile, readdir, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const IMPORT = argv.includes('--import') ? argv[argv.indexOf('--import') + 1] : null;

const START = '<!-- chapters:start -->';
const END = '<!-- chapters:end -->';

const DIR = {
  company: '010_research/011_company',
  politics: '010_research/012_politics',
  geo: '010_research/013_geo',
  industry: '010_research/014_industry',
  finance: '010_research/016_finance',
  science: '010_research/017_science',
  computing: '010_research/018_computing',
  method: '020_personal/024_method',
};
const LABEL = {
  company: '企業・スタートアップ', politics: '政治・政策', geo: '地域・地政学',
  industry: '業界構造・製造', finance: '市場・資本・マクロ', science: '科学・数学',
  computing: '計算とソフトウェア',
  method: '思考の型',
};

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ─── markdown ────────────────────────────────────────────────────────────────
// A deliberately small subset: headings, paragraphs, lists, tables, quotes,
// rules, and inline emphasis/code/links. Anything the chapter template does not
// ask for is not supported, so an unexpected construct shows up as plain text
// rather than silently producing broken markup.

function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`)
    // ==…== marks the sentence a section turns on, matching the highlight the
    // reports already use. It is for the judgement, not for every figure —
    // marking a dozen numbers per chapter marks nothing.
    .replace(/==([^=]+)==/g, '<strong class="hit">$1</strong>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // A chapter carries one source link per claim, so the word 出典 repeats far
    // more often than any other. Marking it lets the stylesheet shrink it out of
    // the reading line instead of letting it break the sentence in two.
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, t, u) => `<a class="${t === '出典' ? 'tb-src' : ''}" href="${u}" target="_blank" rel="noopener">${t}</a>`)
    .replace(/ class=""/g, '');
}

// Block-level HTML written straight into the Markdown. Figures are diagrams, and
// a diagram is markup, not prose — there is no Markdown spelling for an SVG. The
// opening tag must sit alone on its line and the matching close likewise, so the
// scan stays a line scan and never has to parse HTML.
// List tags are here too: a <ul class="tb-tl"> timeline is markup, and leaving
// it out meant the block fell through to the paragraph branch and was escaped
// into visible source. Markdown's own "- item" lists are unaffected — the scan
// only fires on a line that starts with the tag.
const RAW_TAGS = 'figure|svg|div|section|aside|details|table|ul|ol|blockquote|pre';
const RAW_OPEN = new RegExp(`^\\s*<(${RAW_TAGS})[\\s>]`, 'i');

function splitRow(line) {
  return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());
}

function render(md) {
  const lines = md.split('\n');
  const out = [];
  const headings = [];
  let i = 0;

  const closeList = (stack) => { while (stack.length) out.push(`</${stack.pop()}>`); };
  const listStack = [];

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) { closeList(listStack); i++; continue; }

    if (/^---+\s*$/.test(line)) { closeList(listStack); out.push('<hr>'); i++; continue; }

    const raw = line.match(RAW_OPEN);
    if (raw) {
      closeList(listStack);
      const tag = raw[1].toLowerCase();
      const open = new RegExp(`<${tag}(?=[\\s>])`, 'gi');
      const close = new RegExp(`</${tag}>`, 'gi');
      const buf = [];
      let depth = 0;
      while (i < lines.length) {
        depth += (lines[i].match(open) ?? []).length - (lines[i].match(close) ?? []).length;
        buf.push(lines[i]);
        i++;
        if (depth <= 0) break;
      }
      out.push(buf.join('\n'));
      continue;
    }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      closeList(listStack);
      const level = h[1].length;
      const text = h[2].trim();
      if (level === 2) {
        const id = `s${headings.length + 1}`;
        headings.push({ id, text });
        out.push(`<h2 id="${id}">${inline(text)}</h2>`);
      } else {
        out.push(`<h${level}>${inline(text)}</h${level}>`);
      }
      i++;
      continue;
    }

    // table: header row followed by a separator row
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[i + 1])) {
      closeList(listStack);
      const head = splitRow(line);
      i += 2;
      const body = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) { body.push(splitRow(lines[i])); i++; }
      out.push('<div class="tb-tw"><table><thead><tr>'
        + head.map((c) => `<th>${inline(c)}</th>`).join('')
        + '</tr></thead><tbody>'
        + body.map((r) => '<tr>' + head.map((_, k) => `<td>${inline(r[k] ?? '')}</td>`).join('') + '</tr>').join('')
        + '</tbody></table></div>');
      continue;
    }

    const li = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (li) {
      const tag = /^\d/.test(li[2]) ? 'ol' : 'ul';
      if (!listStack.length) { listStack.push(tag); out.push(`<${tag}>`); }
      out.push(`<li>${inline(li[3])}</li>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeList(listStack);
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push(`<blockquote>${inline(buf.join(' '))}</blockquote>`);
      continue;
    }

    closeList(listStack);
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !RAW_OPEN.test(lines[i])
      && !/^(#{1,4}\s|>\s?|\s*\||\s*([-*]|\d+\.)\s|---+\s*$)/.test(lines[i])) {
      buf.push(lines[i]); i++;
    }
    if (buf.length) out.push(`<p>${inline(buf.join(''))}</p>`);
    else i++;
  }
  closeList(listStack);
  return { html: out.join('\n'), headings };
}

function frontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return [{}, src];
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return [meta, src.slice(m[0].length)];
}

// ─── page ────────────────────────────────────────────────────────────────────

// Chapters are written from research notes. Whether a second pass checked the
// numbers against their sources is a fact about the page, so the page says it.
// Front matter carries `verified: true` once that pass has run; until then the
// notice stands. Silence would read as "checked".
const UNVERIFIED = `<p class="tb-warn"><strong>この章はまだ出典照合を通していない。</strong>
数値は執筆時に調べたまま入っており、第三者による検証を経ていない。
本文中の出典リンクから各自で確かめること。</p>`;

function page(meta, body, headings, nav) {
  const verified = String(meta.verified ?? '').toLowerCase() === 'true';
  const toc = headings.length
    ? `<nav class="tb-toc"><div class="tb-toc-l">この章の構成</div><ol>${headings
        .map((h) => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></nav>`
    : '';
  const prev = nav.prev ? `<a class="tb-nav-a" href="${esc(nav.prev.file)}">← ${esc(nav.prev.title)}</a>` : '<span></span>';
  const next = nav.next ? `<a class="tb-nav-a" href="${esc(nav.next.file)}">${esc(nav.next.title)} →</a>` : '<span></span>';

  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}｜${esc(LABEL[meta.section])}</title>
<style>
  :root{
    --bg:#F8F7F3; --ink:#1a1a1a; --sub:#666; --muted:#8a8a8a; --accent:#2563EB;
    --line:#E5E2DA; --card:#fff; --chip:#EEF2FF;
    --grid:#E9E5DC; --deep:#1E3A8A; --warm:#B45309; --cool:#0F766E; --dim:#F2EFE8;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,"Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif;
    line-height:1.9;font-size:15.5px;-webkit-font-smoothing:antialiased}
  .wrap{max-width:760px;margin:0 auto;padding:40px 28px 90px}

  /* Reading progress. The chapters run long; the bar is the only cue that says
     how much is left without scrolling to find out. */
  .tb-prog{position:fixed;top:56px;left:0;height:2px;width:0;background:var(--accent);
    z-index:9996;transition:width .1s linear}

  .crumb{font-size:12px;color:var(--sub);margin-bottom:18px}
  .crumb a{color:var(--sub);text-decoration:none}
  .crumb a:hover{color:var(--accent)}

  .tb-ch{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
  h1{font-size:29px;margin:4px 0 12px;letter-spacing:-.015em;line-height:1.4}
  .tb-thesis{font-size:15px;color:var(--ink);background:var(--card);
    border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:0 8px 8px 0;
    padding:13px 18px;margin:0 0 22px;line-height:1.8}
  .tb-warn{font-size:13px;color:#7A4A00;background:#FDF6E7;border:1px solid #EBD9AE;
    border-radius:8px;padding:11px 15px;margin:0 0 26px;line-height:1.75}
  .tb-warn strong{color:#5C3800}

  .tb-toc{background:var(--card);border:1px solid var(--line);border-radius:10px;
    padding:18px 20px 14px;margin:0 0 34px}
  .tb-toc-l{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--muted);margin-bottom:10px}
  .tb-toc ol{margin:0;padding:0;list-style:none;counter-reset:toc;
    display:grid;grid-template-columns:1fr 1fr;gap:1px 22px}
  .tb-toc li{counter-increment:toc;margin:0}
  .tb-toc a{color:var(--sub);text-decoration:none;font-size:13px;display:flex;gap:9px;
    padding:4px 0;border-bottom:1px solid transparent;line-height:1.55}
  .tb-toc a::before{content:counter(toc,decimal-leading-zero);color:var(--muted);
    font-size:10.5px;font-variant-numeric:tabular-nums;padding-top:3px;flex:none}
  .tb-toc a:hover{color:var(--accent)}
  .tb-toc a.on{color:var(--ink);font-weight:600}
  .tb-toc a.on::before{color:var(--accent)}
  @media(max-width:640px){ .tb-toc ol{grid-template-columns:1fr} }

  /* Section and figure numbers are generated, not typed, so the Markdown stays
     prose and inserting one never renumbers the rest by hand. */
  .wrap{counter-reset:sec fig}
  h2{font-size:20.5px;margin:52px 0 12px;padding-top:20px;border-top:1px solid var(--line);
    letter-spacing:-.01em;scroll-margin-top:74px;counter-increment:sec;
    display:flex;gap:12px;align-items:baseline;line-height:1.5}
  h2::before{content:counter(sec,decimal-leading-zero);font-size:11.5px;font-weight:600;
    color:var(--accent);letter-spacing:.08em;font-variant-numeric:tabular-nums;flex:none;
    position:relative;top:-1px}
  h3{font-size:16.5px;margin:30px 0 6px;letter-spacing:-.005em}
  h4{font-size:14.5px;margin:20px 0 4px;color:var(--sub)}
  p{margin:13px 0}
  a{color:var(--accent)}
  strong{font-weight:700}
  strong.hit{background:#FEF9C3;padding:0 3px;box-decoration-break:clone;
    -webkit-box-decoration-break:clone}
  code{background:#EFEDE6;padding:1px 5px;border-radius:4px;font-size:13px}
  hr{border:none;border-top:1px solid var(--line);margin:30px 0}
  blockquote{border-left:3px solid var(--line);margin:14px 0;padding:2px 0 2px 16px;
    color:var(--sub)}
  ul,ol{margin:13px 0;padding-left:24px}
  li{margin:5px 0}

  /* Source markers sit between sentences by the dozen. At body size they cut the
     line in half; small and grey they stay reachable without being read. */
  .tb-src{font-size:10.5px;text-decoration:none;color:var(--muted);
    border:1px solid var(--line);border-radius:3px;padding:0 4px;margin:0 2px;
    vertical-align:1.5px;white-space:nowrap;background:var(--card)}
  .tb-src:hover{color:var(--accent);border-color:var(--accent)}

  .tb-tw{overflow-x:auto;margin:20px 0;background:var(--card);
    border:1px solid var(--line);border-radius:10px}
  table{width:100%;border-collapse:collapse;font-size:13.5px;min-width:520px}
  th,td{padding:10px 14px;text-align:left;border-bottom:1px solid var(--line);
    vertical-align:top;line-height:1.7}
  th{background:#F0EEE8;font-weight:600;font-size:12px;white-space:nowrap;color:var(--sub)}
  tbody tr:last-child td{border-bottom:none}
  tbody tr:hover{background:#FBFAF7}
  td a{word-break:break-all}

  /* ── figures ─────────────────────────────────────────────────────────────
     Every diagram is a <figure class="tb-fig"> with a <figcaption>. The caption
     states what the figure shows; the figure is not decoration and is numbered
     so the prose can point at it. */
  .tb-fig{margin:26px 0;padding:0;background:var(--card);border:1px solid var(--line);
    border-radius:10px;overflow:hidden;counter-increment:fig}
  .tb-fig > svg{display:block;width:100%;height:auto;background:var(--card)}
  .tb-fig figcaption{font-size:12.5px;color:var(--sub);line-height:1.7;
    padding:11px 16px;border-top:1px solid var(--line);background:#FCFBF8}
  .tb-fig figcaption::before{content:"図 " counter(fig) " ";font-weight:600;color:var(--ink)}
  .tb-fig svg text{font-family:-apple-system,"Hiragino Sans",sans-serif}

  /* ── key numbers ─────────────────────────────────────────────────────────── */
  .tb-kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;
    margin:22px 0}
  .tb-kpi > div{background:var(--card);border:1px solid var(--line);border-radius:10px;
    padding:14px 16px}
  .tb-kpi b{display:block;font-size:23px;font-weight:700;letter-spacing:-.02em;
    line-height:1.25;font-variant-numeric:tabular-nums}
  .tb-kpi b small{font-size:13px;font-weight:600;color:var(--sub);margin-left:2px}
  .tb-kpi i{display:block;font-style:normal;font-size:12px;color:var(--sub);
    line-height:1.6;margin-top:5px}
  .tb-kpi em{display:block;font-style:normal;font-size:10.5px;color:var(--muted);margin-top:4px}

  /* ── comparison bars ─────────────────────────────────────────────────────
     A row is: label, track with an inline width, value. The width is a share of
     the largest value in the set, so the bars are readable without an axis. */
  .tb-bars{margin:22px 0;background:var(--card);border:1px solid var(--line);
    border-radius:10px;padding:16px 18px}
  .tb-bars h5{margin:0 0 12px;font-size:12px;font-weight:600;color:var(--sub);
    letter-spacing:.03em}
  .tb-bar{display:grid;grid-template-columns:minmax(72px,26%) 1fr auto;gap:12px;
    align-items:center;margin:7px 0;font-size:12.5px}
  .tb-bar span:first-child{color:var(--sub);line-height:1.45}
  .tb-bar u{display:block;height:9px;background:var(--dim);border-radius:5px;
    text-decoration:none;overflow:hidden}
  .tb-bar u > i{display:block;height:100%;background:var(--accent);border-radius:5px}
  .tb-bar u.w > i{background:var(--warm)}
  .tb-bar u.c > i{background:var(--cool)}
  .tb-bar u.m > i{background:#A8A29A}
  .tb-bar b{font-variant-numeric:tabular-nums;font-size:12.5px;font-weight:600;
    white-space:nowrap}

  /* ── two-sided comparison ────────────────────────────────────────────────── */
  .tb-vs{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:22px 0}
  .tb-vs > div{background:var(--card);border:1px solid var(--line);border-radius:10px;
    padding:15px 17px}
  .tb-vs h5{margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:-.01em;
    padding-bottom:8px;border-bottom:1px solid var(--line)}
  .tb-vs ul{margin:0;padding-left:17px;font-size:13px;line-height:1.75}
  .tb-vs li{margin:5px 0;color:var(--sub)}
  .tb-vs li strong{color:var(--ink);font-weight:600}
  @media(max-width:640px){ .tb-vs{grid-template-columns:1fr} }

  /* ── sequence / timeline ─────────────────────────────────────────────────── */
  .tb-tl{margin:22px 0;padding:0 0 0 22px;border-left:2px solid var(--line);list-style:none}
  .tb-tl li{position:relative;margin:0 0 18px;padding:0;font-size:13.5px;line-height:1.75}
  .tb-tl li::before{content:"";position:absolute;left:-28px;top:9px;width:9px;height:9px;
    border-radius:50%;background:var(--accent);border:2px solid var(--bg)}
  .tb-tl li b{display:block;font-size:11px;letter-spacing:.06em;color:var(--muted);
    font-weight:600;margin-bottom:1px}
  .tb-tl li strong{font-weight:700}

  /* ── takeaway callout ────────────────────────────────────────────────────── */
  .tb-key{background:var(--chip);border:1px solid #D5DDF7;border-radius:10px;
    padding:14px 18px;margin:22px 0;font-size:14px;line-height:1.8}
  .tb-key b{display:block;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--deep);margin-bottom:5px}

  .tb-nav{display:flex;justify-content:space-between;gap:16px;margin-top:50px;
    padding-top:20px;border-top:1px solid var(--line);font-size:13px}
  .tb-nav-a{color:var(--accent);text-decoration:none;max-width:46%}
  .tb-nav-a:hover{text-decoration:underline}

  @media(max-width:640px){
    .wrap{padding:28px 18px 70px} h1{font-size:23px}
    h2{font-size:18.5px;margin-top:42px} body{font-size:15px}
    .tb-kpi{grid-template-columns:1fr 1fr} .tb-kpi b{font-size:20px}
    .tb-bar{grid-template-columns:minmax(64px,34%) 1fr auto;gap:9px;font-size:12px}
  }
  @media print{ .tb-prog,.snav,.snav-footer{display:none!important}
    body{padding:0!important;font-size:11pt} .tb-fig,.tb-tw{break-inside:avoid} }
</style>
</head>
<body>
<!-- snav:start -->
<!-- snav:end -->

<div class="wrap">
  <div class="crumb"><a href="../../../index.html">shogo</a> / ${esc(path.dirname(DIR[meta.section]).replace('_', ' '))} /
    <a href="../index.html">${esc(path.basename(DIR[meta.section]))}</a> / chapter ${esc(meta.chapter)}</div>

  <div class="tb-ch">Chapter ${esc(meta.chapter)} — ${esc(LABEL[meta.section])}</div>
  <h1>${esc(meta.title)}</h1>
  <p class="tb-thesis">${esc(meta.thesis)}</p>

${verified ? '' : UNVERIFIED}

${toc}

${body}

  <div class="tb-nav">${prev}${next}</div>
</div>
<script>
// Progress bar and the "you are here" mark in the contents. Both are read-only
// reflections of scroll position, so the page is complete without them and the
// script never has to run before the text is readable.
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
  addEventListener('scroll', function(){
    if (!tick) { tick = true; requestAnimationFrame(draw); }
  }, {passive:true});
  draw();
})();
</script>
</body>
</html>
`;
}

// ─── section index block ─────────────────────────────────────────────────────

const INDEX_STYLE = `<style>
.tbk{margin-top:38px;padding-top:26px;border-top:1px solid #E5E2DA}
.tbk h2{font-size:17px;margin:0;letter-spacing:-.01em;color:#1a1a1a}
.tbk-lead{font-size:13px;color:#666;margin:6px 0 16px;max-width:640px}
.tbk-list{list-style:none;margin:0;padding:0;counter-reset:tbk}
.tbk-item{background:#fff;border:1px solid #E5E2DA;border-radius:10px;
  padding:14px 18px;margin-bottom:8px;display:block;text-decoration:none;color:inherit}
.tbk-item:hover{border-color:#2563EB}
.tbk-n{font-size:11px;letter-spacing:.1em;color:#8a8a8a}
.tbk-t{font-size:15px;font-weight:600;color:#1a1a1a;letter-spacing:-.01em;margin-top:2px}
.tbk-item:hover .tbk-t{color:#2563EB}
.tbk-s{font-size:13px;color:#666;margin-top:4px}
.tbk-warn{font-size:12.5px;color:#7A4A00;background:#FDF6E7;border:1px solid #EBD9AE;
  border-radius:8px;padding:10px 14px;margin:0 0 14px;line-height:1.7}
.tbk-b{display:inline-block;font-size:10px;letter-spacing:.06em;color:#7A4A00;
  background:#FDF6E7;border:1px solid #EBD9AE;border-radius:4px;padding:0 6px;margin-left:8px}
</style>`;

function indexBlock(chapters) {
  const items = chapters.map((c) => `    <a class="tbk-item" href="chapters/${esc(c.file)}">
      <div class="tbk-n">CHAPTER ${esc(c.chapter)}${c.verified ? '' : '<span class="tbk-b">未検証</span>'}</div>
      <div class="tbk-t">${esc(c.title)}</div>
      <div class="tbk-s">${esc(c.thesis)}</div>
    </a>`).join('\n');

  const n = chapters.filter((c) => !c.verified).length;
  const warn = n
    ? `  <p class="tbk-warn">${n} 章はまだ出典照合を通していない。数値は執筆時に調べたまま入っている。各章の出典リンクから確かめること。</p>\n`
    : '';

  return `${START}
${INDEX_STYLE}
<section class="tbk">
  <h2>教科書</h2>
  <p class="tbk-lead">上の論点に答えを出して章にまとめたもの。前の章が後の章の前提になる順に並べてある。</p>
${warn}  <div class="tbk-list">
${items}
  </div>
</section>
${END}`;
}

// ─── run ─────────────────────────────────────────────────────────────────────

const SNAV_RE = /<!-- snav:start -->[\s\S]*?<!-- snav:end -->/;

/** Keep the nav build-nav.mjs already wrote, so the two tools do not fight. */
function carrySnav(next, cur) {
  if (!cur) return next;
  const m = cur.match(SNAV_RE);
  return m ? next.replace(SNAV_RE, () => m[0]) : next;
}

const list = async (dir) => {
  try { return (await readdir(dir)).filter((f) => f.endsWith('.md')).sort(); }
  catch { return []; }
};

// --import files loose Markdown into the section its front matter names, so the
// chapters that a run produces land beside the section they belong to instead
// of staying in one pile somewhere else.
if (IMPORT) {
  for (const f of await list(IMPORT)) {
    const [meta] = frontMatter(await readFile(path.join(IMPORT, f), 'utf8'));
    if (!meta.section || !DIR[meta.section]) { console.error(`  BAD SECTION      ${f} — "${meta.section}"`); continue; }
    if (!meta.slug || !meta.chapter) { console.error(`  BAD FRONT MATTER ${f}`); continue; }
    const dest = path.join(ROOT, DIR[meta.section], 'data', 'chapters');
    await mkdir(dest, { recursive: true });
    const name = `${String(parseInt(meta.chapter, 10)).padStart(2, '0')}_${meta.slug}.md`;
    await copyFile(path.join(IMPORT, f), path.join(dest, name));
    console.log(`  imported         ${DIR[meta.section]}/data/chapters/${name}`);
  }
}

const bySection = {};

for (const [section, dir] of Object.entries(DIR)) {
  const src = path.join(ROOT, dir, 'data', 'chapters');
  for (const f of await list(src)) {
    const [meta, body] = frontMatter(await readFile(path.join(src, f), 'utf8'));
    if (!meta.slug || !meta.title) { console.error(`  BAD FRONT MATTER ${dir}/data/chapters/${f}`); continue; }
    meta.section = section;
    meta.chapter = String(parseInt(meta.chapter, 10) || (bySection[section]?.length ?? 0) + 1);
    (bySection[section] ??= []).push({ meta, body });
  }
}

let wrote = 0;
let stale = 0;

for (const [section, list] of Object.entries(bySection)) {
  list.sort((a, b) => Number(a.meta.chapter) - Number(b.meta.chapter));

  const files = list.map((x) => `${String(x.meta.chapter).padStart(2, '0')}_${x.meta.slug}.html`);
  const dir = path.join(ROOT, DIR[section]);
  await mkdir(path.join(dir, 'chapters'), { recursive: true });

  for (let k = 0; k < list.length; k++) {
    const { meta, body } = list[k];
    // The template already prints the title as <h1>. Drop the Markdown one so
    // the page does not open with the same heading twice.
    const { html, headings } = render(body.replace(/^\s*#\s+.*$/m, ''));
    const nav = {
      prev: k > 0 ? { file: files[k - 1], title: list[k - 1].meta.title } : null,
      next: k < list.length - 1 ? { file: files[k + 1], title: list[k + 1].meta.title } : null,
    };
    const abs = path.join(dir, 'chapters', files[k]);
    const cur = existsSync(abs) ? await readFile(abs, 'utf8') : null;
    // page() emits empty snav markers; build-nav fills them afterwards. Carry the
    // existing nav across so rebuilding a chapter does not strip it, and so
    // --check compares the part this tool actually owns.
    const next = carrySnav(page(meta, html, headings, nav), cur);
    if (cur === next) continue;
    if (CHECK) { console.error(`  WOULD CHANGE     ${DIR[section]}/chapters/${files[k]}`); stale++; continue; }
    await writeFile(abs, next);
    wrote++;
  }

  const manifest = list.map((x, k) => ({
    chapter: Number(x.meta.chapter), slug: x.meta.slug, title: x.meta.title,
    thesis: x.meta.thesis ?? '',
    verified: String(x.meta.verified ?? '').toLowerCase() === 'true',
    file: files[k],
  }));
  await writeFile(path.join(dir, 'data', 'chapters.json'), JSON.stringify(manifest, null, 2) + '\n');

  const indexAbs = path.join(dir, 'index.html');
  const src = await readFile(indexAbs, 'utf8');
  const i = src.indexOf(START);
  const j = src.indexOf(END);
  if (i === -1 || j === -1) { console.error(`  MISSING MARKERS  ${DIR[section]}/index.html`); stale++; continue; }
  const nextIdx = src.slice(0, i) + indexBlock(manifest) + src.slice(j + END.length);
  if (nextIdx !== src) {
    if (CHECK) { console.error(`  WOULD CHANGE     ${DIR[section]}/index.html`); stale++; }
    else { await writeFile(indexAbs, nextIdx); wrote++; }
  }

  console.log(`  ${section.padEnd(9)} ${String(list.length).padStart(2)}章`);
}

console.log(`\ntextbook ${CHECK ? 'check' : 'build'}: ${Object.keys(bySection).length} sections, ${wrote} written, ${stale} stale`);
if (CHECK && stale > 0) { console.error('\nRun `node _tools/build-textbook.mjs <src>` and commit the result.'); process.exit(1); }
