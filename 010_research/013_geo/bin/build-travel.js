#!/usr/bin/env node
// data/travel.json -> data/travel.js
// 真実のソースは data/travel.json。区間の追加・修正はそちらを編集してから本スクリプトを実行する。
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'data', 'travel.json');
const out = path.join(root, 'data', 'travel.js');

const data = JSON.parse(fs.readFileSync(src, 'utf8'));
const nSeg = data.trips.reduce((a, t) => a + t.segments.length, 0);
const nCty = new Set(data.trips.flatMap(t => t.countries)).size;

const js = [
  '// 自動生成ファイル — 直接編集しない。真実のソースは data/travel.json。',
  '// 区間の追加は bin/build-travel.js 経由。',
  `// 生成時点の規模: 渡航${data.trips.length}回 / 区間${nSeg} / 国と地域${nCty} / ノード${Object.keys(data.nodes).length}`,
  'window.TRAVEL = ' + JSON.stringify(data, null, 1) + ';',
  ''
].join('\n');

fs.writeFileSync(out, js, 'utf8');
console.log(`data/travel.js  ${js.length.toLocaleString()}B  trips=${data.trips.length} segments=${nSeg} countries=${nCty}`);
