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
  var tip, toggle, cur = null, pinned = false, hideTimer = 0, showTimer = 0, hl = null;
  var canHL = typeof Highlight !== 'undefined' && window.CSS && CSS.highlights;

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
      '.gl-toggle{position:fixed;left:16px;bottom:76px;z-index:9997;background:#111;color:#fff;border:1px solid #333;border-radius:999px;font:600 11px Poppins,-apple-system,sans-serif;padding:6px 11px;cursor:pointer;opacity:.85}' +
      '.gl-toggle.off{background:#fff;color:#777;border-color:#ccc}' +
      '.gl-toggle:hover{opacity:1}' +
      '::highlight(gl){background-color:rgba(255,210,122,.38)}' +
      '@media print{.gl-tip,.gl-toggle{display:none!important}}';
    document.head.appendChild(css);

    tip = el('div', 'gl-tip');
    tip.setAttribute('role', 'tooltip');
    document.body.appendChild(tip);
    tip.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
    tip.addEventListener('mouseleave', function () { if (!pinned) hideSoon(); });

    toggle = el('button', 'gl-toggle');
    toggle.type = 'button';
    toggle.title = '英語の表示を切り替える';
    toggle.addEventListener('click', function () { setOn(!on); });
    document.body.appendChild(toggle);

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

  function say(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }

  function fill(t) {
    var g = t.h.g, text = t.b.text;
    tip.textContent = '';
    var en = el('p', 'gl-en');
    en.appendChild(el('span', null, g[0]));
    var b = el('button', 'gl-say', '読み上げ');
    b.type = 'button';
    b.addEventListener('click', function (ev) { ev.stopPropagation(); say(g[0]); });
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
