// Main-thread Kokoro controller. Loaded lazily by gloss.js / 028_english.
import { prepare as prepareText } from './prepare.js';

const KOKORO_VOICE = 'am_michael';
const KOKORO_VOICE_KEY = 'kokoro:am_michael';
const CACHE_MAX = 30;
const RATES = [0.9, 1.0, 1.1, 1.2];
/** Prefetch window: keep 3–4 chunks generating ahead of playback. */
const PREFETCH_DEPTH = 4;
const TRANSFORMERS_CACHE = 'transformers-cache';
const MODEL_ID_HINT = 'Kokoro-82M';

/**
 * Phoneme prepare rules (prepare-rules.js). Loaded lazily with the model —
 * never on mere page view. Falls back to prepare.js text chunks per sentence.
 */
let _rulesMod = null;
let _rulesPromise = null;
let _rulesFailed = false;
/** Memoize prepareChunks so card-open prefetch and click share one phoneme result. */
const _prepCache = new Map();
const PREP_CACHE_MAX = 24;

function loadPrepareRules() {
  if (_rulesFailed) return Promise.reject(new Error('prepare-rules unavailable'));
  if (_rulesMod) return Promise.resolve(_rulesMod);
  if (_rulesPromise) return _rulesPromise;
  // Query bust so long-lived browser profiles (e2e) pick up synced rules.
  _rulesPromise = import('./prepare-rules.js?v=20261114d')
    .then(function (mod) {
      if (!mod || typeof mod.prepare !== 'function') {
        throw new Error('prepare-rules missing prepare()');
      }
      _rulesMod = mod;
      return mod;
    })
    .catch(function (err) {
      _rulesFailed = true;
      _rulesPromise = null;
      throw err;
    });
  return _rulesPromise;
}

/**
 * Prefer phoneme chunks from prepare-rules; on load/throw, use text prepare.js.
 * Results are memoized by exact input string (prefetch + speak reuse).
 * @param {string} text
 * @returns {Promise<Array<{phonemes?:string,text?:string}>>}
 */
function prepareChunks(text) {
  const raw = String(text || '').trim();
  if (!raw) return Promise.resolve([]);
  const cached = _prepCache.get(raw);
  if (cached) return cached;

  const job = (async function () {
    if (!_rulesFailed) {
      try {
        const mod = await loadPrepareRules();
        const chunks = await mod.prepare(raw);
        if (Array.isArray(chunks) && chunks.length) return chunks;
      } catch (e) {
        // Fall through to orthographic text path for this sentence.
      }
    }
    return prepareText(raw);
  })();

  _prepCache.set(raw, job);
  if (_prepCache.size > PREP_CACHE_MAX) {
    const oldest = _prepCache.keys().next().value;
    _prepCache.delete(oldest);
  }
  return job.then(
    function (chunks) { return chunks; },
    function (err) {
      _prepCache.delete(raw);
      throw err;
    }
  );
}

/** Sync text-only prepare (legacy / tests). Prefer prepareChunks for speak. */
function prepare(text) {
  return prepareText(text);
}

function lsGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch (e) {}
}

function isAppleMobile() {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  if (navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1) return true;
  return false;
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent || '');
}

export function hasWebGPU() {
  return !!(navigator.gpu);
}

export function preferKokoroDefault() {
  return hasWebGPU() && !isAppleMobile() && !isAndroid();
}

export function kokoroDeviceOpts(forceWasm) {
  if (forceWasm || !hasWebGPU() || isAppleMobile() || isAndroid()) {
    return { device: 'wasm', dtype: 'q8', slow: true };
  }
  return { device: 'webgpu', dtype: 'fp32', slow: false };
}

export function isKokoroVoiceKey(v) {
  return v === KOKORO_VOICE_KEY || v === 'kokoro' || (typeof v === 'string' && v.indexOf('kokoro:') === 0);
}

export function getSavedVoice() {
  return lsGet('gl.voice');
}

