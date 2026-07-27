#!/usr/bin/env node
// Wraps fragment HTML in a real document so pages render correctly on phones.
//
//   node _tools/normalize-html.mjs <file>...
//
// Idempotent: a file that already has <!doctype>, <html lang>, viewport and
// snav markers is left alone. Called from bin/add-report.sh so every report
// picks this up on the way in, not as a cleanup pass someone remembers to run.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: normalize-html.mjs <file>...');
  process.exit(1);
}

let fixed = 0;

for (const f of files) {
  let src = await readFile(f, 'utf8');
  const orig = src;

  const has = (re) => re.test(src);

  // Pull <title> and <style> out of the fragment so they can go in <head>.
  if (!has(/<!doctype/i)) {
    const title =
      src.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ||
      path.basename(f, '.html');

    // Everything that belongs in head: charset, title, style blocks.
    const heads = [];
    src = src.replace(/^\s*<meta\s+charset=[^>]*>\s*/i, '');
    src = src.replace(/<title>[\s\S]*?<\/title>\s*/i, '');
    src = src.replace(/<style>[\s\S]*?<\/style>\s*/gi, (m) => {
      heads.push(m.trim());
      return '';
    });

    src = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${heads.join('\n')}
</head>
<body>
<!-- snav:start --><!-- snav:end -->
${src.trim()}
</body>
</html>
`;
  }

  // Add anything still missing from an already-wrapped document.
  if (!has(/name=["']viewport["']/i))
    src = src.replace(/(<meta\s+charset=[^>]*>)/i, '$1\n<meta name="viewport" content="width=device-width, initial-scale=1">');

  if (!has(/<!--\s*snav:start\s*-->/))
    src = src.replace(/(<body[^>]*>)/i, '$1\n<!-- snav:start --><!-- snav:end -->');

  if (src !== orig) {
    await writeFile(f, src);
    console.log(`  normalized  ${path.relative(process.cwd(), f)}`);
    fixed++;
  }
}

console.log(`normalize: ${files.length} files, ${fixed} changed`);
