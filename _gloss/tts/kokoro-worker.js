// Module Web Worker: loads Kokoro-82M and generates audio off the main thread.
// Message handlers are serialized — concurrent generate() corrupts WebGPU/ONNX.
import { KokoroTTS } from 'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm';

const MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
/** Kokoro generate_from_ids caps style lookup at 509; leave headroom. */
const SAFE_TOKEN_MAX = 480;

let tts = null;
let loadPromise = null;
let chain = Promise.resolve();

function post(msg, transfer) {
  if (transfer && transfer.length) self.postMessage(msg, transfer);
  else self.postMessage(msg);
}

function progressHandler(info) {
  if (!info) return;
  const file = info.file || info.name || '';
  const status = info.status || '';
  let percent = null;
  if (typeof info.progress === 'number' && Number.isFinite(info.progress)) {
    percent = Math.max(0, Math.min(100, info.progress));
  } else if (typeof info.loaded === 'number' && typeof info.total === 'number' && info.total > 0) {
    percent = Math.max(0, Math.min(100, (100 * info.loaded) / info.total));
  }
  post({
    type: 'progress',
    status,
    file,
    loaded: typeof info.loaded === 'number' ? info.loaded : null,
    total: typeof info.total === 'number' ? info.total : null,
    percent,
  });
}

async function ensureLoaded(opts) {
  if (tts) return tts;
  if (loadPromise) return loadPromise;
  const device = opts.device || 'webgpu';
  const dtype = opts.dtype || 'fp32';
  loadPromise = (async () => {
    post({ type: 'load_start', device, dtype });
    tts = await KokoroTTS.from_pretrained(MODEL_ID, {
      device,
      dtype,
      progress_callback: progressHandler,
    });
    post({ type: 'load_done', device, dtype });
    return tts;
  })();
  try {
    return await loadPromise;
  } catch (err) {
    loadPromise = null;
    tts = null;
    throw err;
  }
}

/**
 * Run generate with truncation:false and assert the tokenizer did not clip.
 * kokoro-js generate() hard-codes truncation:true; wrap tokenizer for one call.
 */
async function generateChunk(chunk, voice, speed, meta) {
  const model = await ensureLoaded({});
  const v = voice || 'am_michael';
  const s = typeof speed === 'number' ? speed : 1;
  const text = chunk && chunk.phonemes != null
    ? null
    : (chunk && chunk.text != null ? String(chunk.text) : String(chunk || ''));
  const phonemesIn = chunk && typeof chunk.phonemes === 'string' ? chunk.phonemes : null;

  let tokenCount = null;
  let audio;

  const origTokenizer = model.tokenizer;
  model.tokenizer = function (input, opts) {
    const full = origTokenizer(input, Object.assign({}, opts || {}, { truncation: false }));
    const ids = full && full.input_ids;
    const len = ids && ids.dims ? ids.dims[ids.dims.length - 1] : null;
    tokenCount = len;
    if (len != null && len > SAFE_TOKEN_MAX) {
      throw new Error(
        'kokoro chunk exceeds safe token budget: ' +
          len +
          ' > ' +
          SAFE_TOKEN_MAX +
          (meta && meta.index != null ? ' (chunk ' + meta.index + ')' : '') +
          (text ? ': ' + text.slice(0, 80) : '')
      );
    }
    return full;
  };

  try {
    if (phonemesIn != null) {
      const { input_ids } = model.tokenizer(phonemesIn, { truncation: false });
      audio = await model.generate_from_ids(input_ids, { voice: v, speed: s });
    } else {
      audio = await model.generate(text, { voice: v, speed: s });
    }
  } finally {
    model.tokenizer = origTokenizer;
  }

  const samples = audio.audio instanceof Float32Array
    ? audio.audio
    : new Float32Array(audio.audio);
  const sampleRate = audio.sampling_rate || 24000;
  const durationSec = samples.length / sampleRate;
  return {
    samples,
    sampleRate,
    tokenCount,
    durationSec,
    text: phonemesIn != null ? phonemesIn : text,
  };
}

async function handleMessage(msg) {
  const id = msg.id;
  try {
    if (msg.type === 'load') {
      await ensureLoaded({ device: msg.device, dtype: msg.dtype });
      post({ type: 'ok', id, kind: 'load' });
      return;
    }
    if (msg.type === 'generate') {
      if (!tts) {
        await ensureLoaded({ device: msg.device, dtype: msg.dtype });
      }
      const meta = {
        requestId: msg.requestId != null ? msg.requestId : null,
        index: msg.index != null ? msg.index : null,
      };
      const result = await generateChunk(msg.chunk, msg.voice, msg.speed, meta);
      post(
        {
          type: 'ok',
          id,
          kind: 'generate',
          sampleRate: result.sampleRate,
          samples: result.samples,
          tokenCount: result.tokenCount,
          durationSec: result.durationSec,
          text: result.text,
          requestId: meta.requestId,
          index: meta.index,
        },
        [result.samples.buffer]
      );
      return;
    }
    if (msg.type === 'ping') {
      post({ type: 'ok', id, kind: 'ping', ready: !!tts });
      return;
    }
    if (msg.type === 'cancel') {
      // Generation is serialized; cancel is acknowledged on the main thread via
      // requestId. Nothing to abort inside an in-flight ONNX call.
      post({ type: 'ok', id, kind: 'cancel' });
      return;
    }
    throw new Error('unknown message type: ' + msg.type);
  } catch (err) {
    post({
      type: 'error',
      id,
      requestId: msg.requestId != null ? msg.requestId : null,
      index: msg.index != null ? msg.index : null,
      message: String(err && err.message ? err.message : err),
    });
  }
}

self.onmessage = function (ev) {
  const msg = ev.data || {};
  // Serialize all work so two generate() calls never overlap on the model.
  chain = chain.then(function () {
    return handleMessage(msg);
  }).catch(function (err) {
    post({
      type: 'error',
      id: msg.id,
      message: String(err && err.message ? err.message : err),
    });
  });
};
