#!/bin/bash
# 会社レポートをハブに追加してGitHubへ反映する。
# 使い方: add-report.sh <report_html_path>   （エントリJSONは標準入力）
#   エントリの形は _tools/report-template.md を参照。
#
# 正規化と snav 注入をこの経路に組み込んである。「あとで build-nav を回す」
# 運用は必ず腐るので、追加のたびに必ず通るここに置いている。
#
# 並列実行しないこと。reports.json は read-modify-write なので、
# 複数プロセスから同時に呼ぶとエントリが消える。
set -euo pipefail

HUB="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$HUB/../.." && pwd)"
SRC="${1:-}"
[ -n "$SRC" ] && [ -f "$SRC" ] || { echo "report not found: $SRC" >&2; exit 1; }

BASE="$(basename "$SRC")"
mkdir -p "$HUB/reports"
# 既にreports/内のファイルを指していないときだけコピー
if [ "$(cd "$(dirname "$SRC")" && pwd)/$BASE" != "$HUB/reports/$BASE" ]; then
  cp "$SRC" "$HUB/reports/$BASE"
fi

# HTML骨格を補って snav マーカーを埋め、ナビ本体を生成する
node "$ROOT/_tools/normalize-html.mjs" "$HUB/reports/$BASE"
node "$ROOT/_tools/build-nav.mjs" >/dev/null

# stdin の JSON を reports.json にマージ + manifest.js 再生成
node "$HUB/bin/update-manifest.js" "reports/$BASE"

# 公開リポなので、push前に必ず漏洩チェックを通す
node "$ROOT/_tools/leak-check.mjs" "$HUB/reports/$BASE"

cd "$ROOT"
git pull --rebase --autostash -q origin main || true
# このハブが触ったものだけを stage する。`git add -A` にすると、別セッションが
# 同じリポで書きかけているファイルまでレポート追加コミットに巻き込む。
# 実際に巻き込んで作業を消したことがあるので、対象を明示すること。
git add "$HUB/reports/$BASE" "$HUB/data" "$HUB/index.html"
git -c user.email="s.kubota@wander-lust.io" -c user.name="040704shogo8848" \
  commit -q -m "Add report: $BASE" || { echo "nothing to commit"; }
git push -q origin main
echo "pushed -> https://040704shogo8848.github.io/010_research/011_company/"
