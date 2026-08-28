#!/bin/bash
# git hooks を .git/hooks/ に入れる。
#
# hooks はリポに含まれないので、clone しただけでは何のゲートも効かない。
# 2026-08-28 に確認した時点で .git/hooks/ は空だった（サンプル以外）。
# つまり手で git push すれば leak-check を一切通らずに公開できる状態だった。
#
#   bash _tools/install-hooks.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOOKS="$ROOT/.git/hooks"
mkdir -p "$HOOKS"

cat > "$HOOKS/pre-push" <<'HOOK'
#!/bin/bash
# 追跡中の全テキストファイルを leak-check にかけてから push させる。
#
# 差分だけでなく全件を見るのは、辞書に語が1つ追加されたときに、
# 既に入っている過去のファイルも引っかかってほしいから。
# 誤検知は _tools/leak-check.mjs の ACCEPTED に「ファイル名と一致文字列」で
# 例外を足して黙らせる。--no-verify は使わない（ゲート全体が切れるので、
# 次の本物の漏洩が一緒に出ていく）。
set -uo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1; then
    echo "pre-push: node が無いので leak-check を実行できない。push を中止する。" >&2
    exit 1
fi

# shellcheck disable=SC2046
if ! git ls-files -z | xargs -0 node _tools/leak-check.mjs; then
    echo "" >&2
    echo "pre-push: leak-check で止めた。push していない。" >&2
    exit 1
fi
HOOK

chmod +x "$HOOKS/pre-push"
echo "installed: $HOOKS/pre-push"
echo
echo "動作確認:"
echo "  cd $ROOT && node _tools/leak-check.mjs"
