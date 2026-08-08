#!/usr/bin/env node
// Regenerates the shared nav ("snav") between the markers in every HTML file.
//
//   node _tools/build-nav.mjs          write
//   node _tools/build-nav.mjs --check  exit 1 if anything would change (CI)
//
// Links are emitted as paths relative to each file's own depth, so pages keep
// working when opened over file:// — the same reason data/manifest.js is a JS
// file rather than JSON.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');

const START = '<!-- snav:start -->';
const END = '<!-- snav:end -->';
// A page carrying this marker stands alone — no nav, and not reported as
// missing one. Use it for material that should not link back into the site.
const NONE = '<!-- snav:none -->';
const SKIP_DIRS = new Set(['.git', 'node_modules', '_tools']);

const nav = JSON.parse(await readFile(path.join(ROOT, '_tools/nav.json'), 'utf8'));

// ─── icons ───────────────────────────────────────────────────────────────────

const ICONS = {
  X: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z',
  Facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  LinkedIn: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

// ─── markup ──────────────────────────────────────────────────────────────────

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Path from the directory holding `file` to `target`, both repo-relative. */
function rel(file, target) {
  const r = path.relative(path.dirname(file), target).split(path.sep).join('/');
  return r === '' ? '.' : r;
}

const STYLE = `<style>
body{padding-top:56px!important;padding-bottom:68px!important}
.snav{position:fixed;top:0;left:0;right:0;height:56px;background:#111;display:flex;align-items:center;justify-content:space-between;padding:0 28px;z-index:9999;font-family:'Poppins',-apple-system,sans-serif}
.snav-logo{color:#fff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.02em;transition:opacity .15s}
.snav-logo:hover{opacity:.6}
.snav-inline{display:none;align-items:stretch;gap:2px;height:100%}
.snav-grp{position:relative;display:flex;align-items:center}
.snav-top{background:none;border:none;font:inherit;cursor:pointer;color:rgba(255,255,255,.7);font-size:12px;font-weight:500;padding:6px 13px;border-radius:4px;transition:color .15s,background .15s;letter-spacing:-.01em;display:flex;align-items:center;gap:6px}
.snav-top::after{content:"";width:4px;height:4px;border-right:1.2px solid currentColor;border-bottom:1.2px solid currentColor;transform:translateY(-1px) rotate(45deg);opacity:.55}
.snav-grp:hover .snav-top,.snav-grp:focus-within .snav-top,.snav-grp.open .snav-top{color:#fff;background:rgba(255,255,255,.08)}
.snav-drop{position:absolute;top:100%;left:0;min-width:196px;background:#161616;border:1px solid #2b2b2b;border-radius:7px;padding:6px;box-shadow:0 10px 28px rgba(0,0,0,.45);opacity:0;visibility:hidden;transform:translateY(-5px);transition:opacity .14s ease,transform .14s ease,visibility .14s}
.snav-grp:hover .snav-drop,.snav-grp:focus-within .snav-drop,.snav-grp.open .snav-drop{opacity:1;visibility:visible;transform:translateY(0)}
.snav-drop a{display:block;color:rgba(255,255,255,.72);text-decoration:none;font-size:12.5px;font-weight:500;padding:7px 12px;border-radius:4px;white-space:nowrap;letter-spacing:-.01em;transition:color .12s,background .12s}
.snav-drop a:hover{color:#fff;background:rgba(255,255,255,.09)}
.snav-btn{background:none;border:none;cursor:pointer;padding:6px;display:flex;flex-direction:column;gap:5px}
.snav-btn span{display:block;width:20px;height:1.5px;background:#fff;transition:all .2s ease}
.snav-btn.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.snav-btn.open span:nth-child(2){opacity:0}
.snav-btn.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.snav-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9998;cursor:pointer}
.snav-overlay.open{display:block}
.snav-panel{position:fixed;top:0;right:0;bottom:0;width:min(260px,80vw);background:#111;z-index:9999;transform:translateX(100%);transition:transform .25s ease;padding:68px 32px 72px;font-family:'Poppins',-apple-system,sans-serif;overflow-y:auto}
.snav-panel.open{transform:translateX(0)}
.snav-sec{margin-bottom:28px}
.snav-sec-label{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.28);margin-bottom:8px}
.snav-a{display:block;color:rgba(255,255,255,.8);text-decoration:none;font-size:13px;font-weight:600;padding:5px 0;letter-spacing:-.01em;transition:color .12s}
.snav-a:hover{color:#fff}
@media(min-width:900px){.snav-inline{display:flex}.snav-btn{display:none}}
.snav-footer{position:fixed;bottom:0;left:0;right:0;height:62px;background:#111;border-top:1px solid #222;display:flex;align-items:center;justify-content:center;padding:0 28px;font-family:'Poppins',-apple-system,sans-serif;z-index:9997}
.snav-footer-sns{display:flex;gap:20px}
.snav-footer-sns a{color:rgba(255,255,255,.4);text-decoration:none;transition:color .15s;display:flex}
.snav-footer-sns a:hover{color:rgba(255,255,255,.9)}
.snav-footer-txt{color:rgba(255,255,255,.3);font-size:11px;letter-spacing:.06em}
</style>`;

function buildSnav(file) {
  const home = rel(file, nav.home);
  const flat = nav.sections.flatMap((s) => s.links);

  // Desktop nav shows only the section names; the pages appear on hover. Tapping
  // the name works too, for pointer-less screens wide enough to skip the burger.
  const inline = nav.sections
    .map(
      (s) => `<div class="snav-grp"><button type="button" class="snav-top" onclick="snavDrop(this)">${esc(s.label)}</button>` +
        `<div class="snav-drop">` +
        s.links.map((l) => `<a href="${esc(rel(file, l.href))}">${esc(l.text)}</a>`).join('') +
        `</div></div>`
    )
    .join('');

  const panel = nav.sections
    .map(
      (s) => `  <div class="snav-sec">
    <div class="snav-sec-label">${esc(s.label)}</div>
${s.links.map((l) => `    <a class="snav-a" href="${esc(rel(file, l.href))}">${esc(l.text)}</a>`).join('\n')}
  </div>`
    )
    .join('\n');

  const sns = (nav.social ?? [])
    .filter((s) => ICONS[s.name])
    .map(
      (s) =>
        `<a href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}">` +
        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="${ICONS[s.name]}"/></svg></a>`
    )
    .join('');

  const footerInner = sns
    ? `<div class="snav-footer-sns">${sns}</div>`
    : `<div class="snav-footer-txt">${esc(nav.logo)}</div>`;

  return `${START}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
${STYLE}
<div class="snav">
  <a class="snav-logo" href="${esc(home)}">${esc(nav.logo)}</a>
  <div class="snav-inline">${inline}</div>
  <button class="snav-btn" id="snavBtn" onclick="snavToggle()" aria-label="menu"><span></span><span></span><span></span></button>
</div>
<div class="snav-overlay" id="snavOverlay" onclick="snavToggle()"></div>
<nav class="snav-panel" id="snavPanel">
  <a class="snav-a" href="${esc(home)}" style="opacity:.5;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.1)">home</a>
${panel}
</nav>
<script>function snavToggle(){for(const id of ['snavBtn','snavPanel','snavOverlay'])document.getElementById(id).classList.toggle('open')}
function snavDrop(b){var g=b.parentNode,was=g.classList.contains('open');document.querySelectorAll('.snav-grp').forEach(function(x){x.classList.remove('open')});if(!was)g.classList.add('open')}
document.addEventListener('click',function(e){if(!e.target.closest('.snav-grp'))document.querySelectorAll('.snav-grp').forEach(function(x){x.classList.remove('open')})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.snav-grp').forEach(function(x){x.classList.remove('open')})});</script>
<footer class="snav-footer">${footerInner}</footer>
${END}`;
}

// ─── walk ────────────────────────────────────────────────────────────────────

async function* htmlFiles(dir = ROOT) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(abs);
    else if (e.name.endsWith('.html')) yield abs;
  }
}

let changed = 0;
let missing = 0;
let total = 0;
let standalone = 0;

for await (const abs of htmlFiles()) {
  const file = path.relative(ROOT, abs).split(path.sep).join('/');
  const src = await readFile(abs, 'utf8');
  total++;

  if (src.includes(NONE)) { standalone++; continue; }

  const i = src.indexOf(START);
  const j = src.indexOf(END);
  if (i === -1 || j === -1 || j < i) {
    console.error(`  MISSING MARKERS  ${file}`);
    missing++;
    continue;
  }

  const next = src.slice(0, i) + buildSnav(file) + src.slice(j + END.length);
  if (next === src) continue;

  changed++;
  if (CHECK) console.error(`  WOULD CHANGE     ${file}`);
  else {
    await writeFile(abs, next);
    console.log(`  updated          ${file}`);
  }
}

const label = CHECK ? 'check' : 'build';
console.log(`\nsnav ${label}: ${total} files, ${changed} ${CHECK ? 'stale' : 'updated'}, `
  + `${missing} missing markers, ${standalone} standalone`);

if (missing > 0) {
  console.error('\nEvery page needs `<!-- snav:start --><!-- snav:end -->` right after <body>.');
  process.exit(1);
}
if (CHECK && changed > 0) {
  console.error('\nRun `node _tools/build-nav.mjs` and commit the result.');
  process.exit(1);
}
