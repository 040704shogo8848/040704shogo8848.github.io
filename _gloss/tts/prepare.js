// Clause split for Kokoro chunk pipeline.
// Chunks are either { text } or (later) { phonemes }.
//
// Kokoro-82M silently truncates at ~509 phoneme tokens when generate() uses
// truncation:true. Number/year expansion inflates tokens, so keep chunks short.

/** Soft word budget for body chunks (well under 509 phoneme tokens). */
const WORD_SOFT = 16;
/** Hard character budget; number-heavy text still fits under the token cap. */
const CHAR_SOFT = 110;
/** First chunk: short so audio can start while the rest generates. */
const FIRST_WORDS_MIN = 5;
const FIRST_WORDS_MAX = 8;
const FIRST_CHARS_MAX = 52;

function wordCount(s) {
  const m = String(s || '').trim().match(/\S+/g);
  return m ? m.length : 0;
}

function wordsOf(s) {
  return String(s || '').trim().match(/\S+/g) || [];
}

/**
 * True when a period is an abbreviation that must not end a clause.
 * Covers "b. 1978" (born) and common English titles.
 */
function isProtectedAbbrev(text, periodIdx) {
  const before = text.slice(0, periodIdx);
  const after = text.slice(periodIdx + 1);
  // "b." / "c." / "ca." before a year
  if (/\b(b|c|ca|approx|est)\s*$/i.test(before) && /^\s*\d{3,4}\b/.test(after)) {
    return true;
  }
  // Mr. Mrs. Ms. Dr. Jr. Sr. St. vs. etc. U.S. e.g. i.e.
  if (/\b(Mr|Mrs|Ms|Dr|Jr|Sr|St|vs|etc|eg|e\.g|ie|i\.e|US|U\.S)\s*$/i.test(before)) {
    return true;
  }
  // Single capital initial: "A. Smith" — keep with following name token
  if (/[A-Z]\s*$/.test(before) && /^\s*[A-Z]/.test(after)) {
    return true;
  }
  return false;
}

/**
 * Split on sentence punctuation + whitespace, but not on protected abbrevs.
 * @param {string} raw
 * @returns {string[]}
 */
function splitClauses(raw) {
  const text = String(raw || '');
  if (!text) return [];
  const out = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== '.' && ch !== '!' && ch !== '?' && ch !== ';' && ch !== ':') continue;
    if (isProtectedAbbrev(text, i)) continue;
    // Require whitespace (or end) after the mark so "FY2030" stays intact.
    const next = text[i + 1];
    if (next != null && !/\s/.test(next)) continue;
    let end = i + 1;
    while (end < text.length && /\s/.test(text[end])) end++;
    const piece = text.slice(start, end).trim();
    if (piece) out.push(piece);
    start = end;
    i = end - 1;
  }
  const tail = text.slice(start).trim();
  if (tail) out.push(tail);
  return out.length ? out : [text.trim()].filter(Boolean);
}

function overBudget(s) {
  return wordCount(s) > WORD_SOFT || String(s).length > CHAR_SOFT;
}

/**
 * Split a long piece at commas, then at word boundaries.
 * @param {string} piece
 * @returns {string[]}
 */
function splitToBudget(piece) {
  const trimmed = String(piece || '').trim();
  if (!trimmed) return [];
  if (!overBudget(trimmed)) return [trimmed];

  // Prefer comma boundaries.
  const commaParts = trimmed.split(/(?<=,)\s+/).map((s) => s.trim()).filter(Boolean);
  const seeds = commaParts.length > 1 ? commaParts : [trimmed];

  const out = [];
  let buf = '';
  function flush() {
    if (buf) {
      out.push(buf);
      buf = '';
    }
  }
  function pushWordBounded(segment) {
    if (!overBudget(segment)) {
      const next = buf ? buf + ' ' + segment : segment;
      if (buf && overBudget(next)) {
        flush();
        buf = segment;
      } else {
        buf = next;
      }
      return;
    }
    const ws = wordsOf(segment);
    for (let i = 0; i < ws.length; i++) {
      const w = ws[i];
      const next = buf ? buf + ' ' + w : w;
      if (buf && overBudget(next)) {
        flush();
        buf = w;
      } else {
        buf = next;
      }
    }
  }
  for (const seg of seeds) pushWordBounded(seg);
  flush();
  return out.length ? out : [trimmed];
}

/**
 * Peel a short first chunk (~5–8 words / ≤52 chars) at a comma or word boundary.
 * @param {string[]} chunks text strings
 * @returns {string[]}
 */
function peelFirstShort(chunks) {
  if (!chunks.length) return chunks;
  const first = chunks[0];
  const wc = wordCount(first);
  if (wc <= FIRST_WORDS_MAX && first.length <= FIRST_CHARS_MAX) return chunks;

  const ws = wordsOf(first);
  // Prefer a comma cut inside [FIRST_WORDS_MIN, FIRST_WORDS_MAX] within char budget.
  let cut = -1;
  let joined = '';
  for (let i = 0; i < ws.length && i < FIRST_WORDS_MAX; i++) {
    joined = i === 0 ? ws[i] : joined + ' ' + ws[i];
    if (joined.length > FIRST_CHARS_MAX && i + 1 >= FIRST_WORDS_MIN) {
      cut = i; // previous word ended within budget
      if (cut < FIRST_WORDS_MIN) cut = i + 1;
      break;
    }
    if (i + 1 >= FIRST_WORDS_MIN && /,$/.test(ws[i]) && joined.length <= FIRST_CHARS_MAX) {
      cut = i + 1;
      break;
    }
  }
  if (cut < 0) {
    // Fall back: as many words as fit in FIRST_CHARS_MAX, at least FIRST_WORDS_MIN when possible.
    joined = '';
    cut = 0;
    for (let i = 0; i < ws.length && i < FIRST_WORDS_MAX; i++) {
      const next = i === 0 ? ws[i] : joined + ' ' + ws[i];
      if (i > 0 && next.length > FIRST_CHARS_MAX && i >= FIRST_WORDS_MIN) break;
      joined = next;
      cut = i + 1;
      if (joined.length >= FIRST_CHARS_MAX && cut >= FIRST_WORDS_MIN) break;
    }
    if (cut < 1) cut = Math.min(FIRST_WORDS_MIN, ws.length);
  }
  const head = ws.slice(0, cut).join(' ');
  const rest = ws.slice(cut).join(' ');
  const restChunks = rest ? splitToBudget(rest) : [];
  return [head].concat(restChunks, chunks.slice(1));
}

/**
 * @param {string} text
 * @returns {{ text: string }[]}
 */
export function prepare(text) {
  const raw = String(text || '').trim();
  if (!raw) return [];
  const clauses = splitClauses(raw);
  const pieces = clauses.length ? clauses : [raw];
  let parts = [];
  for (const piece of pieces) {
    parts = parts.concat(splitToBudget(piece));
  }
  parts = peelFirstShort(parts);
  // Final pass: enforce budget on anything peelFirstShort left oversized.
  const out = [];
  for (const p of parts) {
    for (const q of splitToBudget(p)) {
      if (q) out.push({ text: q });
    }
  }
  return out.length ? out : [{ text: raw }];
}

export default prepare;
