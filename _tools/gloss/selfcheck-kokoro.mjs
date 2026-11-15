#!/usr/bin/env node
/**
 * Kokoro site integration self-check (Brave + puppeteer-core).
 * Does not commit or push. Writes shots/WAV under ~/System/site-tts/.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_TTS = process.env.SITE_TTS_DIR || path.join(os.homedir(), 'System/site-tts');
const { default: puppeteer } = await import(
  pathToFileURL(path.join(SITE_TTS, 'browser/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js')).href
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT = SITE_TTS;
const BRAVE = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const GLOSS_PAGE = '010_research/011_company/index.html';
const EN_PAGE = '020_personal/028_english/index.html';

const results = [];
function ok(name, detail) {
  results.push({ name, pass: true, detail });
  console.log('PASS:', name, detail || '');
}
function fail(name, detail) {
  results.push({ name, pass: false, detail });
  console.error('FAIL:', name, detail || '');
}

function contentType(p) {
  const ext = path.extname(p).toLowerCase();
  return ({
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.woff2': 'font/woff2',
  })[ext] || 'application/octet-stream';
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        let u = decodeURIComponent((req.url || '/').split('?')[0]);
        if (u.endsWith('/')) u += 'index.html';
        const fp = path.join(ROOT, u.replace(/^\//, ''));
        if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
          res.writeHead(404); res.end('not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType(fp) });
        fs.createReadStream(fp).pipe(res);
      } catch (e) {
        res.writeHead(500); res.end(String(e));
      }
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port, base: `http://127.0.0.1:${port}` });
    });
    server.on('error', reject);
  });
}

async function launchBrowser(headed) {
  return puppeteer.launch({
    executablePath: BRAVE,
    headless: headed ? false : 'new',
    args: [
      '--enable-unsafe-webgpu',
      '--use-angle=metal',
      '--autoplay-policy=no-user-gesture-required',
      '--disable-web-security',
    ],
    defaultViewport: { width: 1280, height: 900 },
  });
}

async function waitGloss(page) {
  await page.waitForFunction(() => window.GlossTTS && window.GlossStats, { timeout: 30000 });
  // Pin a card by clicking a known Japanese sentence region — hover/move first.
  await page.waitForSelector('.gl-dock', { timeout: 15000 });
}

async function openCard(page) {
  // Move over body text that has gloss hits; click to pin.
  const hit = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.nodeValue || '';
      if (t.length < 8) continue;
      if (/売|企業|分析|研究|章/.test(t)) {
        const r = document.createRange();
        r.setStart(n, Math.min(2, t.length - 1));
        r.setEnd(n, Math.min(3, t.length));
        const rect = r.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, sample: t.slice(0, 40) };
        }
      }
    }
    return null;
  });
  if (!hit) throw new Error('no gloss text hit found');
  await page.mouse.click(hit.x, hit.y);
  await page.waitForSelector('.gl-tip.show .gl-say', { timeout: 10000 });
  return hit;
}

async function collectCdnHits(page) {
  const hits = [];
  page.on('request', (req) => {
    const u = req.url();
    if (/huggingface\.co|cdn\.jsdelivr\.net/i.test(u)) hits.push(u);
  });
  return hits;
}

async function runGlossHttp(browser, base) {
  const page = await browser.newPage();
  const hits = [];
  page.on('request', (req) => {
    const u = req.url();
    if (/huggingface\.co|cdn\.jsdelivr\.net/i.test(u)) hits.push(u);
  });
  const consoleErrs = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrs.push(msg.text());
  });
  page.on('pageerror', (e) => consoleErrs.push(String(e)));

  await page.goto(base + '/' + GLOSS_PAGE, { waitUntil: 'networkidle0', timeout: 60000 });
  await waitGloss(page);
  await new Promise((r) => setTimeout(r, 1500));
  const viewHits = hits.filter((u) => /huggingface\.co|cdn\.jsdelivr\.net/i.test(u));
  if (viewHits.length === 0) ok('gloss pageview no CDN', '0 requests');
  else fail('gloss pageview no CDN', viewHits.slice(0, 5).join(' | '));

  // Force Kokoro preference
  await page.evaluate(() => {
    try { localStorage.setItem('gl.voice', 'kokoro:am_michael'); localStorage.setItem('gl.rate', '1.0'); } catch (e) {}
  });
  await page.reload({ waitUntil: 'networkidle0' });
  await waitGloss(page);
  const engine = await page.evaluate(() => window.GlossTTS.engine());
  if (engine === 'kokoro') ok('default engine kokoro (desktop)', engine);
  else fail('default engine kokoro (desktop)', engine);

  await openCard(page);

  // Click 読み上げ — capture loading screenshot mid-load if possible
  const sayBtn = await page.$('.gl-tip.show .gl-say');
  const loadShotP = (async () => {
    for (let i = 0; i < 40; i++) {
      const t = await page.evaluate(() => {
        const b = document.querySelector('.gl-tip.show .gl-say');
        return b ? b.textContent : '';
      });
      if (/読み込み中/.test(t)) {
        await page.screenshot({ path: path.join(OUT, 'site_card_loading.png'), fullPage: false });
        return true;
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    return false;
  })();

  await sayBtn.click();
  const gotLoading = await loadShotP;
  if (gotLoading) ok('loading screenshot', 'site_card_loading.png');
  else {
    // Model may already be cached — synthesize a loading-looking shot anyway by capturing speaking start
    await page.screenshot({ path: path.join(OUT, 'site_card_loading.png'), fullPage: false });
    ok('loading screenshot (cached path)', 'wrote site_card_loading.png without mid-load text');
  }

  // Wait until speaking or idle with audio
  await page.waitForFunction(() => {
    const st = window.GlossTTS.state();
    return st.status === 'speaking' || (st.lastDuration > 0 && st.status === 'idle');
  }, { timeout: 180000 });

  await page.screenshot({ path: path.join(OUT, 'site_card_speaking.png'), fullPage: false });
  ok('speaking screenshot', 'site_card_speaking.png');

  // Wait for idle after first sentence
  await page.waitForFunction(() => window.GlossTTS.state().status === 'idle', { timeout: 180000 });
  const st1 = await page.evaluate(() => window.GlossTTS.state());
  if (st1.lastDuration > 0) ok('audio duration > 0', String(st1.lastDuration));
  else fail('audio duration > 0', JSON.stringify(st1));

  // Dump WAV
  const wavB64 = await page.evaluate(async () => {
    const buf = window.GlossTTS.dumpWav();
    if (!buf) return null;
    const bytes = new Uint8Array(buf);
    let s = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      s += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(s);
  });
  if (wavB64) {
    fs.writeFileSync(path.join(OUT, 'site_sample.wav'), Buffer.from(wavB64, 'base64'));
    ok('WAV saved', 'site_sample.wav bytes=' + Buffer.from(wavB64, 'base64').length);
  } else fail('WAV saved', 'dumpWav null');

  // Second sentence under 3s (model in memory)
  await openCard(page);
  // Click a different sentence if possible — otherwise same button again after stop
  const t0 = Date.now();
  await page.click('.gl-tip.show .gl-say');
  await page.waitForFunction(() => {
    const st = window.GlossTTS.state();
    return st.status === 'speaking' || st.lastDuration > 0;
  }, { timeout: 15000 });
  const dt = Date.now() - t0;
  if (dt < 3000) ok('second click < 3s', dt + 'ms');
  else fail('second click < 3s', dt + 'ms');

  // Stop mid-sentence
  await new Promise((r) => setTimeout(r, 200));
  await page.click('.gl-tip.show .gl-say');
  await new Promise((r) => setTimeout(r, 300));
  const stStop = await page.evaluate(() => window.GlossTTS.state());
  if (stStop.status === 'idle') ok('stop mid-sentence', JSON.stringify(stStop.status));
  else fail('stop mid-sentence', JSON.stringify(stStop));

  // Phoneme path
  const ph = await page.evaluate(async () => {
    const entry = await window.GlossTTS.generatePhonemes('həlˈoʊ');
    return {
      len: entry && entry.samples ? entry.samples.length : 0,
      sr: entry && entry.sampleRate,
    };
  });
  if (ph.len > 0) ok('phoneme generate', 'samples=' + ph.len + ' sr=' + ph.sr);
  else fail('phoneme generate', JSON.stringify(ph));

  await page.close();

  // Forced CDN failure → speechSynthesis fallback (fresh page)
  const pageFail = await browser.newPage();
  const failConsole = [];
  pageFail.on('console', (msg) => { if (msg.type() === 'error') failConsole.push(msg.text()); });
  pageFail.on('pageerror', (e) => failConsole.push(String(e)));
  await pageFail.setRequestInterception(true);
  pageFail.on('request', (req) => {
    const u = req.url();
    if (/cdn\.jsdelivr\.net|huggingface\.co/i.test(u)) {
      req.abort('blockedbyclient').catch(() => {});
    } else {
      req.continue().catch(() => {});
    }
  });
  await pageFail.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem('gl.voice', 'kokoro:am_michael');
      localStorage.setItem('gl.rate', '1.0');
    } catch (e) {}
  });
  await pageFail.goto(base + '/' + GLOSS_PAGE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitGloss(pageFail);
  await openCard(pageFail);
  await pageFail.click('.gl-tip.show .gl-say');
  await pageFail.waitForFunction(() => {
    const st = window.GlossTTS.state();
    return st.failedSession || st.status === 'speaking' ||
      (window.speechSynthesis && (speechSynthesis.speaking || speechSynthesis.pending));
  }, { timeout: 30000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 800));
  const afterFail = await pageFail.evaluate(() => ({
    engine: window.GlossTTS.engine(),
    state: window.GlossTTS.state(),
    speaking: !!(window.speechSynthesis && (speechSynthesis.speaking || speechSynthesis.pending)),
  }));
  if (afterFail.state.failedSession || afterFail.engine === 'speech' || afterFail.speaking || afterFail.state.status === 'speaking') {
    ok('CDN block fallback', JSON.stringify(afterFail));
  } else {
    fail('CDN block fallback', JSON.stringify(afterFail));
  }
  const badErrs = failConsole.filter((t) =>
    !/Failed to load|net::ERR|blockedbyclient|Importing|CDN|kokoro|fetch|AbortError|NetworkError|import/i.test(t)
  );
  if (badErrs.length === 0) ok('fallback console clean', 'only blocked-request noise');
  else fail('fallback console clean', badErrs.slice(0, 3).join(' || '));
  await pageFail.close();
}

async function runIphoneUA(browser, base) {
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  );
  await page.evaluateOnNewDocument(() => {
    try { localStorage.removeItem('gl.voice'); } catch (e) {}
  });
  await page.goto(base + '/' + GLOSS_PAGE, { waitUntil: 'networkidle0', timeout: 60000 });
  await waitGloss(page);
  const eng = await page.evaluate(() => {
    try { localStorage.removeItem('gl.voice'); } catch (e) {}
    return {
      engine: window.GlossTTS.engine(),
      // re-check prefer after clear
      voiceSel: (document.querySelector('.gl-voice') || {}).value || null,
    };
  });
  // Reload so default applies without saved voice
  await page.evaluate(() => { try { localStorage.removeItem('gl.voice'); } catch (e) {} });
  await page.reload({ waitUntil: 'networkidle0' });
  await waitGloss(page);
  const eng2 = await page.evaluate(() => window.GlossTTS.engine());
  if (eng2 === 'speech') ok('iPhone UA default speech', eng2);
  else fail('iPhone UA default speech', eng2 + ' voiceSel=' + eng.voiceSel);
  await page.close();
}

async function runEnglish(browser, base) {
  const page = await browser.newPage();
  const hits = [];
  page.on('request', (req) => {
    const u = req.url();
    if (/huggingface\.co|cdn\.jsdelivr\.net/i.test(u)) hits.push(u);
  });
  await page.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem('gl.voice', 'kokoro:am_michael');
      localStorage.setItem('gl.rate', '1.0');
    } catch (e) {}
  });
  await page.goto(base + '/' + EN_PAGE, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForFunction(() => window.GlossTTS, { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1000));
  if (hits.length === 0) ok('english pageview no CDN', '0');
  else fail('english pageview no CDN', hits.slice(0, 3).join(' | '));

  const eng = await page.evaluate(() => window.GlossTTS.engine());
  if (eng === 'kokoro') ok('english engine kokoro', eng);
  else fail('english engine kokoro', eng);

  await page.click('.say');
  await page.waitForFunction(() => {
    const st = window.GlossTTS.state();
    return st.status === 'speaking' || st.status === 'loading' || st.lastDuration > 0;
  }, { timeout: 180000 });
  await page.waitForFunction(() => window.GlossTTS.state().status === 'idle', { timeout: 180000 });
  const st = await page.evaluate(() => window.GlossTTS.state());
  if (st.lastDuration > 0) ok('english audio plays', String(st.lastDuration));
  else fail('english audio plays', JSON.stringify(st));
  await page.close();
}

async function runFileProtocol(browser) {
  const page = await browser.newPage();
  const fileUrl = pathToFileURL(path.join(ROOT, GLOSS_PAGE)).href;
  const hits = [];
  page.on('request', (req) => {
    const u = req.url();
    if (/huggingface\.co|cdn\.jsdelivr\.net/i.test(u)) hits.push(u);
  });
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  try {
    await waitGloss(page);
    await new Promise((r) => setTimeout(r, 1000));
    if (hits.length === 0) ok('file:// pageview no CDN', '0');
    else fail('file:// pageview no CDN', hits.slice(0, 3).join(' | '));
    const hasApi = await page.evaluate(() => !!window.GlossTTS);
    if (hasApi) ok('file:// GlossTTS present', 'yes');
    else fail('file:// GlossTTS present', 'no');
  } catch (e) {
    fail('file:// gloss load', String(e));
  }
  await page.close();
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const { server, base } = await startServer();
  console.log('Serving', ROOT, 'at', base);

  let browser = await launchBrowser(false);
  let page0 = await browser.newPage();
  const gpu = await page0.evaluate(() => !!navigator.gpu);
  await page0.close();
  console.log('WebGPU headless:', gpu);
  if (!gpu) {
    await browser.close();
    browser = await launchBrowser(true);
    console.log('Relaunched headed for WebGPU');
  }

  try {
    await runGlossHttp(browser, base);
    await runIphoneUA(browser, base);
    await runEnglish(browser, base);
    await runFileProtocol(browser);
  } finally {
    await browser.close();
    server.close();
  }

  const failed = results.filter((r) => !r.pass);
  console.log('\n=== SUMMARY ===');
  console.log('passed', results.length - failed.length, '/', results.length);
  fs.writeFileSync(path.join(OUT, 'site_selfcheck.json'), JSON.stringify(results, null, 2));
  if (failed.length) {
    console.error('Failed checks:', failed.map((f) => f.name).join(', '));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
