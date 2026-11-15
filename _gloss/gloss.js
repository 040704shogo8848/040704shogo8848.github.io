// Hover glosses: point at a Japanese sentence and a card shows how it reads in
// natural English, the expressions worth learning in it, and a YouGlish link
// for hearing each one. Data comes from _gloss/pages/<page>.js, built by
// _tools/gloss/pack.mjs. Needs core.js loaded first.
(function () {
  var me = document.currentScript;
  var dataSrc = me && me.getAttribute('data-src');
  if (!dataSrc || !window.GlossCore) return;
  var C = window.GlossCore;
  var KEY = 'gl.on';
  var on = true;
  try { on = localStorage.getItem(KEY) !== '0'; } catch (e) {}

  var DATA = null;
  window.GlossData = function (d) { DATA = d; start(); };
  var s = document.createElement('script');
  s.src = dataSrc;
  s.async = true;
  document.head.appendChild(s);

  var TYPE = { i: '熟語', p: '言い回し', w: '単語' };
  var nodeIndex = new Map(); // text node -> {b, start}
  var tip, toggle, voiceSel, rateSel, ttsNote, cur = null, pinned = false, hideTimer = 0, showTimer = 0, hl = null;
  var canHL = typeof Highlight !== 'undefined' && window.CSS && CSS.highlights;
  var _ttsUtt = null, _ttsText = null, _ttsBtn = null, _ttsTimer = 0, _ttsVoice = null;
  var KOKORO_KEY = 'kokoro:am_michael';
  var KOKORO_LABEL = 'Kokoro Michael（高品質）';
  var _kokoroMod = null, _kokoroCtrl = null, _kokoroLoad = null, _kokoroFailed = false;
  var _ttsEngine = 'speech'; // 'kokoro' | 'speech'
  var _ttsStatus = 'idle'; // idle | loading | speaking
  var _glossBase = (me && me.src) ? me.src.replace(/[^\/?#]+([?#].*)?$/, '') : '';

  // tts-rank:start
  var TTS_BLACKLIST = {
    albert: 1, 'bad news': 1, bahh: 1, bells: 1, boing: 1, bubbles: 1, cellos: 1, wobble: 1,
    'good news': 1, jester: 1, organ: 1, superstar: 1, trinoids: 1, whisper: 1, zarvox: 1,
    grandma: 1, grandpa: 1, junior: 1, ralph: 1, fred: 1, kathy: 1, rocko: 1, eddy: 1, flo: 1,
    sandy: 1, shelley: 1, reed: 1
  };
  var TTS_PREF = [
    'Andrew', 'Christopher', 'Guy', 'Davis', 'Brian', 'Eric', 'Roger', 'Steffan', 'Ryan', 'Thomas',
    'Evan', 'Nathan', 'Tom', 'Aaron', 'Alex', 'Daniel', 'Oliver', 'Arthur', 'Lee',
    'Google UK English Male',
    'Rishi', 'Aman', 'Gordon'
  ];
  function ttsBaseName(name) {
    return String(name || '').replace(/\s*\([^)]*\)\s*$/, '').trim();
  }
  function ttsBlacklisted(name) {
    return !!TTS_BLACKLIST[ttsBaseName(name).toLowerCase()];
  }
  function ttsQuality(name) {
    var n = String(name || '').toLowerCase();
    if (n.indexOf('premium') !== -1) return 4;
    if (n.indexOf('enhanced') !== -1) return 3;
    if (n.indexOf('natural') !== -1 || n.indexOf('online') !== -1 || n.indexOf('neural') !== -1) return 2;
    return 1;
  }
  function ttsPrefIndex(name) {
    var n = String(name || '');
    for (var i = 0; i < TTS_PREF.length; i++) {
      if (n.indexOf(TTS_PREF[i]) !== -1) return i;
    }
    return 1000;
  }
  function ttsLangKey(lang) {
    return String(lang || '').toLowerCase().replace(/_/g, '-');
  }
  function ttsRankVoices(voices) {
    var out = [];
    for (var i = 0; i < voices.length; i++) {
      var v = voices[i];
      var lang = ttsLangKey(v.lang);
      if (lang.indexOf('en') !== 0) continue;
      if (ttsBlacklisted(v.name)) continue;
      out.push(v);
    }
    out.sort(function (a, b) {
      var pa = ttsPrefIndex(a.name), pb = ttsPrefIndex(b.name);
      if (pa !== pb) return pa - pb;
      var qa = ttsQuality(a.name), qb = ttsQuality(b.name);
      if (qa !== qb) return qb - qa;
      var la = ttsLangKey(a.lang), lb = ttsLangKey(b.lang);
      var ta = (la.indexOf('en-us') === 0 || la.indexOf('en-gb') === 0) ? 0 : 1;
      var tb = (lb.indexOf('en-us') === 0 || lb.indexOf('en-gb') === 0) ? 0 : 1;
      if (ta !== tb) return ta - tb;
      return String(a.name).localeCompare(String(b.name));
    });
    return out;
  }
  function ttsPickFrom(voices) {
    var ranked = ttsRankVoices(voices);
    var saved = null;
    try { saved = localStorage.getItem('gl.voice'); } catch (e) {}
    if (saved) {
      for (var i = 0; i < ranked.length; i++) {
        if (ranked[i].name === saved) return ranked[i];
      }
    }
    return ranked.length ? ranked[0] : null;
  }
  // tts-rank:end

  function ttsIsMobileOS() {
    var ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod|Android/i.test(ua)) return true;
    if (navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1) return true;
    return false;
  }
  function ttsHasWebGPU() {
    return !!(navigator.gpu);
  }
  function ttsPreferKokoro() {
    return ttsHasWebGPU() && !ttsIsMobileOS();
  }
  function ttsIsKokoroKey(v) {
    return v === KOKORO_KEY || v === 'kokoro' || (typeof v === 'string' && v.indexOf('kokoro:') === 0);
  }
  function ttsGetSavedVoice() {
    try { return localStorage.getItem('gl.voice'); } catch (e) { return null; }
  }
  function ttsGetSavedRate() {
    var raw = null;
    try { raw = localStorage.getItem('gl.rate'); } catch (e) {}
    var n = raw != null ? parseFloat(raw) : 1.0;
    if (!Number.isFinite(n)) return 1.0;
    var rates = [0.9, 1.0, 1.1, 1.2], best = 1.0, bestD = Infinity, i;
    for (i = 0; i < rates.length; i++) {
      var d = Math.abs(rates[i] - n);
      if (d < bestD) { bestD = d; best = rates[i]; }
    }
    return best;
  }
  function ttsWantsKokoro() {
    if (_kokoroFailed) return false;
    var saved = ttsGetSavedVoice();
    if (saved != null && saved !== '') {
      return ttsIsKokoroKey(saved);
    }
    return ttsPreferKokoro();
  }
  function ttsKokoroSlow() {
    return !ttsHasWebGPU() || ttsIsMobileOS();
  }
  function ttsUpdateNote() {
    if (!ttsNote) return;
    if (ttsWantsKokoro() && ttsKokoroSlow()) {
      ttsNote.textContent = 'Kokoro（WASM）は時間がかかります';
      ttsNote.style.display = '';
    } else {
      ttsNote.textContent = '';
      ttsNote.style.display = 'none';
    }
  }

  function ttsModuleUrl() {
    return _glossBase + 'tts/tts.js?v=20261114d';
  }

  function ttsLoadKokoro() {
    if (_kokoroCtrl) return Promise.resolve(_kokoroCtrl);
    if (_kokoroLoad) return _kokoroLoad;
    _kokoroLoad = import(ttsModuleUrl()).then(function (mod) {
      _kokoroMod = mod;
      _kokoroCtrl = mod.createController({
        onProgress: function (p) {
          if (_ttsStatus !== 'loading') return;
          var pct = typeof p.percent === 'number' ? Math.round(p.percent) : null;
          if (_ttsBtn && pct != null) {
            _ttsBtn.textContent = '音声モデルを読み込み中 ' + pct + '%';
          }
        },
        onState: function (st) {
          if (!st || !st.status) return;
          _ttsStatus = st.status;
          if (!_ttsBtn) return;
          if (st.status === 'loading') {
            var pct = st.progress != null ? Math.round(st.progress) : 0;
            _ttsBtn.textContent = '音声モデルを読み込み中 ' + pct + '%';
          } else if (st.status === 'speaking') {
            _ttsBtn.textContent = '停止';
          }
        }
      });
      return _kokoroCtrl;
    }).catch(function (err) {
      _kokoroLoad = null;
      throw err;
    });
    return _kokoroLoad;
  }

  function ttsRefreshVoice() {
    if (!window.speechSynthesis) { _ttsVoice = null; ttsFillVoiceSel(); return null; }
    _ttsVoice = ttsPickFrom(speechSynthesis.getVoices() || []);
    ttsFillVoiceSel();
    return _ttsVoice;
  }

  function ttsFillVoiceSel() {
    if (!voiceSel) return;
    var ranked = window.speechSynthesis
      ? ttsRankVoices(speechSynthesis.getVoices() || [])
      : [];
    var saved = ttsGetSavedVoice();
    var curName = '';
    if (saved) curName = saved;
    else if (ttsPreferKokoro()) curName = KOKORO_KEY;
    else if (_ttsVoice) curName = _ttsVoice.name;
    else if (ranked.length) curName = ranked[0].name;

    voiceSel.textContent = '';
    var ko = document.createElement('option');
    ko.value = KOKORO_KEY;
    ko.textContent = KOKORO_LABEL;
    if (curName === KOKORO_KEY || ttsIsKokoroKey(curName)) ko.selected = true;
    voiceSel.appendChild(ko);

    for (var i = 0; i < ranked.length; i++) {
      var o = document.createElement('option');
      o.value = ranked[i].name;
      o.textContent = ranked[i].name;
      if (ranked[i].name === curName) o.selected = true;
      voiceSel.appendChild(o);
    }
    if (!voiceSel.value && curName) {
      try { voiceSel.value = curName; } catch (e) {}
    }
    if (!saved && ttsPreferKokoro()) {
      voiceSel.value = KOKORO_KEY;
      try { localStorage.setItem('gl.voice', KOKORO_KEY); } catch (e) {}
    } else if (!saved && _ttsVoice && !ttsPreferKokoro()) {
      voiceSel.value = _ttsVoice.name;
    }
    ttsUpdateNote();
  }

  function ttsFillRateSel() {
    if (!rateSel) return;
    var cur = ttsGetSavedRate();
    var rates = [0.9, 1.0, 1.1, 1.2];
    rateSel.textContent = '';
    for (var i = 0; i < rates.length; i++) {
      var o = document.createElement('option');
      o.value = String(rates[i]);
      o.textContent = rates[i].toFixed(1) + 'x';
      if (rates[i] === cur) o.selected = true;
      rateSel.appendChild(o);
    }
  }

  function ttsChunkText(text) {
    if (!text || text.length <= 200) return [text];
    var chunks = [], buf = text;
    while (buf.length > 200) {
      var cut = -1, i;
      for (i = Math.min(buf.length - 1, 240); i >= 80; i--) {
        var ch = buf.charAt(i);
        if (ch === '.' || ch === '!' || ch === '?' || ch === ';') { cut = i + 1; break; }
      }
      if (cut < 0) {
        for (i = Math.min(buf.length - 1, 240); i >= 80; i--) {
          if (buf.charAt(i) === ',') { cut = i + 1; break; }
        }
      }
      if (cut < 0) cut = 200;
      chunks.push(buf.slice(0, cut).replace(/\s+$/, ''));
      buf = buf.slice(cut).replace(/^\s+/, '');
    }
    if (buf) chunks.push(buf);
    return chunks;
  }

  function ttsStopSpeech() {
    clearTimeout(_ttsTimer);
    if (window.speechSynthesis) {
      try { speechSynthesis.cancel(); } catch (e) {}
    }
    if (_kokoroCtrl) {
      try { _kokoroCtrl.stop(); } catch (e) {}
    }
    _ttsUtt = null;
    _ttsText = null;
    _ttsStatus = 'idle';
    _ttsEngine = ttsWantsKokoro() ? 'kokoro' : 'speech';
    if (_ttsBtn) {
      _ttsBtn.textContent = '読み上げ';
      _ttsBtn = null;
    }
  }

  function ttsSaySpeech(text, btn) {
    if (!window.speechSynthesis) return;
    clearTimeout(_ttsTimer);
    var start = function () {
      if (speechSynthesis.paused) {
        try { speechSynthesis.resume(); } catch (e) {}
      }
      var voice = ttsRefreshVoice();
      var chunks = ttsChunkText(text);
      var idx = 0;
      var rate = ttsGetSavedRate();
      _ttsText = text;
      _ttsBtn = btn || null;
      _ttsEngine = 'speech';
      _ttsStatus = 'speaking';
      if (_ttsBtn) _ttsBtn.textContent = '停止';
      function done() {
        _ttsText = null;
        _ttsUtt = null;
        _ttsStatus = 'idle';
        if (_ttsBtn) _ttsBtn.textContent = '読み上げ';
        _ttsBtn = null;
      }
      function next() {
        if (idx >= chunks.length) { done(); return; }
        var u = new SpeechSynthesisUtterance(chunks[idx++]);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        else { u.lang = 'en-US'; }
        u.rate = rate;
        u.pitch = 0.85;
        u.onend = next;
        u.onerror = function () { done(); };
        _ttsUtt = u;
        speechSynthesis.speak(u);
      }
      next();
    };
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
      _ttsTimer = setTimeout(start, 50);
    } else {
      start();
    }
  }

  function ttsWarmIfCached(prefetchText) {
    if (!ttsWantsKokoro() || _kokoroFailed) return;
    ttsLoadKokoro().then(function (ctrl) {
      return ctrl.warmIfCached(ttsKokoroSlow()).then(function (ok) {
        if (ok && prefetchText) {
          return ctrl.prefetch(prefetchText, {
            voice: 'am_michael',
            speed: ttsGetSavedRate(),
            forceWasm: ttsKokoroSlow()
          });
        }
      });
    }).catch(function () {});
  }

  function ttsSayKokoro(text, btn) {
    _ttsText = text;
    _ttsBtn = btn || null;
    _ttsEngine = 'kokoro';
    _ttsStatus = 'loading';
    if (_ttsBtn) _ttsBtn.textContent = '音声モデルを読み込み中 0%';
    var rate = ttsGetSavedRate();
    var forceWasm = ttsKokoroSlow();
    return ttsLoadKokoro().then(function (ctrl) {
      return ctrl.speak(text, {
        voice: 'am_michael',
        speed: rate,
        forceWasm: forceWasm
      });
    }).then(function () {
      if (_ttsText === text) {
        _ttsText = null;
        _ttsStatus = 'idle';
        if (_ttsBtn) _ttsBtn.textContent = '読み上げ';
        _ttsBtn = null;
      }
    }).catch(function (err) {
      _kokoroFailed = true;
      if (_kokoroCtrl) {
        try { _kokoroCtrl.markFailed(err); } catch (e) {}
      }
      // Fall back to speechSynthesis for this click.
      ttsSaySpeech(text, btn);
    });
  }

  window.GlossTTS = {
    engine: function () {
      if (_ttsStatus === 'speaking' || _ttsStatus === 'loading') return _ttsEngine;
      return ttsWantsKokoro() ? 'kokoro' : 'speech';
    },
    voices: function () {
      return ttsRankVoices((window.speechSynthesis && speechSynthesis.getVoices()) || []);
    },
    pick: function () {
      if (ttsWantsKokoro()) return { name: KOKORO_KEY, lang: 'en-US' };
      return ttsRefreshVoice();
    },
    speak: function (text) {
      say(text, _ttsBtn);
    },
    stop: function () {
      ttsStopSpeech();
    },
    state: function () {
      var st = {
        status: _ttsStatus,
        engine: window.GlossTTS.engine(),
        failedSession: _kokoroFailed,
        progress: null,
        lastDuration: 0
      };
      if (_kokoroCtrl) {
        var ks = _kokoroCtrl.state();
        st.progress = ks.progress;
        st.lastDuration = ks.lastDuration;
        st.device = ks.device;
        st.dtype = ks.dtype;
        st.loaded = ks.loaded;
        st.cacheSize = ks.cacheSize;
        st.chunkLog = ks.chunkLog;
        if (ks.status === 'speaking' || ks.status === 'loading') st.status = ks.status;
      }
      return st;
    },
    dumpWav: function () {
      return _kokoroCtrl ? _kokoroCtrl.dumpLastWav() : null;
    },
    generatePhonemes: function (phonemes) {
      return ttsLoadKokoro().then(function (ctrl) {
        return ctrl.generatePhonemes(phonemes, { forceWasm: ttsKokoroSlow() });
      });
    },
    _loadModule: ttsLoadKokoro,
    _moduleUrl: ttsModuleUrl
  };

  if (window.speechSynthesis) {
    speechSynthesis.addEventListener('voiceschanged', function () { ttsRefreshVoice(); });
    ttsRefreshVoice();
  }

  function start() {
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', start); return; }
    if (tip) return;
    index();
    // Read by the build tools' coverage check.
    window.GlossStats = { data: Object.keys(DATA).length, matched: matched };
    build();
    setOn(on);
  }

  var matched = 0;
  function index() {
    var bl = C.blocks(document.body);
    for (var i = 0; i < bl.length; i++) {
      var b = bl[i], ss = C.sentences(b.text), hits = [];
      for (var j = 0; j < ss.length; j++) {
        var g = DATA[C.hash(ss[j].key)];
        if (g) hits.push({ s: ss[j].s, e: ss[j].e, g: g });
      }
      if (!hits.length) continue;
      matched += hits.length;
      b.hits = hits;
      for (var k = 0; k < b.parts.length; k++) nodeIndex.set(b.parts[k].node, { b: b, start: b.parts[k].start });
    }
  }

  // ─── UI ────────────────────────────────────────────────────────────────────

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function build() {
    var css = el('style');
    css.textContent =
      '.gl-tip{position:fixed;z-index:10000;max-width:min(440px,calc(100vw - 32px));background:#111;color:#f2f2f2;border-radius:8px;padding:12px 14px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);font:13px/1.55 -apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;display:none;text-align:left}' +
      '.gl-tip.show{display:block}' +
      '.gl-en{font:14.5px/1.55 Poppins,-apple-system,sans-serif;color:#fff;margin:0 0 8px;display:flex;gap:8px;align-items:flex-start}' +
      '.gl-en span{flex:1}' +
      '.gl-say{flex:none;background:none;border:1px solid #444;color:#bbb;border-radius:4px;font-size:11px;padding:1px 6px;cursor:pointer;margin-top:2px}' +
      '.gl-say:hover{color:#fff;border-color:#888}' +
      '.gl-x{list-style:none;margin:0;padding:8px 0 0;border-top:1px solid #2a2a2a}' +
      '.gl-x li{margin:0 0 6px;padding:0}' +
      '.gl-row{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px}' +
      '.gl-jp{color:#aaa}' +
      '.gl-arrow{color:#555}' +
      '.gl-term{font-family:Poppins,-apple-system,sans-serif;font-weight:600;color:#fff}' +
      '.gl-type{font-size:10.5px;color:#111;background:#9ad0ff;border-radius:3px;padding:0 5px}' +
      '.gl-type.i{background:#ffd27a}.gl-type.p{background:#b6e3a8}' +
      '.gl-yg{font-size:11px;color:#9ad0ff;text-decoration:none;border-bottom:1px solid rgba(154,208,255,.4)}' +
      '.gl-yg:hover{color:#fff}' +
      '.gl-note{color:#999;font-size:12px;margin:2px 0 0}' +
      '.gl-dock{position:fixed;left:16px;bottom:76px;z-index:9997;display:flex;flex-direction:column;gap:6px;align-items:flex-start;opacity:.85}' +
      '.gl-dock:hover{opacity:1}' +
      '.gl-toggle{background:#111;color:#fff;border:1px solid #333;border-radius:999px;font:600 11px Poppins,-apple-system,sans-serif;padding:6px 11px;cursor:pointer}' +
      '.gl-toggle.off{background:#fff;color:#777;border-color:#ccc}' +
      '.gl-voice,.gl-rate{max-width:min(220px,calc(100vw - 48px));background:#111;color:#bbb;border:1px solid #333;border-radius:6px;font:11px/1.3 -apple-system,"Hiragino Sans",sans-serif;padding:4px 6px;cursor:pointer}' +
      '.gl-voice:focus,.gl-rate:focus{outline:1px solid #666;color:#fff}' +
      '.gl-rate{max-width:72px}' +
      '.gl-tts-row{display:flex;gap:6px;align-items:center;flex-wrap:wrap}' +
      '.gl-tts-note{font:10px/1.3 -apple-system,"Hiragino Sans",sans-serif;color:#999;max-width:min(220px,calc(100vw - 48px));display:none}' +
      '.gl-tip .gl-voice{margin-top:6px;max-width:100%;width:100%}' +
      '::highlight(gl){background-color:rgba(255,210,122,.38)}' +
      '@media print{.gl-tip,.gl-dock{display:none!important}}';
    document.head.appendChild(css);

    tip = el('div', 'gl-tip');
    tip.setAttribute('role', 'tooltip');
    document.body.appendChild(tip);
    tip.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
    tip.addEventListener('mouseleave', function () { if (!pinned) hideSoon(); });

    var dock = el('div', 'gl-dock');
    toggle = el('button', 'gl-toggle');
    toggle.type = 'button';
    toggle.title = '英語の表示を切り替える';
    toggle.addEventListener('click', function () { setOn(!on); });
    var ttsRow = el('div', 'gl-tts-row');
    voiceSel = el('select', 'gl-voice');
    voiceSel.title = '読み上げの声';
    voiceSel.addEventListener('change', function () {
      try { localStorage.setItem('gl.voice', voiceSel.value); } catch (e) {}
      ttsUpdateNote();
      if (ttsIsKokoroKey(voiceSel.value) && !_kokoroFailed) {
        // Selecting Kokoro starts model load (no download on mere page view).
        ttsLoadKokoro().then(function (ctrl) {
          return ctrl.ensureModel(ttsKokoroSlow());
        }).catch(function () {
          _kokoroFailed = true;
          ttsUpdateNote();
        });
      }
      ttsRefreshVoice();
    });
    voiceSel.addEventListener('click', function (e) { e.stopPropagation(); });
    rateSel = el('select', 'gl-rate');
    rateSel.title = '読み上げ速度';
    rateSel.addEventListener('change', function () {
      try { localStorage.setItem('gl.rate', rateSel.value); } catch (e) {}
    });
    rateSel.addEventListener('click', function (e) { e.stopPropagation(); });
    ttsNote = el('div', 'gl-tts-note');
    ttsRow.appendChild(voiceSel);
    ttsRow.appendChild(rateSel);
    dock.appendChild(toggle);
    dock.appendChild(ttsRow);
    dock.appendChild(ttsNote);
    document.body.appendChild(dock);
    ttsFillVoiceSel();
    ttsFillRateSel();

    if (canHL) { hl = new Highlight(); CSS.highlights.set('gl', hl); }

    var raf = 0, last = null;
    document.addEventListener('mousemove', function (e) {
      last = e;
      if (!raf) raf = requestAnimationFrame(function () { raf = 0; onMove(last); });
    }, { passive: true });
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    window.addEventListener('scroll', hide, { passive: true });
  }

  function setOn(v) {
    on = v;
    try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {}
    toggle.textContent = v ? 'EN on' : 'EN off';
    toggle.classList.toggle('off', !v);
    if (!v) hide();
  }

  // ─── hit testing ───────────────────────────────────────────────────────────

  function caretAt(x, y) {
    if (document.caretPositionFromPoint) {
      var p = document.caretPositionFromPoint(x, y);
      return p && { node: p.offsetNode, offset: p.offset };
    }
    if (document.caretRangeFromPoint) {
      var r = document.caretRangeFromPoint(x, y);
      return r && { node: r.startContainer, offset: r.startOffset };
    }
    return null;
  }

  // Returns {b, h} for the sentence under (x, y), or null when the point is
  // in a margin rather than on the text itself.
  function hitAt(x, y) {
    var c = caretAt(x, y);
    if (!c || !c.node || c.node.nodeType !== 3) return null;
    var info = nodeIndex.get(c.node);
    if (!info) return null;
    var len = c.node.nodeValue.length;
    var hit = false;
    for (var d = -1; d <= 0 && !hit; d++) {
      var o = c.offset + d;
      if (o < 0 || o >= len) continue;
      var r = document.createRange();
      r.setStart(c.node, o); r.setEnd(c.node, o + 1);
      var rs = r.getClientRects();
      for (var i = 0; i < rs.length; i++) {
        var q = rs[i];
        if (x >= q.left - 2 && x <= q.right + 2 && y >= q.top - 2 && y <= q.bottom + 2) { hit = true; break; }
      }
    }
    if (!hit) return null;
    var pos = info.start + c.offset;
    var hs = info.b.hits;
    for (var j = 0; j < hs.length; j++) if (pos >= hs[j].s && pos <= hs[j].e) return { b: info.b, h: hs[j] };
    return null;
  }

  function point(b, pos) {
    var ps = b.parts;
    for (var i = ps.length - 1; i >= 0; i--) {
      if (pos >= ps[i].start) {
        var n = ps[i].node;
        return { node: n, offset: Math.min(pos - ps[i].start, n.nodeValue.length) };
      }
    }
    return { node: ps[0].node, offset: 0 };
  }

  function rangeOf(b, h) {
    var a = point(b, h.s), z = point(b, h.e), r = document.createRange();
    try { r.setStart(a.node, a.offset); r.setEnd(z.node, z.offset); } catch (e) { return null; }
    return r;
  }

  function onMove(e) {
    if (!on || pinned || e.buttons) return;
    if (tip.contains(e.target)) return;
    var t = hitAt(e.clientX, e.clientY);
    if (t && cur && t.h === cur.h) { clearTimeout(hideTimer); return; }
    clearTimeout(showTimer);
    if (!t) { if (cur) hideSoon(); return; }
    showTimer = setTimeout(function () { show(t, e.clientX, e.clientY); }, cur ? 60 : 280);
  }

  function onClick(e) {
    if (!on) return;
    if (tip.contains(e.target)) return;
    if (e.target.closest && e.target.closest('a,button,input,select,textarea,label,summary')) return;
    var sel = window.getSelection && String(window.getSelection());
    if (sel) return;
    var t = hitAt(e.clientX, e.clientY);
    if (!t) { if (pinned) hide(); return; }
    // A tap or click pins the card so its links can be used on touch screens.
    show(t, e.clientX, e.clientY);
    pinned = true;
  }

  // ─── card ──────────────────────────────────────────────────────────────────

  function youglish(term) {
    var q = term.replace(/\([^)]*\)/g, ' ').replace(/\.\.\.|…|~|〜/g, ' ').replace(/\b(sb|sth|someone|something|one's)\b/gi, ' ').replace(/\s+/g, ' ').trim();
    return 'https://youglish.com/pronounce/' + encodeURIComponent(q || term) + '/english';
  }

  function say(text, btn) {
    var active = _ttsText === text && (_ttsStatus === 'speaking' || _ttsStatus === 'loading' ||
      (window.speechSynthesis && (speechSynthesis.speaking || speechSynthesis.pending)));
    if (active) {
      ttsStopSpeech();
      return;
    }
    ttsStopSpeech();
    _ttsBtn = btn || null;
    if (ttsWantsKokoro()) {
      ttsSayKokoro(text, btn);
    } else {
      ttsSaySpeech(text, btn);
    }
  }

  function fill(t) {
    var g = t.h.g, text = t.b.text;
    tip.textContent = '';
    var en = el('p', 'gl-en');
    en.appendChild(el('span', null, g[0]));
    var speaking = _ttsText === g[0] && (_ttsStatus === 'speaking' || _ttsStatus === 'loading' ||
      (window.speechSynthesis && (speechSynthesis.speaking || speechSynthesis.pending)));
    var label = '読み上げ';
    if (speaking && _ttsStatus === 'loading') label = '音声モデルを読み込み中 …';
    else if (speaking) label = '停止';
    var b = el('button', 'gl-say', label);
    b.type = 'button';
    b.addEventListener('click', function (ev) { ev.stopPropagation(); say(g[0], b); });
    if (speaking) _ttsBtn = b;
    en.appendChild(b);
    tip.appendChild(en);
    var xs = g[1] || [];
    if (!xs.length) return;
    var ul = el('ul', 'gl-x');
    for (var i = 0; i < xs.length; i++) {
      var x = xs[i];
      var li = el('li'), row = el('div', 'gl-row');
      row.appendChild(el('span', 'gl-jp', text.substr(t.h.s + x[0], x[1])));
      row.appendChild(el('span', 'gl-arrow', '→'));
      row.appendChild(el('span', 'gl-term', x[2]));
      row.appendChild(el('span', 'gl-type ' + x[3], TYPE[x[3]] || '単語'));
      var a = el('a', 'gl-yg', '発音を聞く');
      a.href = youglish(x[2]);
      a.target = '_blank';
      a.rel = 'noopener';
      row.appendChild(a);
      li.appendChild(row);
      if (x[4]) li.appendChild(el('p', 'gl-note', x[4]));
      ul.appendChild(li);
    }
    tip.appendChild(ul);
  }

  function show(t, mx, my) {
    clearTimeout(hideTimer);
    cur = t;
    fill(t);
    // Card open: if the model is already in Cache Storage, warm the worker and
    // prefetch the first chunk so the 読み上げ click is fast. No download if uncached.
    ttsWarmIfCached(t.h && t.h.g ? t.h.g[0] : null);
    var r = rangeOf(t.b, t.h);
    if (hl) { hl.clear(); if (r) hl.add(r); }
    tip.classList.add('show');
    // Place the card under the line the pointer is on, flipped above near the
    // bottom of the screen.
    var line = null;
    if (r) {
      var rs = r.getClientRects();
      for (var i = 0; i < rs.length; i++) if (my >= rs[i].top - 2 && my <= rs[i].bottom + 2) { line = rs[i]; break; }
      if (!line && rs.length) line = rs[rs.length - 1];
    }
    var top = (line ? line.bottom : my) + 8;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    if (top + h > window.innerHeight - 72) top = (line ? line.top : my) - h - 8;
    if (top < 60) top = 60;
    var left = Math.max(16, Math.min(mx - 40, window.innerWidth - w - 16));
    tip.style.top = top + 'px';
    tip.style.left = left + 'px';
  }

  function hideSoon() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 220);
  }

  function hide() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    pinned = false;
    cur = null;
    if (tip) tip.classList.remove('show');
    if (hl) hl.clear();
  }
})();
