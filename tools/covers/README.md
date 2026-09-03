# 博客封面生成工具

用代码生成 claude.com/blog 风格的博客封面：纯色底 + 墨黑毛笔线 + 纸白剪纸，不放文字。
渲染在 Node 里完成（`@resvg/resvg-js`），不需要浏览器。

## 用法

```bash
npm run cover -- <slug> --preview   # recipes/<slug>.js → static/img/blog/cover-<slug>.svg + .preview/<slug>.png
npm run cover -- --motifs           # 母题总览 → .preview/motifs.png
npm run cover -- --all --preview    # 重渲所有配方
```

流程（Claude Code 里用 `/blog-cover <slug>` 可自动走完）：

1. 复制 `recipes/example.js` 为 `recipes/<slug>.js`，改 `swatch`、`seed`、`draw`
2. 渲染并看预览，调坐标或换 seed 直到满意
3. `src/pages/bloglist.js` 的 POSTS 加 `swatch: '<名>'` 和 `cover: '/img/blog/cover-<slug>.svg'`
4. 在下面的封面清单加一行

## 文件

| 路径 | 说明 |
| ---- | ---- |
| `render.js` | 命令行入口 |
| `lib/doodle.js` | 绘图原语：brush / cutout / edges / paper / blob / ring / dot / dashed / sparkle / at |
| `lib/motifs.js` | 母题库（15 个）；局部坐标以 (0,0) 为中心，标称尺寸 600–750 |
| `recipes/*.js` | 每篇文章一个配方：`{ swatch, seed, draw(d, m) }` |
| `legacy/` | v1 浏览器截图流水线：现有 5 张 PNG 封面和 1 张头图的配方，仅供追溯 |
| `.preview/` | 预览 PNG，已 gitignore |

## 绘图原语（`d`）

画布 1000×1000。`d.at({ x, y, s, rot }, fn)` 在平移 / 缩放 / 旋转下执行 fn，可嵌套；母题都靠它摆位。

| 函数 | 画什么 | 关键参数 |
| ---- | ---- | ---- |
| `brush(pts, o)` | 变宽毛笔线；2 点是直线，3 点以上平滑成曲线 | `w` 线宽、`amp` 抖动、`closed` 成圈、`offset` |
| `cutout(pts, o)` | 剪纸纸片，不描边 | `amp` 边缘毛糙度 |
| `edges(pts, o)` | 多边形轮廓：逐边一笔、转角出头 | `overshoot`、`skip` 省略某几条边、`offset` |
| `paper(pts, o)` | cutout + 错位 edges，直边图形首选 | `shift` 墨线偏移，默认 `[24, -20]` |
| `blob(pts, o)` | cutout + 一圈连续墨线，圆润图形首选 | 同上 |
| `ring(cx, cy, r)` / `dot(cx, cy, r)` | 墨线圆环 / 实心墨点 | |
| `dashed(pts, o)` | 虚线 | `dash`、`gap` |
| `sparkle(cx, cy, len, w)` | 星芒 | |
| `rect(x, y, w, h)` / `circle(cx, cy, r, n)` | 生成点数组 | |

## 母题（`m`）

`window` `terminal` `cursor` `hand` `braces` `bubble` `nodes` `magnifier` `lock` `book` `doc` `arrow` `code` `squiggle` `sparkle`。
用法 `d.at({ x: 500, y: 520, s: 1.1, rot: -6 }, () => m.window(d))`；长相跑一次 `--motifs` 看图。

## 风格约定

- 只有两色：墨黑 `#141413`、纸白 `#FAF9F5`；SVG 透明，底色由 `swatch` 决定
- 线宽 18–26，全图统一；纸片不描边，墨线另画一层并错位
- 一个主体（高度占画布 60–80%）+ 至多一个配角 + 至多两个星芒；画面只由图形组成
- 列表卡片 180px 高、`object-fit: contain`，插图整体可见，所以主体居中即可

## 底色

`src/data/swatches.json`，取自 claude.com 品牌色板：
clay `#d97757` · peach `#ebc9b7` · sky `#6a9bcc` · cactus `#bcd1ca` · plum `#827dbd` · mineral `#629987` · heather `#cbcadb` · oat `#e3dacc` · olive `#788c5d` · coral `#ebcece` · fig `#c46686`

legacy 封面已用的近似色：clay（陶土橘）、sky（板岩蓝）、peach（牛皮纸金）、heather（淡紫）、cactus（鼠尾草绿）。新文章优先挑清单里没出现过的。

## 封面清单

| 文章 slug | 底色 | 封面文件 | 配方 |
| ---- | ---- | ---- | ---- |
| html-effectiveness | 鼠尾草绿（≈cactus） | cover-html-effectiveness.png | legacy/cover-html.html |
| fable-guide | 淡紫（≈heather） | cover-fable-unknowns.png | legacy/cover-fable.html |
| subscribe-claude | 陶土橘（≈clay） | cover-subscribe-claude-doodle.png，头图 hero-subscribe-claude.png | legacy/cover-subscribe-doodle.html、legacy/hero-subscribe-ticket.html |
| ai-and-depth | 板岩蓝（≈sky） | cover-ai-tools-bridge.png | legacy/cover-bridge.html |
| tianchi-top2 | 牛皮纸金（≈peach） | cover-tianchi-top2.png | legacy/cover-tianchi.html |
