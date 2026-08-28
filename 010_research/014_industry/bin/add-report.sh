#!/bin/bash
# 業界構造マップ/レポートをハブに追加してGitHubへ反映する。
# 使い方: add-report.sh <report_html_path>   （エントリJSONは標準入力）
#   entry: {"title":"…","date":"YYYY-MM-DD","tags":["…"],"summary":"…","source":"…"}
#
# 並列実行しないこと。industry.json は read-modify-write なので、
# 複数プロセスから同時に呼ぶとエントリが消える。
#
# 失敗したら repo を元に戻す（2026-08-28 追加）。それまでは leak-check や
# build-nav が落ちると、reports/ にファイルが残り index.html と data/ が
# 書き換わった状態で終了していた。次に誰かが別のレポートで成功すると、
# その commit が前回の落ちたエントリを一緒に公開する。
# leak-check で止めた漏洩が、次の成功 push で公開される経路になっていた。
set -euo pipefail

HUB="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$HUB/../.." && pwd)"
SRC="${1:-}"
[ -n "$SRC" ] && [ -f "$SRC" ] || { echo "report not found: $SRC" >&2; exit 1; }

BASE="$(basename "$SRC")"
mkdir -p "$HUB/reports"

# 巻き戻しのために、このファイルが元からあったかを覚えておく。
NEW_FILE=0
[ -f "$HUB/reports/$BASE" ] || NEW_FILE=1

COMMITTED=0

rollback() {
    rc=$?
    [ "$rc" -eq 0 ] && return 0
    [ "$COMMITTED" -eq 1 ] && return 0
    echo "add-report: rc=$rc で失敗したので repo を戻す" >&2
    # このスクリプトが触るパスだけを戻す。`git checkout -- .` は他セッションの
    # 未コミット作業を消すので使わない。
    git -C "$ROOT" checkout -- "$HUB/index.html" "$HUB/data" 2>/dev/null || true
    [ "$NEW_FILE" -eq 1 ] && rm -f "$HUB/reports/$BASE"
    echo "add-report: 戻した。公開はしていない。" >&2
    return 0
}
trap rollback EXIT

if [ "$(cd "$(dirname "$SRC")" && pwd)/$BASE" != "$HUB/reports/$BASE" ]; then
  cp "$SRC" "$HUB/reports/$BASE"
fi

node "$ROOT/_tools/normalize-html.mjs" "$HUB/reports/$BASE"
node "$HUB/bin/update-industry.js" "reports/$BASE"
node "$ROOT/_tools/build-nav.mjs" >/dev/null

# レポート本体だけでなく、エントリが流し込まれた先も検査する。
# title / summary / tags は index.html と data/industry.json に書き込まれるので、
# レポートだけ見ていると summary 経由の漏洩が素通りする。
node "$ROOT/_tools/leak-check.mjs" \
    "$HUB/reports/$BASE" \
    "$HUB/index.html" \
    "$HUB/data/industry.json" \
    "$HUB/data/industry.js"

cd "$ROOT"
git pull --rebase --autostash -q origin main || true
git add "$HUB/reports/$BASE" "$HUB/data" "$HUB/index.html"
git -c user.email="s.kubota@wander-lust.io" -c user.name="040704shogo8848" \
  commit -q -m "Add industry report: $BASE" || { echo "nothing to commit"; }
COMMITTED=1
git push -q origin main
echo "pushed -> https://040704shogo8848.github.io/010_research/014_industry/"
