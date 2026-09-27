# 博客封面生成工具

用代码生成 claude.com/blog 风格的博客封面：纯色底 + 纸白剪纸块 + 墨黑毛笔线，不放文字。
渲染在 Node 里完成（`@resvg/resvg-js`），不需要浏览器。

## 用法

```bash
npm run cover -- <slug> --preview   # recipes/<slug>.js → static/img/blog/cover-<slug>.svg + .preview/<slug>.png（画布）/ <slug>-card.png（卡片）
npm run cover -- --motifs           # 母题总览 → .preview/motifs.png
npm run cover -- --all --preview    # 重渲所有配方
npm run cover -- --sheet            # 所有配方拼成一张 → .preview/sheet.png，看整体是否统一
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
| `lib/doodle.js` | 绘图原语：cut / disc / brush / link / arrow / dot / ring / dashed / at |
| `lib/motifs.js` | 母题库（17 个，手有三种姿势）；局部坐标以 (0,0) 为中心，标称尺寸 600–750 |
| `recipes/*.js` | 每篇文章一个配方：`{ swatch, seed, draw(d, m) }` |
| `legacy/` | v1 浏览器截图流水线：只剩订阅文章头图 hero-subscribe-claude.png 的配方，仅供追溯 |
| `.preview/` | 预览 PNG，已 gitignore |

## 绘图原语（`d`）

画布 1000×1000。`d.at({ x, y, s, rot, flip }, fn)` 在平移 / 缩放 / 旋转 / 左右镜像下执行 fn，可嵌套；母题都靠它摆位。
线宽 `w`、圆点半径 `r`、纸片毛糙度 `amp` 都按画布像素算，不随 `s` 缩放，全图才统一。后画的压在上面，所以先画纸片再画墨线。

| 函数 | 画什么 | 关键参数 |
| ---- | ---- | ---- |
| `cut(pts, o)` | 剪纸块：直边多边形，顶点略歪，长边偶尔一个小折角，不描边 | `amp`、`kink`、`color`（默认纸白，`d.tint` 是底色深一档） |
| `disc(cx, cy, r, o)` | 剪纸圆：看得出棱的不规则多边形 | `sides`（8–11 像剪的，14 以上接近圆） |
| `brush(pts, o)` | 毛笔线；2 点直线，3 点以上平滑成曲线 | `w` 默认 20、`smooth: false` 保留硬转角、`closed`、`trim` 把两头裁到离画布边 N 像素内、`color`（纸白线用 `d.PAPER`） |
| `link(pts, o)` | 折线 + 实心节点 | `r` 节点半径、`dots`：`all` / `ends` / `none` / 下标数组 |
| `arrow(pts, o)` | 线 + 开口 `<` 箭头 | `head` |
| `dot(cx, cy, r)` / `ring(cx, cy, r)` | 实心墨点 / 墨线圆环 | |
| `dashed(pts, o)` | 虚线 | `dash`、`gap` |
| `rect(x, y, w, h)` / `circle(cx, cy, r, n)` | 生成点数组 | |

## 母题（`m`）

`hand`（`pose: open / point / grip`）`screen` `easel` `window` `terminal` `chart` `network` `shape`（`kind: square / tri / disc / diamond / hourglass`）`bubble` `stairs` `book` `magnifier` `lock` `doc` `cursor` `bigArrow` `scribble`。
用法 `d.at({ x: 500, y: 520, s: 1.1, rot: -6 }, () => m.screen(d))`；长相跑一次 `--motifs` 看图。
`m.hand` 返回关键点的局部坐标：`tip` 指尖、`thumb` 拇指尖、`gap` 虎口（grip 夹东西的位置）。手臂默认很长，由 `trim: 36` 自动裁在画布内收尾；想要更短的手臂再给 `arm`（局部 y）。`m.magnifier({ lens: false })` 去掉纸白镜片。
`m.handAt(d, { to: [x, y], key: 'tip', pose, s, rot, flip })` 让关键点直接落在画布点上，不用自己反推旋转后的原点。
`hand.finger(bx, by, 角度, 长度, 宽, 弯曲)` 返回一根手指的轮廓点，需要特殊手势时拼进一条 `d.brush`。

## 风格约定

对着 claude.com/blog 的封面逐条数出来的，偏离任何一条都会和参考站分得出来：

- 只有两色：墨黑 `#141413`、纸白 `#FAF9F5`；偶尔用底色深一档（`d.tint`）的色块代替纸白。SVG 透明，底色由 `swatch` 决定
- 纸片不描边；墨线画的是另一件东西（手、折线、连线、框架），叠在纸片上面
- 纸片是剪刀剪的直边，圆是看得出棱的多边形；不要撕纸毛边
- 墨线约 20 粗，全图一个粗细，平滑、圆头
- 手是最常见的配角：香肠形长手指，不填色；`m.hand` 返回 `tip` / `thumb` / `gap` 关键点
- 没有星芒、文字、数字、界面细节（窗口圆点、代码符号、文字横线）
- 一个主物件最长边 650 以上，其他东西叠在它上面；手是配角、和物件重叠，带手的封面不超过列表一半
- 画面撑满（长边 85–95%），但线条和纸片都在画布内收尾，`render` 会报告越界点数；一张图至多两组东西
- 相邻纸片之间留 30 以上的底色缝，否则会糊成一块
- 列表卡片 180px 高、`object-fit: contain`，插图整体可见

## 底色

`src/data/swatches.json`，取自 claude.com 品牌色板：
clay `#d97757` · peach `#ebc9b7` · sky `#6a9bcc` · cactus `#bcd1ca` · plum `#827dbd` · mineral `#629987` · heather `#cbcadb` · oat `#e3dacc` · olive `#788c5d` · coral `#ebcece` · fig `#c46686`

新文章优先挑清单里没出现过的，并让列表里相邻两篇深浅交替。

## 封面清单

| 文章 slug | 底色 | 封面文件 | 配方 |
| ---- | ---- | ---- | ---- |
| opus-5-5-guide | heather | cover-opus-5-5-guide.svg | recipes/opus-5-5-guide.js |
| voice-agent-memory | plum | cover-voice-agent-memory.svg | recipes/voice-agent-memory.js |
| html-effectiveness | oat | cover-html-effectiveness.svg | recipes/html-effectiveness.js |
| fable-guide | mineral | cover-fable-guide.svg | recipes/fable-guide.js |
| subscribe-claude | peach | cover-subscribe-claude.svg，头图 hero-subscribe-claude.png（legacy/hero-subscribe-ticket.html） | recipes/subscribe-claude.js |
| ai-and-depth | sky | cover-ai-and-depth.svg | recipes/ai-and-depth.js |
| tianchi-top2 | cactus | cover-tianchi-top2.svg | recipes/tianchi-top2.js |
