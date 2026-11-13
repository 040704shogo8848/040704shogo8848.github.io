#!/usr/bin/env node
// Turn bare http(s) URLs in HTML text nodes into <a> links.
//
//   node _tools/linkify-urls.mjs [--check] <file>...
//
// --check: do not write; list files that still have bare URLs; exit 1 if any.
// Idempotent: a second pass produces no further changes.
//
// Skips: inside existing <a>, tag attributes, <script> <style> <textarea>
// <title> <head> <svg> <pre> <code>, and HTML comments.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKIP_TAGS = new Set([
  'a', 'script', 'style', 'textarea', 'title', 'head', 'svg', 'pre', 'code',
]);

const TRAIL_PUNCT = new Set(['.', ',', ';', ':', '!', '?']);

function isFullWidth(ch) {
  if (!ch) return false;
  const c = ch.codePointAt(0);
  // CJK, fullwidth forms, and other non-ASCII that should end a URL
  return c >= 0x80;
}

function isUrlStop(ch) {
  if (!ch) return true;
  if (/\s/.test(ch)) return true;
  if (ch === '<' || ch === '"' || ch === "'") return true;
  if (isFullWidth(ch)) return true;
  return false;
}

/** Trim trailing punctuation / unmatched closing paren from a candidate URL. */
function trimUrl(raw) {
  let url = raw;
  while (url.length) {
    const last = url[url.length - 1];
    if (TRAIL_PUNCT.has(last)) {
      url = url.slice(0, -1);
      continue;
    }
    if (last === ')') {
      const opens = (url.match(/\(/g) || []).length;
      const closes = (url.match(/\)/g) || []).length;
      if (closes > opens) {
        url = url.slice(0, -1);
        continue;
      }
    }
    break;
  }
  return url;
}

function linkifyText(text) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    const rest = text.slice(i);
    const m = rest.match(/https?:\/\//i);
    if (!m) {
      out += rest;
      break;
    }
    const start = i + m.index;
    out += text.slice(i, start);
    let j = start + m[0].length;
    while (j < text.length && !isUrlStop(text[j])) j++;
    const raw = text.slice(start, j);
    const url = trimUrl(raw);
    if (url.length <= m[0].length) {
      // Scheme alone or empty after trim — leave as text
      out += raw;
      i = j;
      continue;
    }
    const trailing = raw.slice(url.length);
    out += `<a href="${url}" target="_blank" rel="noopener">${url}</a>`;
    out += trailing;
    i = j;
  }
  return out;
}

function tagNameAt(html, lt) {
  // lt points at '<'
  let i = lt + 1;
  if (html[i] === '/') i++;
  const start = i;
  while (i < html.length && /[A-Za-z0-9:-]/.test(html[i])) i++;
  return html.slice(start, i).toLowerCase();
}

function findTagEnd(html, lt) {
  // Find the '>' that ends this tag, respecting quotes in attributes.
  let i = lt + 1;
  let quote = null;
  while (i < html.length) {
    const ch = html[i];
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === '>') {
      return i;
    }
    i++;
  }
  return html.length - 1;
}

function skipElement(html, openLt, name) {
  // openLt is '<' of the opening tag. Return index just past the matching </name>.
  const openEnd = findTagEnd(html, openLt);
  const openTag = html.slice(openLt, openEnd + 1);
  if (/\/>$/.test(openTag.replace(/\s+$/, '')) || /\/\s*>$/.test(openTag)) {
    return openEnd + 1;
  }
  // Walk forward, tracking depth of the same tag name.
  let i = openEnd + 1;
  let depth = 1;
  const openRe = new RegExp(`<${name}\\b`, 'i');
  const closeRe = new RegExp(`</${name}\\s*>`, 'i');
  while (i < html.length && depth > 0) {
    if (html.startsWith('<!--', i)) {
      const end = html.indexOf('-->', i + 4);
      i = end === -1 ? html.length : end + 3;
      continue;
    }
    if (html[i] !== '<') {
      i++;
      continue;
    }
    const slice = html.slice(i);
    const closeM = slice.match(closeRe);
    if (closeM && closeM.index === 0) {
      depth--;
      i += closeM[0].length;
      continue;
    }
    const openM = slice.match(openRe);
    if (openM && openM.index === 0 && !slice.startsWith(`</`)) {
      // Could be opening tag — confirm not a close
      if (slice[1] !== '/') {
        const end = findTagEnd(html, i);
        const tag = html.slice(i, end + 1);
        if (!/\/\s*>$/.test(tag)) depth++;
        i = end + 1;
        continue;
      }
    }
    // Other tag or text starting with <
    if (slice.startsWith('</') || /<[A-Za-z]/.test(slice)) {
      i = findTagEnd(html, i) + 1;
    } else {
      i++;
    }
  }
  return i;
}

/**
 * Linkify bare http(s) URLs in HTML text nodes.
 * @param {string} html
 * @returns {string}
 */
export function linkifyHtml(html) {
  if (!html || !/https?:\/\//i.test(html)) return html;
  let out = '';
  let i = 0;
  while (i < html.length) {
    if (html.startsWith('<!--', i)) {
      const end = html.indexOf('-->', i + 4);
      const stop = end === -1 ? html.length : end + 3;
      out += html.slice(i, stop);
      i = stop;
      continue;
    }
    if (html[i] === '<') {
      const name = tagNameAt(html, i);
      const isClose = html[i + 1] === '/';
      if (!isClose && SKIP_TAGS.has(name)) {
        const stop = skipElement(html, i, name);
        out += html.slice(i, stop);
        i = stop;
        continue;
      }
      const end = findTagEnd(html, i);
      out += html.slice(i, end + 1);
      i = end + 1;
      continue;
    }
    // Text node
    let j = i;
    while (j < html.length && html[j] !== '<') j++;
    out += linkifyText(html.slice(i, j));
    i = j;
  }
  return out;
}

async function main(argv) {
  const check = argv.includes('--check');
  const files = argv.filter((a) => a !== '--check');
  if (!files.length) {
    console.error('usage: node _tools/linkify-urls.mjs [--check] <file>...');
    process.exit(2);
  }

  let changed = 0;
  let urls = 0;
  const stale = [];

  for (const f of files) {
    const src = await readFile(f, 'utf8');
    const next = linkifyHtml(src);
    if (next === src) continue;
    const before = (src.match(/https?:\/\//gi) || []).length;
    const afterLinks = (next.match(/<a href="https?:\/\//gi) || []).length;
    const beforeLinks = (src.match(/<a href="https?:\/\//gi) || []).length;
    urls += Math.max(0, afterLinks - beforeLinks);
    if (check) {
      stale.push(f);
    } else {
      await writeFile(f, next);
      changed++;
      console.log(`  linkified  ${path.relative(process.cwd(), f)}  (+${afterLinks - beforeLinks} of ${before} http)`);
    }
  }

  if (check) {
    for (const f of stale) console.error(`  needs linkify  ${f}`);
    console.log(`linkify check: ${files.length} files, ${stale.length} stale`);
    process.exit(stale.length ? 1 : 0);
  }

  console.log(`linkify: ${files.length} files, ${changed} changed, ~${urls} URLs`);
}

const isMain = process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  await main(process.argv.slice(2));
}
