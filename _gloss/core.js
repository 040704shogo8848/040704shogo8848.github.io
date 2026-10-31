// Sentence segmentation shared by the page runtime (gloss.js) and the build
// tools (_tools/gloss/*.mjs). Both sides must cut a page into exactly the same
// sentences, because the data files are keyed by a hash of each sentence.
// Keep this file free of browser-only and Node-only APIs.
(function (g) {
  // Elements that own the text inside them. Everything else (a, b, span, ...)
  // is transparent, so a sentence can run across inline markup.
  var BLOCK = {
    P: 1, LI: 1, TD: 1, TH: 1, DT: 1, DD: 1, BLOCKQUOTE: 1, FIGCAPTION: 1, CAPTION: 1,
    SUMMARY: 1, DIV: 1, SECTION: 1, ARTICLE: 1, ASIDE: 1, HEADER: 1, FOOTER: 1, MAIN: 1,
    BODY: 1, LABEL: 1, LEGEND: 1, BUTTON: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
    UL: 1, OL: 1, DL: 1, TABLE: 1, TR: 1, THEAD: 1, TBODY: 1, FIGURE: 1, DETAILS: 1, FORM: 1, FIELDSET: 1
  };
  // Subtrees that never carry glossable prose.
  var SKIP_TAG = {
    SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, SVG: 1, svg: 1, MATH: 1, math: 1, CODE: 1, PRE: 1,
    TEXTAREA: 1, SELECT: 1, OPTION: 1, RT: 1, RP: 1, NAV: 1, IFRAME: 1, CANVAS: 1, KBD: 1
  };
  // Source lists, the shared nav, math render output and sort arrows (.ar).
  var SKIP_CLASS = /(^|\s)(tb-src|src|sources|srcnote|refs|mq-src|snav[\w-]*|katex-mathml|katex-html|gl-[\w-]+|no-gloss|ar)(\s|$)/;

  function skipped(el) {
    if (SKIP_TAG[el.tagName]) return true;
    var c = el.getAttribute && el.getAttribute('class');
    if (c && SKIP_CLASS.test(c)) return true;
    if (el.getAttribute && el.getAttribute('id') === 'sources') return true;
    return false;
  }

  // Walks the document and returns blocks: [{el, parts:[{node, start}], text}].
  // `text` is the concatenation of the block's own text nodes; <br> adds "\n".
  function blocks(root) {
    var out = [];
    function walk(el, owner) {
      for (var n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3) {
          if (!owner.cur) continue;
          owner.parts.push({ node: n, start: owner.text.length });
          owner.text += n.nodeValue;
        } else if (n.nodeType === 1) {
          if (skipped(n)) continue;
          if (n.tagName === 'BR') { owner.text += '\n'; continue; }
          if (BLOCK[n.tagName]) {
            var b = { el: n, parts: [], text: '', cur: true };
            out.push(b);
            walk(n, b);
            // Text after a nested block still belongs to the outer one, but
            // must not glue onto the text before it.
            owner.text += '\n';
          } else walk(n, owner);
        }
      }
    }
    var top = { el: root, parts: [], text: '', cur: true };
    out.push(top);
    walk(root, top);
    return out.filter(function (b) { return /[぀-ヿ㐀-鿿]/.test(b.text); });
  }

  var JP = /[぀-ゟ゠-ヿ㐀-䶿一-鿿々]/g;
  // Sentence end: 。！？!? (plus closing brackets), or a line break.
  var END = /[。！？!?][」』）)】〕"”’]*|\n/g;

  // Splits block text into sentences: [{s, e, key}] with offsets into text.
  function sentences(text) {
    var out = [], last = 0, m;
    END.lastIndex = 0;
    function push(a, b) {
      while (a < b && /\s/.test(text[a])) a++;
      while (b > a && /\s/.test(text[b - 1])) b--;
      if (b <= a) return;
      var raw = text.slice(a, b);
      var jp = raw.replace(/[0-9０-９,，.．%％]/g, '').match(JP);
      if (!jp || jp.length < 3) return;
      var key = norm(raw);
      if (key.length > 400) return;
      out.push({ s: a, e: b, key: key });
    }
    while ((m = END.exec(text))) {
      var stop = m[0] === '\n' ? m.index : m.index + m[0].length;
      push(last, stop);
      last = m.index + m[0].length;
    }
    push(last, text.length);
    return out;
  }

  function norm(s) { return s.replace(/\s+/g, ''); }

  // FNV-1a over UTF-16 code units, base36.
  function hash(s) {
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(36);
  }

  g.GlossCore = { blocks: blocks, sentences: sentences, norm: norm, hash: hash };
})(typeof globalThis !== 'undefined' ? globalThis : this);
