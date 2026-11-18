import fs from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const indexPath = path.join(root, 'index.html');

// The home page directory list is intentionally kept as the source of truth here.
const sections = [
  ['010', 'Research', [
    ['011', 'company', '企業分析とスタートアップ事例', '010_research/011_company/index.html'],
    ['012', 'politics', '戦後総理37人のキャリアパス', '010_research/012_politics/index.html'],
    ['013', 'geo', '渡航した国と国内都市の統計プロファイル', '010_research/013_geo/index.html'],
    ['014', 'industry', '半導体・電力・素材の市場構造', '010_research/014_industry/index.html'],
    ['015', 'net', '動画・記事・ポッドキャストの整文と分析', '010_research/015_net/index.html'],
    ['016', 'finance', '市場・資本・マクロ', '010_research/016_finance/index.html'],
    ['017', 'science', '数学・物理・生命', '010_research/017_science/index.html'],
    ['018', 'computing', '計算とソフトウェアの層構造', '010_research/018_computing/index.html'],
    ['019', 'people', '一人の人生の年表と数字', '010_research/019_people/index.html'],
  ]],
  ['030', 'Ideas', [
    ['031', 'frontier trading', '新フロンティア技術の商社構想', '030_ideas/031_frontier_trading/index.html'],
    ['032', 'evacsim', '建物の避難動線シミュレーター', '030_ideas/032_evacsim/index.html'],
    ['033', 'minhaya llm', 'みんはや型クイズの LLM native 構想', '030_ideas/033_minhaya_llm/index.html'],
    ['034', 'foundation', '財団プロジェクト：設立者の事例と設計', '030_ideas/034_foundation/index.html'],
    ['035', 'ventures', '50年を賭ける事業の候補と深掘り', '030_ideas/035_ventures/index.html'],
    ['036', 'vision2056', '次のすべての机に', '030_ideas/036_vision2056/index.html'],
  ]],
  ['020', 'Personal', [
    ['021', 'profile', '経歴と受賞', '020_personal/021_profile/index.html'],
    ['026', 'handbook', '久保田翔己 取扱説明書', '020_personal/026_handbook/index.html'],
    ['023', 'travel', '走った道の記録', '020_personal/023_travel/index.html'],
    ['024', 'method', '思考の型', '020_personal/024_method/index.html'],
    ['025', 'fitness', 'トレーニングと食事の記録', '020_personal/025_fitness/index.html'],
    ['027', 'cinema', '観る前の予習と、観た後の考察', '020_personal/027_cinema/index.html'],
    ['029', 'mental math', '仕事で使う掛け算の反復練習', '020_personal/029_mental_math/index.html'],
    ['02A', 'plan', '0歳から100歳までの年表', '020_personal/02A_plan/index.html'],
    ['02B', 'reading', '本と論考の読書ノート', '020_personal/02B_reading/index.html'],
    ['02C', 'chemistry', '化学基礎の教科書', '020_personal/02C_chemistry/index.html'],
    ['02D', 'probability', '確率・統計の教科書', '020_personal/02D_probability/index.html'],
    ['02E', 'calculus', '微分積分の教科書', '020_personal/02E_calculus/index.html'],
    ['02F', 'linear algebra', 'ベクトルと線形代数の教科書', '020_personal/02F_linear_algebra/index.html'],
    ['02G', 'physics', '物理の教科書', '020_personal/02G_physics/index.html'],
    ['02H', 'heidegger', '『存在と時間』の教科書', '020_personal/02H_heidegger/index.html'],
    ['02I', 'quiz', 'サイトの全ページから出題する早押しクイズ', '020_personal/02I_quiz/index.html'],
    ['02J', 'geography', '地理総合と地理探究の教科書', '020_personal/02J_geography/index.html'],
    ['02K', 'world history', '歴史総合と世界史探究の教科書', '020_personal/02K_world_history/index.html'],
    ['02L', 'sales note', 'tl;dvの商談録画から学ぶ営業ノート（ログインが必要）', '020_personal/02L_sales/index.html'],
  ]],
];

