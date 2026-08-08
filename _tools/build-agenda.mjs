#!/usr/bin/env node
// Renders each section's research agenda between the markers in that section's
// index.html.
//
//   node _tools/build-agenda.mjs          write
//   node _tools/build-agenda.mjs --check  exit 1 if anything would change (CI)
//
// The agenda is not one table. Every section owns the questions that feed it,
// in its own `data/agenda.json`, next to the reports those questions turn into.
// This tool is the only thing that reads them, so adding an agenda to a section
// is: drop the JSON in `data/`, put the markers in `index.html`, run this.
//
// Rows are written as static HTML rather than rendered from a JS bundle — the
// filtering script only hides list items it finds in the DOM. Pages therefore
// still show every question with JavaScript off and over file://.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');

const START = '<!-- agenda:start -->';
const END = '<!-- agenda:end -->';
const SKIP_DIRS = new Set(['.git', 'node_modules', '_tools']);

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// The four research sections share one palette; the agenda block hard-codes it
// so a section only needs the markers, not a matching set of CSS variables.
const STYLE = `<style>
.agd{margin-top:38px;padding-top:26px;border-top:1px solid #E5E2DA}
.agd-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.agd h2{font-size:17px;margin:0;letter-spacing:-.01em;color:#1a1a1a}
.agd-n{font-size:12px;color:#8a8a8a;font-variant-numeric:tabular-nums}
.agd-lead{font-size:13px;color:#666;margin:6px 0 16px;max-width:640px}
.agd-tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:10px}
.agd-q{flex:1;min-width:180px;padding:8px 12px;border:1px solid #E5E2DA;border-radius:8px;
  font-size:13.5px;background:#fff;font-family:inherit;color:#1a1a1a}
.agd-q:focus{outline:none;border-color:#1a1a1a}
.agd-count{font-size:12.5px;color:#8a8a8a;white-space:nowrap}
.agd-facets{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:14px;max-height:88px;overflow-y:auto}
.agd-f{border:1px solid #E5E2DA;background:#fff;color:#666;font-size:11.5px;padding:3px 10px;
  border-radius:12px;cursor:pointer;font-family:inherit}
.agd-f:hover{border-color:#2563EB;color:#2563EB}
.agd-f.on{background:#2563EB;border-color:#2563EB;color:#fff}
.agd-list{list-style:none;margin:0;padding:0;background:#fff;border:1px solid #E5E2DA;border-radius:10px}
.agd-item{border-bottom:1px solid #E5E2DA}
.agd-item:last-child{border-bottom:none}
.agd-item.agd-hide{display:none}
.agd-item summary{padding:11px 16px;cursor:pointer;display:flex;gap:12px;align-items:baseline;
  justify-content:space-between;font-size:14px;font-weight:600;color:#1a1a1a;letter-spacing:-.01em}
.agd-item summary:hover{background:#FAFAF7}
.agd-item summary::marker{color:#8a8a8a}
.agd-item details[open] summary{color:#2563EB}
.agd-d{font-size:11.5px;color:#8a8a8a;font-weight:400;font-variant-numeric:tabular-nums;white-space:nowrap}
.agd-body{padding:0 16px 14px 34px}
.agd-s{font-size:13px;color:#666;margin:0 0 8px}
.agd-qs{margin:0;padding-left:18px;font-size:13px;color:#1a1a1a}
.agd-qs li{margin-bottom:3px}
.agd-tags{margin-top:9px}
.agd-pill{display:inline-block;background:#EEF2FF;color:#2563EB;font-size:11px;
  padding:2px 8px;border-radius:10px;margin:0 4px 4px 0}
.agd-empty{padding:26px 16px;text-align:center;color:#8a8a8a;font-size:13.5px;display:none}
@media(max-width:600px){.agd-body{padding-left:16px}.agd-d{display:none}}
</style>`;

const SCRIPT = `<script>
(function(){
  var root=document.currentScript.previousElementSibling;
  while(root&&!root.classList.contains('agd'))root=root.previousElementSibling;
  if(!root)return;
  var items=[].slice.call(root.querySelectorAll('.agd-item'));
  var q=root.querySelector('.agd-q');
  var count=root.querySelector('.agd-count');
  var empty=root.querySelector('.agd-empty');
  var on={};
  function render(){
    var term=q.value.trim().toLowerCase();
    var tags=Object.keys(on);
    var n=0;
    items.forEach(function(li){
      var ok=(!term||li.dataset.k.indexOf(term)>-1);
      if(ok)for(var i=0;i<tags.length;i++)
        if((' '+li.dataset.t+' ').indexOf(' '+tags[i]+' ')<0){ok=false;break;}
      li.classList.toggle('agd-hide',!ok);
      if(ok)n++;
    });
    count.textContent=n+' / '+items.length+' 件';
    empty.style.display=n?'none':'block';
  }
  root.querySelector('.agd-facets').addEventListener('click',function(e){
    var b=e.target.closest('.agd-f');if(!b)return;
    if(on[b.dataset.t])delete on[b.dataset.t];else on[b.dataset.t]=1;
    b.classList.toggle('on',!!on[b.dataset.t]);
    render();
  });
  q.addEventListener('input',render);
  render();
})();
</script>`;