export function getSavedRate() {
  const raw = lsGet('gl.rate');
  const n = raw != null ? parseFloat(raw) : 1.0;
  if (!Number.isFinite(n)) return 1.0;
  return n;
}

export function snapRate(n) {
  let best = 1.0;
  let bestD = Infinity;
  for (let i = 0; i < RATES.length; i++) {
    const d = Math.abs(RATES[i] - n);
    if (d < bestD) { bestD = d; best = RATES[i]; }
  }
  return best;
}

/**
 * Cache / inflight key. Includes chunk index so two chunks with identical
 * phonemes (e.g. repeated "born 1986") never share a slot — each index is
 * generated and played exactly once in order.
 */
function cacheKey(chunk, voice, speed, index) {
  const idx = index == null ? '' : '#i' + index;
  if (chunk && chunk.phonemes != null) {
    return 'p:' + chunk.phonemes + '|' + voice + '|' + speed + idx;
  }
  return 't:' + (chunk && chunk.text != null ? chunk.text : '') + '|' + voice + '|' + speed + idx;
}

function floatToWav(samples, sampleRate) {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  function wstr(off, s) {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  }
  wstr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  wstr(8, 'WAVE');
  wstr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  wstr(36, 'data');
  view.setUint32(40, numSamples * 2, true);
  let off = 44;
  for (let i = 0; i < numSamples; i++) {
    let s = samples[i];
    if (s > 1) s = 1;
    if (s < -1) s = -1;
    view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    off += 2;
  }
  return buffer;
}

/**
 * True when transformers.js already has Kokoro weights in Cache Storage.
 * Does not trigger any network download.
 */
export async function isModelCached() {
  if (typeof caches === 'undefined' || !caches.open) return false;
  try {
    const names = await caches.keys();
    if (!names || names.indexOf(TRANSFORMERS_CACHE) < 0) return false;
    const cache = await caches.open(TRANSFORMERS_CACHE);
    const reqs = await cache.keys();
    for (let i = 0; i < reqs.length; i++) {
      const u = reqs[i] && reqs[i].url ? reqs[i].url : '';
      if (u.indexOf(MODEL_ID_HINT) >= 0 || u.indexOf('onnx-community/Kokoro') >= 0) {
        return true;
      }
    }
    // Cache name present with entries is enough (model files use hashed URLs).
    return reqs.length > 0;
  } catch (e) {
    return false;
  }
}

