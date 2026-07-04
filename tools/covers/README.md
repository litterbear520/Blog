# 博客封面生成工具

用代码生成 claude.com/blog 风格的博客封面（纯色底 + 黑色手绘涂鸦），以及编辑排版风格的文章头图。

## 文件说明

| 文件 | 产出 | 用途 |
| ---- | ---- | ---- |
| `cover-lib.js` | — | 手绘涂鸦库：固定种子伪随机抖动（抖动矩形 / 有机 blob / 平滑折线 / 星芒） |
| `cover-fable.html` | `cover-fable-unknowns.png` | 淡紫底 · 纸片地图 + 上升路线 + 问号 |
| `cover-subscribe-doodle.html` | `cover-subscribe-claude-doodle.png` | 陶土橘底 · 手绘票据 + 银行卡 |
| `cover-bridge.html` | `cover-ai-tools-bridge.png` | 板岩蓝底 · 砖堆间的虚线桥 + 星芒 |
| `cover-tianchi.html` | `cover-tianchi-top2.png` | 牛皮纸金底 · 领奖台 + 2 号台上的小车 |
| `hero-subscribe-ticket.html` | `hero-subscribe-claude.png` | 编辑排版风头图（黑底票据，需联网加载 Google Fonts） |

## 生成新封面

1. 复制一个现有 `cover-*.html`，改底色和涂鸦内容（用 `cover-lib.js` 里的绘图函数拼）
2. 本目录起静态服务器：`python -m http.server 8931`
3. 浏览器打开对应页面，在 2400×1140 视口下截图（DevTools 设备模拟，或让 Claude Code 用 Playwright 截）
4. 产出 PNG 放入 `static/img/blog/`，并更新 `src/pages/bloglist.js` 的 `cover` 字段

## 风格约定

- 画布 2400×1140；列表卡片是 180px 高的 `object-fit: cover` 裁切，关键图形放画面中央
- 涂鸦封面（列表用）：纯色底 + 墨黑 `#1A1A18` 线条 + 纸白 `#FAF9F2` 填充，不放文字
- 已用底色：陶土橘 `#C96442` / 板岩蓝 `#6493C6` / 牛皮纸金 `#D4A27F` / 淡紫 `#C6C1DC`，新文章尽量换新色
- 编辑排版风（文章头图用）：深底 + 衬线大标题 + 珊瑚橙 `#C2593D` 点缀，字体 Noto Serif SC + Source Serif 4
