#!/usr/bin/env node
// Generates glosses for every sentence in work/sentences.jsonl that has no
// cache entry yet. Calls `claude -p` in parallel lanes; each batch appends to
// cache/<lane>.jsonl, so a crash or rate limit loses at most one batch per lane.
//
//   node _tools/gloss/gen.mjs [--lanes 6] [--batch 50] [--model sonnet] [--limit N]

import { readFile, appendFile, mkdir, readdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, '_tools/gloss');
const CACHE = path.join(DIR, 'cache');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const LANES = +arg('--lanes', 6);
const BATCH = +arg('--batch', 50);
const MODEL = arg('--model', 'sonnet');
const LIMIT = +arg('--limit', Infinity);
// --engine cursor runs the same prompt through Cursor CLI, which has its own quota.
const ENGINE = arg('--engine', 'claude');
// --from 0.5 starts halfway through the list, for a third run between the other two.
const FROM = +arg('--from', 0);

await mkdir(CACHE, { recursive: true });
const TEMPLATE = await readFile(path.join(DIR, 'prompt.md'), 'utf8');

export async function loadCache() {
  const done = new Map();
  for (const f of await readdir(CACHE)) {
    if (!f.endsWith('.jsonl')) continue;
    for (const line of (await readFile(path.join(CACHE, f), 'utf8')).split('\n')) {
      if (!line) continue;
      try { const r = JSON.parse(line); done.set(r.k, r); } catch {}
    }
  }
  return done;
}

const done = await loadCache();
const all = (await readFile(path.join(DIR, 'work/sentences.jsonl'), 'utf8')).trim().split('\n').map((l) => JSON.parse(l));
const todo = all.filter((s) => !done.has(s.k)).slice(0, LIMIT);
console.log(`cached ${done.size}, todo ${todo.length}, lanes ${LANES}, batch ${BATCH}, model ${MODEL}`);

// Batches stay within one page so the title gives useful context.
const batches = [];
let cur = [];
for (const s of todo) {
  if (cur.length && (cur.length >= BATCH || cur[0].p !== s.p)) { batches.push(cur); cur = []; }
  cur.push(s);
}
if (cur.length) batches.push(cur);
// --reverse lets a second run work from the end, so two runs meet in the middle.
if (process.argv.includes('--reverse')) batches.reverse();
if (FROM) batches.splice(0, Math.floor(batches.length * FROM));
const TAG = (process.argv.includes('--reverse') ? 'r' : '') + (ENGINE === 'cursor' ? 'c' : '') + (FROM ? 'm' : '');

function claude(prompt) {
  if (ENGINE === 'cursor') return cursor(prompt);
  return new Promise((resolve, reject) => {
    const env = { ...process.env };
    delete env.ANTHROPIC_API_KEY;
    const p = spawn('claude', ['-p', '--model', MODEL, '--output-format', 'text', '--tools', '',
      '--strict-mcp-config', '--no-session-persistence', '--setting-sources', '',
      '--system-prompt', 'You write English learning glosses. Output JSON lines only.'],
      { env, cwd: os.tmpdir(), stdio: ['pipe', 'pipe', 'pipe'] });
    let out = '', err = '';
    const t = setTimeout(() => p.kill('SIGKILL'), 15 * 60 * 1000);
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => { clearTimeout(t); code === 0 ? resolve(out) : reject(new Error(`exit ${code}: ${(err || out).slice(0, 300)}`)); });
    p.stdin.end(prompt);
  });
}

function cursor(prompt) {
  return new Promise((resolve, reject) => {
    const p = spawn('cursor-agent', ['-p', '--trust', '--model', MODEL, '--output-format', 'text', '--workspace', os.tmpdir(), prompt],
      { cwd: os.tmpdir(), stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '', err = '';
    const t = setTimeout(() => p.kill('SIGKILL'), 15 * 60 * 1000);
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => { clearTimeout(t); code === 0 ? resolve(out) : reject(new Error(`exit ${code}: ${(err || out).slice(0, 300)}`)); });
  });
}

// Keeps only items whose jp is a real substring, and stores it as an offset so
// the data files never repeat the page's Japanese text.
function clean(s, r) {
  const e = typeof r.e === 'string' ? r.e.replace(/\s*—\s*/g, ', ').trim() : '';
  const x = [];
  for (const it of Array.isArray(r.x) ? r.x : []) {
    if (!Array.isArray(it) || typeof it[0] !== 'string' || typeof it[1] !== 'string') continue;
    const at = s.t.indexOf(it[0]);
    if (at < 0 || !it[0] || !it[1].trim()) continue;
    const type = ['i', 'p', 'w'].includes(it[2]) ? it[2] : 'w';
    x.push([at, it[0].length, it[1].trim(), type, typeof it[3] === 'string' ? it[3].trim() : '']);
  }
  return { k: s.k, t: s.t, e, x };
}

// True when another run already wrote this batch.
async function taken(b) {
  const fresh = await loadCache();
  return b.every((s) => fresh.has(s.k));
}

let next = 0, ok = 0, bad = 0, fails = 0;
const t0 = Date.now();
async function lane(id) {
  const file = path.join(CACHE, `lane${TAG}${id}.jsonl`);
  while (next < batches.length) {
    const b = batches[next++];
    if (await taken(b)) { console.log(`lane${TAG}${id} meets the other run, stopping`); next = batches.length; break; }
    const prompt = TEMPLATE.replace('{{TITLE}}', b[0].title || b[0].p)
      .replace('{{LINES}}', b.map((s, i) => `${i}\t${s.t}`).join('\n'));
    let text;
    for (let attempt = 0; ; attempt++) {
      try { text = await claude(prompt); break; } catch (e) {
        fails++;
        const wait = /limit|429|overloaded|rate/i.test(e.message) ? 10 * 60 * 1000 : 30 * 1000;
        console.error(`lane${id} retry ${attempt}: ${e.message.slice(0, 160)}`);
        if (attempt >= 20) { console.error(`lane${id} gives up a batch`); text = ''; break; }
        await new Promise((r) => setTimeout(r, wait));
      }
    }
    const rows = [];
    for (const line of text.split('\n')) {
      const m = line.match(/\{.*\}/);
      if (!m) continue;
      try {
        const r = JSON.parse(m[0]);
        const s = b[r.i];
        if (s && r.e) rows.push(clean(s, r));
      } catch {}
    }
    ok += rows.length; bad += b.length - rows.length;
    if (rows.length) await appendFile(file, rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
    const rate = ok / ((Date.now() - t0) / 1000);
    console.log(`lane${id} batch ${next}/${batches.length} +${rows.length}/${b.length}  total ${ok} miss ${bad}  ${rate.toFixed(1)}/s  eta ${((todo.length - ok - bad) / rate / 3600).toFixed(1)}h`);
  }
}
await Promise.all(Array.from({ length: LANES }, (_, i) => lane(i)));
console.log(`done ok ${ok} miss ${bad} fails ${fails}`);