export function createController(opts) {
  opts = opts || {};
  const onProgress = typeof opts.onProgress === 'function' ? opts.onProgress : function () {};
  const onState = typeof opts.onState === 'function' ? opts.onState : function () {};

  let worker = null;
  let reqId = 0;
  let speakSeq = 0;
  const pending = new Map();
  let audioCtx = null;
  let currentSource = null;
  let playToken = 0;
  let activeRequestId = 0;
  let status = 'idle'; // idle | loading | speaking
  let loadPercent = null;
  let lastError = null;
  let failedSession = false;
  let lastPlayed = null; // { samples, sampleRate, text }
  let loadedOnce = false;
  let deviceOpts = null;
  let warmPromise = null;
  let silentLoad = false;
  /** @type {Array<{index:number,text:string,tokenCount:?,durationSec:?,playedAt:?}>} */
  let chunkLog = [];

  const lru = new Map(); // key -> { samples, sampleRate, tokenCount, durationSec }
  /** Dedupe in-flight generates so prefetch + speak share one worker job. */
  const inflight = new Map(); // key -> Promise<entry>

  function setStatus(s, extra) {
    status = s;
    onState(Object.assign({ status: s, progress: loadPercent, error: lastError }, extra || {}));
  }

  function rememberCache(key, entry) {
    if (lru.has(key)) lru.delete(key);
    lru.set(key, entry);
    while (lru.size > CACHE_MAX) {
      const first = lru.keys().next().value;
      lru.delete(first);
    }
  }

  function ensureAudioCtx(sampleRate) {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: sampleRate || 24000 });
    }
    if (audioCtx.state === 'suspended') {
      try { audioCtx.resume(); } catch (e) {}
    }
    return audioCtx;
  }

  function getWorker() {
    if (worker) return worker;
    const url = new URL('./kokoro-worker.js', import.meta.url);
    worker = new Worker(url, { type: 'module' });
    worker.onmessage = function (ev) {
      const msg = ev.data || {};
      if (msg.type === 'progress') {
        if (typeof msg.percent === 'number') loadPercent = Math.round(msg.percent);
        else if (msg.loaded != null && msg.total) {
          loadPercent = Math.round((100 * msg.loaded) / msg.total);
        }
        if (!silentLoad) {
          onProgress({
            percent: loadPercent,
            loaded: msg.loaded,
            total: msg.total,
            file: msg.file,
            status: msg.status,
          });
          if (status === 'loading') setStatus('loading');
        }
        return;
      }
      if (msg.type === 'load_start') {
        if (!silentLoad) {
          status = 'loading';
          loadPercent = loadPercent == null ? 0 : loadPercent;
          setStatus('loading');
        }
        return;
      }
      if (msg.type === 'load_done') {
        loadedOnce = true;
        loadPercent = 100;
        if (!silentLoad) onProgress({ percent: 100, status: 'done' });
        return;
      }
      if (msg.type === 'ok' || msg.type === 'error') {
        const p = pending.get(msg.id);
        if (!p) return;
        pending.delete(msg.id);
        if (msg.type === 'error') p.reject(new Error(msg.message || 'worker error'));
        else p.resolve(msg);
      }
    };
    worker.onerror = function (err) {
      lastError = String(err && err.message ? err.message : err);
      for (const [, p] of pending) p.reject(new Error(lastError));
      pending.clear();
    };
    return worker;
  }

  function callWorker(payload, transfer) {
    const id = ++reqId;
    const w = getWorker();
    return new Promise(function (resolve, reject) {
      const timer = setTimeout(function () {
        if (!pending.has(id)) return;
        pending.delete(id);
        reject(new Error('kokoro worker timeout'));
      }, 300000);
      pending.set(id, {
        resolve: function (v) { clearTimeout(timer); resolve(v); },
        reject: function (e) { clearTimeout(timer); reject(e); },
      });
      const msg = Object.assign({ id: id }, payload);
      try {
        if (transfer && transfer.length) w.postMessage(msg, transfer);
        else w.postMessage(msg);
      } catch (e) {
        clearTimeout(timer);
        pending.delete(id);
        reject(e);
      }
    });
  }

  async function ensureModel(forceWasm, loadOpts) {
    if (failedSession) throw new Error('kokoro failed earlier this session');
    deviceOpts = kokoroDeviceOpts(!!forceWasm);
    const silent = !!(loadOpts && loadOpts.silent);

    if (loadedOnce && worker) return deviceOpts;

    const prevSilent = silentLoad;
    silentLoad = silent;
    if (!silent) {
      setStatus('loading');
      loadPercent = loadPercent == null ? 0 : loadPercent;
      onProgress({ percent: loadPercent || 0, status: 'start' });
    }
    try {
      // Load phonemizer (via prepare-rules) in parallel with the Kokoro weights.
      // Failures here are non-fatal: speak falls back to prepare.js text path.
      // Touch prepare() once so the CDN phonemizer WASM is warm before click.
      const rulesWarm = loadPrepareRules()
        .then(function (mod) {
          return mod.prepare('Hi.').then(function () { return mod; });
        })
        .catch(function () { return null; });
      await callWorker({
        type: 'load',
        device: deviceOpts.device,
        dtype: deviceOpts.dtype,
      });
      await rulesWarm;
      loadedOnce = true;
      loadPercent = 100;
      // Wake AudioContext during warm/load so the first click is not paying
      // context-construction latency.
      try { ensureAudioCtx(24000); } catch (e) {}
      if (!silent) onProgress({ percent: 100, status: 'done' });
      return deviceOpts;
    } catch (e) {
      if (!silent) {
        failedSession = true;
        lastError = String(e && e.message ? e.message : e);
        setStatus('idle');
      } else {
        lastError = String(e && e.message ? e.message : e);
      }
      throw e;
    } finally {
      silentLoad = prevSilent;
    }
  }

  /**
   * Start worker + model load only when Cache Storage already has the weights.
   * Never triggers a download on page view / card open if uncached.
   * Silent: does not flip UI status to "loading".
   */
  function warmIfCached(forceWasm) {
    if (failedSession || loadedOnce) return Promise.resolve(!!loadedOnce);
    if (warmPromise) return warmPromise;
    warmPromise = (async function () {
      const cached = await isModelCached();
      if (!cached) return false;
      try {
        getWorker();
        await ensureModel(!!forceWasm, { silent: true });
        return true;
      } catch (e) {
        lastError = String(e && e.message ? e.message : e);
        return false;
      }
    })();
    return warmPromise.then(function (ok) {
      if (!ok) warmPromise = null;
      return ok;
    });
  }

  async function generateOne(chunk, voice, speed, requestId, index) {
    const key = cacheKey(chunk, voice, speed, index);
    if (lru.has(key)) {
      const hit = lru.get(key);
      rememberCache(key, hit);
      // Clone samples so a later transfer/detach cannot wipe a shared buffer.
      const samples = hit.samples instanceof Float32Array
        ? new Float32Array(hit.samples)
        : hit.samples;
      return Object.assign(
        { fromCache: true, requestId: requestId, index: index },
        hit,
        { samples: samples }
      );
    }
    if (inflight.has(key)) {
      const shared = await inflight.get(key);
      const samples = shared.samples instanceof Float32Array
        ? new Float32Array(shared.samples)
        : shared.samples;
      return Object.assign(
        { fromCache: true, requestId: requestId, index: index },
        shared,
        { samples: samples }
      );
    }
    const opts = deviceOpts || kokoroDeviceOpts(false);
    const job = (async function () {
      const msg = await callWorker({
        type: 'generate',
        chunk: chunk,
        voice: voice || KOKORO_VOICE,
        speed: speed,
        device: opts.device,
        dtype: opts.dtype,
        requestId: requestId,
        index: index,
      });
      const raw = msg.samples instanceof Float32Array
        ? msg.samples
        : new Float32Array(msg.samples);
      // Own a copy — worker may have transferred the original buffer.
      const samples = new Float32Array(raw);
      const entry = {
        samples: samples,
        sampleRate: msg.sampleRate || 24000,
        tokenCount: msg.tokenCount,
        durationSec: msg.durationSec != null
          ? msg.durationSec
          : samples.length / (msg.sampleRate || 24000),
        phonemes: chunk && chunk.phonemes != null ? String(chunk.phonemes) : null,
      };
      rememberCache(key, entry);
      return entry;
    })();
    inflight.set(key, job);
    try {
      const entry = await job;
      // Drop late results from a cancelled speak request (keep LRU warm).
      if (requestId != null && requestId !== activeRequestId) {
        return Object.assign({ requestId: requestId, index: index, cancelled: true }, entry);
      }
      return Object.assign({ requestId: requestId, index: index }, entry);
    } finally {
      inflight.delete(key);
    }
  }

  function stopPlayback() {
    playToken += 1;
    activeRequestId = 0;
    if (currentSource) {
      try { currentSource.stop(); } catch (e) {}
      try { currentSource.disconnect(); } catch (e) {}
      currentSource = null;
    }
    if (status !== 'loading') setStatus('idle');
  }

  function playBuffer(entry) {
    const ctx = ensureAudioCtx(entry.sampleRate);
    const buffer = ctx.createBuffer(1, entry.samples.length, entry.sampleRate);
    buffer.copyToChannel(entry.samples, 0);
    return new Promise(function (resolve) {
      const src = ctx.createBufferSource();
      currentSource = src;
      src.buffer = buffer;
      src.connect(ctx.destination);
      src.onended = function () {
        if (currentSource === src) currentSource = null;
        resolve();
      };
      try { src.start(); } catch (e) { resolve(); }
    });
  }

  function logChunk(row) {
    chunkLog.push(row);
    try {
      if (typeof console !== 'undefined' && console.debug) {
        console.debug('[kokoro-chunk]', JSON.stringify(row));
      }
    } catch (e) {}
    try {
      if (typeof window !== 'undefined') {
        window.__kokoroChunkLog = chunkLog.slice();
      }
    } catch (e) {}
  }

  /**
   * Play chunks strictly in index order. Prefetch up to PREFETCH_DEPTH ahead.
   * Each in-flight generate carries requestId + index; stop/new speak bumps
   * activeRequestId so late results are ignored.
   */
  async function speakChunks(chunks, voice, speed, requestId) {
    const token = ++playToken;
    activeRequestId = requestId;
    setStatus('speaking');
    chunkLog = [];

    const n = chunks.length;
    /** @type {(Promise<any>|null)[]} */
    const slots = new Array(n);
    let nextToStart = 0;
    let nextToPlay = 0;

    function kickPrefetch() {
      while (
        nextToStart < n &&
        nextToStart < nextToPlay + PREFETCH_DEPTH &&
        token === playToken &&
        requestId === activeRequestId
      ) {
        const idx = nextToStart++;
        slots[idx] = generateOne(chunks[idx], voice, speed, requestId, idx);
      }
    }

    kickPrefetch();
    // Before first audio, wait for chunk 0 and (if any) chunk 1 so a short
    // first chunk cannot finish before the second generate returns.
    if (n >= 1) {
      await slots[0];
      if (token !== playToken || requestId !== activeRequestId) return;
    }
    if (n >= 2 && slots[1]) {
      await slots[1];
      if (token !== playToken || requestId !== activeRequestId) return;
    }

    while (nextToPlay < n) {
      if (token !== playToken || requestId !== activeRequestId) return;
      kickPrefetch();
      const idx = nextToPlay;
      const entry = await slots[idx];
      if (token !== playToken || requestId !== activeRequestId) return;
      if (!entry || entry.cancelled) return;

      const playedAt = (typeof performance !== 'undefined' && performance.now)
        ? performance.now()
        : Date.now();
      const phonemes = chunks[idx].phonemes != null ? String(chunks[idx].phonemes) : null;
      const text = chunks[idx].text || phonemes || '';
      const durationSec = entry.durationSec != null
        ? entry.durationSec
        : entry.samples.length / entry.sampleRate;
      logChunk({
        requestId: requestId,
        index: idx,
        phonemes: phonemes,
        text: text,
        tokenCount: entry.tokenCount != null ? entry.tokenCount : null,
        durationSec: durationSec,
        playedAt: playedAt,
        fromCache: !!entry.fromCache,
      });

      lastPlayed = {
        samples: entry.samples,
        sampleRate: entry.sampleRate,
        text: text,
      };
      await playBuffer(entry);
      if (token !== playToken || requestId !== activeRequestId) return;
      nextToPlay += 1;
      kickPrefetch();
    }
    if (token === playToken && requestId === activeRequestId) setStatus('idle');
  }

  /**
   * Generate the first 1–2 chunks into the LRU without playing.
   * Used when a gloss card opens so the click hits cache for TTFA.
   */
  let prefetchToken = 0;
  async function prefetch(text, speakOpts) {
    speakOpts = speakOpts || {};
    if (failedSession) return false;
    const my = ++prefetchToken;
    const voice = speakOpts.voice || KOKORO_VOICE;
    const speed = typeof speakOpts.speed === 'number' ? speakOpts.speed : snapRate(getSavedRate());
    const forceWasm = !!speakOpts.forceWasm;
    try {
      const cached = loadedOnce || (await isModelCached());
      if (!cached) return false;
      await ensureModel(forceWasm, { silent: true });
      if (my !== prefetchToken) return false;
      const chunks = await prepareChunks(text);
      if (my !== prefetchToken) return false;
      if (!chunks.length) return false;
      // Prefetch ahead of playback. For short multi-chunk lists (name lists),
      // warm every chunk so mid-play gaps stay under the 600ms budget.
      const n = chunks.length <= 8
        ? chunks.length
        : Math.min(PREFETCH_DEPTH, chunks.length);
      for (let i = 0; i < n; i++) {
        if (my !== prefetchToken) return false;
        await generateOne(chunks[i], voice, speed, null, i);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  async function speak(text, speakOpts) {
    speakOpts = speakOpts || {};
    stopPlayback();
    // Do not bump prefetchToken here: in-flight prefetch shares inflight/LRU
    // with speak and avoids a multi-second gap on short first chunks.
    const requestId = ++speakSeq;
    activeRequestId = requestId;
    const voice = speakOpts.voice || KOKORO_VOICE;
    const speed = typeof speakOpts.speed === 'number' ? speakOpts.speed : snapRate(getSavedRate());
    const forceWasm = !!speakOpts.forceWasm;
    await ensureModel(forceWasm);
    if (activeRequestId !== requestId) return;
    const chunks = Array.isArray(speakOpts.chunks) && speakOpts.chunks.length
      ? speakOpts.chunks
      : await prepareChunks(text);
    if (activeRequestId !== requestId) return;
    if (!chunks.length) {
      setStatus('idle');
      return;
    }
    await speakChunks(chunks, voice, speed, requestId);
  }

  function stop() {
    prefetchToken += 1;
    stopPlayback();
    setStatus('idle');
  }

  function state() {
    return {
      status: status,
      progress: loadPercent,
      error: lastError,
      failedSession: failedSession,
      loaded: loadedOnce,
      device: deviceOpts ? deviceOpts.device : null,
      dtype: deviceOpts ? deviceOpts.dtype : null,
      slow: !!(deviceOpts && deviceOpts.slow),
      cacheSize: lru.size,
      activeRequestId: activeRequestId,
      chunkLog: chunkLog.slice(),
      lastDuration: lastPlayed
        ? lastPlayed.samples.length / lastPlayed.sampleRate
        : 0,
    };
  }

  /** Test hook: generate one phoneme chunk without playing. */
  async function generatePhonemes(phonemes, speakOpts) {
    speakOpts = speakOpts || {};
    await ensureModel(!!speakOpts.forceWasm);
    const voice = speakOpts.voice || KOKORO_VOICE;
    const speed = typeof speakOpts.speed === 'number' ? speakOpts.speed : 1.0;
    return generateOne({ phonemes: phonemes }, voice, speed, activeRequestId, 0);
  }

  function dumpLastWav() {
    if (!lastPlayed) return null;
    return floatToWav(lastPlayed.samples, lastPlayed.sampleRate);
  }

  function markFailed(err) {
    failedSession = true;
    lastError = String(err && err.message ? err.message : err);
    setStatus('idle');
  }

  return {
    prepare: prepare,
    prepareChunks: prepareChunks,
    speak: speak,
    stop: stop,
    state: state,
    ensureModel: ensureModel,
    warmIfCached: warmIfCached,
    isModelCached: isModelCached,
    prefetch: prefetch,
    generatePhonemes: generatePhonemes,
    dumpLastWav: dumpLastWav,
    markFailed: markFailed,
    preferKokoroDefault: preferKokoroDefault,
    kokoroDeviceOpts: kokoroDeviceOpts,
    isKokoroVoiceKey: isKokoroVoiceKey,
    voiceKey: KOKORO_VOICE_KEY,
    voiceId: KOKORO_VOICE,
    rates: RATES.slice(),
    getSavedRate: getSavedRate,
    snapRate: snapRate,
    lsGet: lsGet,
    lsSet: lsSet,
  };
}

export { prepare, prepareChunks, KOKORO_VOICE_KEY, KOKORO_VOICE, RATES };
