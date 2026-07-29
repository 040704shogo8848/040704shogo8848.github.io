#!/bin/bash
# ネットコンテンツの分析ページを一覧に追加する。
# 使い方: add-net.sh <page_html_path>   （エントリJSONは標準入力）
#   エントリの形は ~/.claude/skills/net-research/SKILL.md を参照。
#
# 並列で呼ばないこと。data/net.json は read-modify-write なので
# 同時実行するとエントリが消える。
set -euo pipefail

SEC="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$SEC/../.." && pwd)"
SRC="${1:-}"
[ -n "$SRC" ] && [ -f "$SRC" ] || { echo "page not found: $SRC" >&2; exit 1; }

BASE="$(basename "$SRC")"
mkdir -p "$SEC/pages"
if [ "$(cd "$(dirname "$SRC")" && pwd)/$BASE" != "$SEC/pages/$BASE" ]; then
  cp "$SRC" "$SEC/pages/$BASE"
fi

node "$ROOT/_tools/normalize-html.mjs" "$SEC/pages/$BASE"
node "$SEC/bin/update-net.js" "pages/$BASE"
node "$ROOT/_tools/build-nav.mjs" >/dev/null
node "$ROOT/_tools/leak-check.mjs" "$SEC/pages/$BASE"

cd "$ROOT"
git pull --rebase --autostash -q origin main || true
git add "$SEC/pages/$BASE" "$SEC/data" "$SEC/index.html"
git -c user.email="s.kubota@wander-lust.io" -c user.name="040704shogo8848" \
  commit -q -m "Add net research: $BASE" || { echo "nothing to commit"; }
git push -q origin main
echo "pushed -> https://040704shogo8848.github.io/010_research/015_net/"
