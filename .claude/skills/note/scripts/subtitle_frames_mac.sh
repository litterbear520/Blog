#!/bin/bash
# 在 Mac 上截帧拼字幕条，拼图取回到本机：
#   subtitle_frames_mac.sh <本机输出目录> <视频 ID> <秒数>... [subtitle_frames.py 的其他参数]
# 截帧要开几分钟无头 Chrome、反复 seek，放在 Mac 上跑，不占本机 CPU。
# 需要 `ssh mac` 免密可用，Mac 上装了 uv 和 agent-browser（Homebrew）。
# 退出码照搬 subtitle_frames.py：3 表示 YouTube 在限流，已截到的帧照样拼图取回。
set -uo pipefail
if [ $# -lt 3 ]; then
  echo '用法：subtitle_frames_mac.sh <本机输出目录> <视频 ID> <秒数>... [其他参数]' >&2
  exit 2
fi
OUT="$1"; shift
HERE="$(cd "$(dirname "$0")" && pwd)"
REMOTE="subtitle-frames/$(date +%s)-$$"

mkdir -p "$OUT"
ssh mac "mkdir -p '$REMOTE/out'" || exit 1
scp -q "$HERE/subtitle_frames.py" "mac:$REMOTE/" || exit 1
# 参数逐个加引号再传过去，视频 ID 以 - 开头（写在 -- 后面）也不会被拆错
args=$(printf ' %q' "$@")
ssh mac "export PATH=/opt/homebrew/bin:/usr/local/bin:\$PATH; cd '$REMOTE' && uv run --no-project --with pillow python subtitle_frames.py$args --out out" \
  | sed "s|^out/|$OUT/|; s|^/Users/[^ ]*/$REMOTE/out/|$OUT/|"
code=${PIPESTATUS[0]}
# 限流（退出码 3）时也有拼好的图，照样取回
scp -q -r "mac:$REMOTE/out/." "$OUT/" 2>/dev/null
ssh mac "rm -rf '$REMOTE'"
exit "$code"
