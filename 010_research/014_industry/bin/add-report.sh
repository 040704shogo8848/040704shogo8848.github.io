#!/bin/bash
# 業界構造マップ/レポートをハブに追加してGitHubへ反映する。
# 使い方: add-report.sh <report_html_path>   （エントリJSONは標準入力）
#   entry: {"title":"…","date":"YYYY-MM-DD","tags":["…"],"summary":"…","source":"…"}
#
# 並列実行しないこと。industry.json は read-modify-write なので、
# 複数プロセスから同時に呼ぶとエントリが消える。
set -euo pipefail

HUB="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$HUB/../.." && pwd)"
SRC="${1:-}"
[ -n "$SRC" ] && [ -f "$SRC" ] || { echo "report not found: $SRC" >&2; exit 1; }

BASE="$(basename "$SRC")"
mkdir -p "$HUB/reports"
if [ "$(cd "$(dirname "$SRC")" && pwd)/$BASE" != "$HUB/reports/$BASE" ]; then
  cp "$SRC" "$HUB/reports/$BASE"
fi

node "$ROOT/_tools/normalize-html.mjs" "$HUB/reports/$BASE"
node "$HUB/bin/update-industry.js" "reports/$BASE"
node "$ROOT/_tools/build-nav.mjs" >/dev/null

node "$ROOT/_tools/leak-check.mjs" "$HUB/reports/$BASE"

cd "$ROOT"
git pull --rebase --autostash -q origin main || true
git add "$HUB/reports/$BASE" "$HUB/data" "$HUB/index.html"
git -c user.email="s.kubota@wander-lust.io" -c user.name="040704shogo8848" \
  commit -q -m "Add industry report: $BASE" || { echo "nothing to commit"; }
git push -q origin main
echo "pushed -> https://040704shogo8848.github.io/010_research/014_industry/"