function buildAgenda(items) {
  const questions = items.reduce((n, e) => n + (e.questions ?? []).length, 0);

  const counts = {};
  for (const e of items) for (const t of e.tags ?? []) counts[t] = (counts[t] ?? 0) + 1;
  const facets = Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a] || a.localeCompare(b, 'ja'))
    .map((t) => `<button class="agd-f" data-t="${esc(t)}">${esc(t)} <span style="opacity:.6">${counts[t]}</span></button>`)
    .join('');

  const rows = items
    .map((e) => {
      // One lowercased haystack per item so the filter never touches the DOM text.
      const hay = [e.title, e.summary, ...(e.questions ?? []), ...(e.tags ?? [])]
        .join(' ')
        .toLowerCase();
      return `      <li class="agd-item" data-k="${esc(hay)}" data-t="${esc((e.tags ?? []).join(' '))}">
        <details>
          <summary><span>${esc(e.title)}</span><span class="agd-d">${esc(e.date ?? '')}</span></summary>
          <div class="agd-body">
            <p class="agd-s">${esc(e.summary)}</p>
            <ul class="agd-qs">${(e.questions ?? []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            <div class="agd-tags">${(e.tags ?? []).map((t) => `<span class="agd-pill">${esc(t)}</span>`).join('')}</div>
          </div>
        </details>
      </li>`;
    })
    .join('\n');

  // A section whose questions have all been answered still keeps its markers, so
  // the next batch lands without touching the page. Until then, printing the
  // search box and facet row over an empty list reads as broken rather than done.
  if (!items.length) {
    return `${START}
${STYLE}
<section class="agd">
  <div class="agd-head">
    <h2>未着手の論点</h2>
    <span class="agd-n">0 論点</span>
  </div>
  <p class="agd-lead">積み上がっていた論点はすべて章にした。次に読んだもの・聞いた話からまた溜まる。</p>
</section>
${END}`;
  }

  return `${START}
${STYLE}
<section class="agd">
  <div class="agd-head">
    <h2>未着手の論点</h2>
    <span class="agd-n">${items.length} 論点 / ${questions} 問い</span>
  </div>
  <p class="agd-lead">読んだもの・聞いた話から積み上がった、まだ手をつけていない問い。答えの出せる形まで割ってある。</p>
  <div class="agd-tools">
    <input class="agd-q" placeholder="論点・問い・タグを検索">
    <span class="agd-count"></span>
  </div>
  <div class="agd-facets">${facets}</div>
  <ol class="agd-list">
${rows}
  </ol>
  <p class="agd-empty">該当なし。</p>
</section>
${SCRIPT}
${END}`;
}

// ─── walk ────────────────────────────────────────────────────────────────────

async function* agendaFiles(dir = ROOT) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) yield* agendaFiles(abs);
    else if (e.name === 'agenda.json' && path.basename(dir) === 'data') yield abs;
  }
}

let changed = 0;
let broken = 0;
let total = 0;
let items = 0;

for await (const abs of agendaFiles()) {
  const section = path.dirname(path.dirname(abs));
  const indexAbs = path.join(section, 'index.html');
  const label = path.relative(ROOT, section).split(path.sep).join('/');
  total++;

  const data = JSON.parse(await readFile(abs, 'utf8'));
  for (const e of data) {
    if (!e.title || !e.date || !e.summary) {
      console.error(`  BAD ENTRY        ${label} — ${e.title ?? '(no title)'}`);
      broken++;
    }
  }
  data.sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')));
  items += data.length;

  let src;
  try {
    src = await readFile(indexAbs, 'utf8');
  } catch {
    console.error(`  NO INDEX         ${label}`);
    broken++;
    continue;
  }

  const i = src.indexOf(START);
  const j = src.indexOf(END);
  if (i === -1 || j === -1 || j < i) {
    console.error(`  MISSING MARKERS  ${label}/index.html`);
    broken++;
    continue;
  }

  const next = src.slice(0, i) + buildAgenda(data) + src.slice(j + END.length);
  if (next === src) continue;

  changed++;
  if (CHECK) console.error(`  WOULD CHANGE     ${label}/index.html`);
  else {
    await writeFile(abs, JSON.stringify(data, null, 2) + '\n');
    await writeFile(indexAbs, next);
    console.log(`  updated          ${label}  (${data.length})`);
  }
}

const mode = CHECK ? 'check' : 'build';
console.log(`\nagenda ${mode}: ${total} sections, ${items} items, ${changed} ${CHECK ? 'stale' : 'updated'}`);

if (broken > 0) {
  console.error('\nA section with data/agenda.json needs `<!-- agenda:start --><!-- agenda:end -->` in its index.html.');
  process.exit(1);
}
if (CHECK && changed > 0) {
  console.error('\nRun `node _tools/build-agenda.mjs` and commit the result.');
  process.exit(1);
}
