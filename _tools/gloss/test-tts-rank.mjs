#!/usr/bin/env node
// Asserts English TTS voice ranking used by _gloss/gloss.js and 028_english.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const glossPath = path.join(root, '_gloss/gloss.js');
const engPath = path.join(root, '020_personal/028_english/index.html');

function extractBlock(src, file) {
  const start = src.indexOf('// tts-rank:start');
  const end = src.indexOf('// tts-rank:end');
  if (start < 0 || end < 0 || end < start) {
    throw new Error('tts-rank markers missing in ' + file);
  }
  return src.slice(start, end + '// tts-rank:end'.length);
}

const glossSrc = fs.readFileSync(glossPath, 'utf8');
const engSrc = fs.readFileSync(engPath, 'utf8');
const block = extractBlock(glossSrc, glossPath);
const engBlock = extractBlock(engSrc, engPath);
if (block !== engBlock) {
  console.error('FAIL: tts-rank block in 028_english differs from gloss.js');
  process.exit(1);
}

const fn = new Function(block + '\n; return { ttsRankVoices: ttsRankVoices, ttsPickFrom: ttsPickFrom };');
const { ttsRankVoices } = fn();

function V(name, lang) { return { name: name, lang: lang }; }

function pick(list) {
  const ranked = ttsRankVoices(list);
  return ranked.length ? ranked[0] : null;
}

function assertPick(label, list, expectedName) {
  const got = pick(list);
  const name = got ? got.name : null;
  if (name !== expectedName) {
    console.error('FAIL:', label);
    console.error('  expected:', expectedName);
    console.error('  got:     ', name);
    console.error('  ranked:  ', ttsRankVoices(list).slice(0, 5).map(function (v) { return v.name; }));
    process.exit(1);
  }
  console.log('OK:', label, '->', name);
}

// macOS Brave voices as on this machine (Albert first; OS novelty voices included).
const macBrave = [
  V('Albert', 'en-US'),
  V('Aman', 'en-IN'),
  V('Bad News', 'en-US'),
  V('Bahh', 'en-US'),
  V('Bells', 'en-US'),
  V('Boing', 'en-US'),
  V('Bubbles', 'en-US'),
  V('Cellos', 'en-US'),
  V('Daniel (英語（イギリス）)', 'en-GB'),
  V('Eddy (英語（アメリカ）)', 'en-US'),
  V('Eddy (英語（イギリス）)', 'en-GB'),
  V('Flo (英語（アメリカ）)', 'en-US'),
  V('Flo (英語（イギリス）)', 'en-GB'),
  V('Fred', 'en-US'),
  V('Good News', 'en-US'),
  V('Grandma (英語（アメリカ）)', 'en-US'),
  V('Grandma (英語（イギリス）)', 'en-GB'),
  V('Grandpa (英語（アメリカ）)', 'en-US'),
  V('Grandpa (英語（イギリス）)', 'en-GB'),
  V('Jester', 'en-US'),
  V('Junior', 'en-US'),
  V('Karen', 'en-AU'),
  V('Kathy', 'en-US'),
  V('Moira', 'en-IE'),
  V('Organ', 'en-US'),
  V('Ralph', 'en-US'),
  V('Reed (英語（アメリカ）)', 'en-US'),
  V('Reed (英語（イギリス）)', 'en-GB'),
  V('Rishi', 'en-IN'),
  V('Rocko (英語（アメリカ）)', 'en-US'),
  V('Rocko (英語（イギリス）)', 'en-GB'),
  V('Samantha (英語（アメリカ）)', 'en-US'),
  V('Sandy (英語（アメリカ）)', 'en-US'),
  V('Sandy (英語（イギリス）)', 'en-GB'),
  V('Shelley (英語（アメリカ）)', 'en-US'),
  V('Shelley (英語（イギリス）)', 'en-GB'),
  V('Superstar', 'en-US'),
  V('Tara', 'en-IN'),
  V('Tessa', 'en-ZA'),
  V('Trinoids', 'en-US'),
  V('Whisper', 'en-US'),
  V('Wobble', 'en-US'),
  V('Zarvox', 'en-US')
];
assertPick('macOS Brave (this machine)', macBrave, 'Daniel (英語（イギリス）)');

assertPick(
  'macOS with Evan (Enhanced)',
  macBrave.concat([V('Evan (Enhanced)', 'en-US')]),
  'Evan (Enhanced)'
);

assertPick(
  'Windows Edge neural',
  [
    V('Microsoft Andrew Online (Natural) - English (United States)', 'en-US'),
    V('Microsoft Aria Online (Natural) - English (United States)', 'en-US'),
    V('Microsoft David - English (United States)', 'en-US')
  ],
  'Microsoft Andrew Online (Natural) - English (United States)'
);

assertPick(
  'Chrome Google voices',
  [
    V('Google US English', 'en-US'),
    V('Google UK English Female', 'en-GB'),
    V('Google UK English Male', 'en-GB')
  ],
  'Google UK English Male'
);

assertPick(
  'novelty + Samantha only',
  [
    V('Albert', 'en-US'),
    V('Bahh', 'en-US'),
    V('Zarvox', 'en-US'),
    V('Samantha', 'en-US')
  ],
  'Samantha'
);

console.log('All TTS rank tests passed.');