// Pages kept out of the random pick. Their text passes leak-check only through a
// per-file exception, and copying it into picks.json would create a new hit.
const PICK_SKIP = new Set(['010_research/016_finance/ma_contract_japan.html']);
const raster = /\.(?:jpe?g|png|webp)$/i;
const ignoredDirs = new Set(['img', 'data', 'node_modules']);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cleanText = (s) => String(s || '').replace(/\s+/g, ' ').trim();
function filesUnder(dir, predicate = () => true) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory() && (ignoredDirs.has(ent.name) || ent.name.startsWith('_'))) continue;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...filesUnder(abs, predicate));
    else if (predicate(abs, ent.name)) out.push(abs);
  }
  return out.sort();
}
function localImages(doc, htmlFile) {
  const base = path.dirname(htmlFile);
  return [...doc.querySelectorAll('img')].map((img) => img.getAttribute('src') || '')
    .filter((src) => raster.test(src) && !/^(?:https?:|data:|\/\/)/i.test(src))
    .map((src) => ({ src, abs: path.resolve(base, src) }))
    .filter(({ abs }) => fs.existsSync(abs));
}
function firstImage(htmlFile) {
  const doc = parseHTML(fs.readFileSync(htmlFile, 'utf8')).document;
  const imgs = localImages(doc, htmlFile);
  return imgs.find(({ src }) => !/(?:^|\/)(?:icon|logo|favicon|avatar)[^/]*$/i.test(src)) || imgs[0] || null;
}
function sectionImage(sectionDir, indexFile) {
  const fromIndex = firstImage(indexFile);
  if (fromIndex) return fromIndex;
  const imgDir = path.join(sectionDir, 'img');
  const fallback = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter((name) => raster.test(name) && !/(?:icon|logo|favicon|avatar)/i.test(name)).sort()[0] : null;
  return fallback ? { abs: path.join(imgDir, fallback) } : null;
}
function pageCount(sectionDir) { return filesUnder(sectionDir, (p) => p.endsWith('.html')).length; }
function updated(sectionDir) {
  // Date a page was last added, not last touched. Site-wide nav and gloss
  // rebuilds rewrite every file, so the last-commit date marks every section NEW.
  try { return execFileSync('git', ['log', '-1', '--diff-filter=A', '--format=%cs', '--', path.relative(root, sectionDir) + '/*.html', path.relative(root, sectionDir) + '/**/*.html'], { cwd: root, encoding: 'utf8' }).trim() || ''; }
  catch { return ''; }
}
// Card photos come from Wikimedia Commons; the licenses need attribution on
// every page that shows them, including this one.
const credits = [];
function noteCredit(abs) {
  const file = path.join(path.dirname(abs), '_credits.json');
  if (!fs.existsSync(file)) return;
  const c = JSON.parse(fs.readFileSync(file, 'utf8'))[path.basename(abs)];
  if (c) credits.push(c);
}
function sectionCard([num, name, desc, href], group) {
  const sectionDir = path.dirname(path.join(root, href));
  const image = sectionImage(sectionDir, path.join(root, href));
  const imageSrc = image ? path.relative(root, image.abs).split(path.sep).join('/') : '';
  if (image) noteCredit(image.abs);
  const count = pageCount(sectionDir);
  const date = updated(sectionDir);
  return `<a class="home-card" href="${esc(href)}" data-updated="${esc(date)}"><span class="home-card-media">${image ? `<img src="${esc(imageSrc)}" alt="" loading="lazy" width="800" height="600">` : `<span class="home-card-fallback" aria-hidden="true">${esc(num)}</span>`}</span><span class="home-card-body"><span class="home-card-title"><span class="home-card-num">${esc(num)}</span><span>${esc(name)}</span></span><span class="home-card-desc">${esc(desc)}</span><span class="home-card-pages">${count}ページ</span></span></a>`;
}
const cards = sections.map(([num, group, items]) => `<section class="home-section"><div class="home-section-heading"><span class="home-section-num">${num}</span><h2>${group}</h2></div><div class="home-grid">${items.map((item) => sectionCard(item, group)).join('')}</div></section>`).join('\n')
  + `\n<details class="home-credits"><summary>写真のクレジット</summary><ul>${credits.map((c) => `<li><a href="${esc(c.page)}" target="_blank" rel="noopener">${esc(c.title.replace(/^File:/, ''))}</a> / ${esc(c.artist || 'Wikimedia Commons')} / ${esc(c.license)}</li>`).join('')}</ul></details>`;
const html = fs.readFileSync(indexPath, 'utf8');
const start = '<!-- home:start -->';
const end = '<!-- home:end -->';
if (!html.includes(start) || !html.includes(end)) throw new Error('home markers not found');
const replaced = html.slice(0, html.indexOf(start) + start.length) + '\n' + cards + '\n' + html.slice(html.indexOf(end));
fs.writeFileSync(indexPath, replaced);

const picks = [];
for (const [num, group, items] of sections) {
  for (const [, , , href] of items) {
    const dir = path.dirname(path.join(root, href));
    for (const file of filesUnder(dir, (p) => p.endsWith('.html'))) {
      const doc = parseHTML(fs.readFileSync(file, 'utf8')).document;
      const title = cleanText(doc.querySelector('title')?.textContent);
      const image = firstImage(file);
      if (!title || !image || PICK_SKIP.has(path.relative(root, file).split(path.sep).join('/'))) continue;
      const meta = doc.querySelector('meta[name="description"]')?.getAttribute('content');
      // Use the first real sentence. Short <p> blocks are usually tag rows,
      // which read as a run of keywords on the card.
      const firstP = [...doc.querySelectorAll('p')].map((p) => cleanText(p.textContent)).find((t) => t.length >= 30 && t.includes('。') && !/出典照合|この資料は|この記事は/.test(t));
      const desc = cleanText(meta || firstP || '').slice(0, 60);
      picks.push({ url: path.relative(root, file).split(path.sep).join('/'), title, section: group, img: path.relative(root, image.abs).split(path.sep).join('/'), desc });
    }
  }
}
fs.mkdirSync(path.join(root, '_home'), { recursive: true });
fs.writeFileSync(path.join(root, '_home/picks.json'), JSON.stringify(picks, null, 2) + '\n');
console.log(`home: ${sections.flatMap(([, , items]) => items).length} sections, ${picks.length} picks`);
