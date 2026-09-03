---
name: blog-cover
description: 为博客文章生成 claude.com 风格的手绘涂鸦封面（透明 SVG + 品牌底色）。新博文缺封面、用户说"配封面 / 生成封面 / cover"、或要重做某篇封面时使用。
argument-hint: "[文章 slug]"
---

# 博客封面

目标文章：$ARGUMENTS（为空时取 `blog/` 里日期最新的一篇，并告诉用户你选了哪篇）。

一张封面 = 一句视觉隐喻 + 一个底色 + 一个配方文件。渲染由 `npm run cover` 在 Node 里完成，不需要浏览器。
原语、母题、风格约定以 `tools/covers/README.md` 为准，动手前先读它；母题长相看 `npm run cover -- --motifs` 输出的 `tools/covers/.preview/motifs.png`。

## 步骤

1. **读文章，写隐喻。** 读 `blog/` 下对应文章全文，用一句话写出视觉隐喻：文章的核心动作或矛盾，落到一个具体物件上（"窗口里的大光标"、"两堆砖之间的虚线桥"、"放大镜下的 </>"）。隐喻只含一个主体，至多一个配角。
   完成标准：隐喻里每个物件都对应母题库里的一个母题，或能用 `paper` / `brush` / `dashed` 几笔拼出。母题库没有的物件先在配方里用原语拼；同一物件第二次用到时再提为母题加进 `lib/motifs.js`（局部坐标以 (0,0) 为中心，标称尺寸 600–750）。
2. **选底色。** 读 `src/data/swatches.json`；排除 `src/pages/bloglist.js` 里已出现的 `swatch`，再排除 README 封面清单里 legacy 封面的近似色，优先挑从未用过的；都用过时保证与相邻两篇文章不同色。深色（clay / plum / mineral / olive / fig / sky）与浅色（peach / oat / heather / cactus / coral）在列表里交替出现。
3. **写配方。** 复制 `tools/covers/recipes/example.js` 为 `tools/covers/recipes/<slug>.js`，填 `swatch`、`seed`、`draw(d, m)`。主体用 `d.at({ x, y, s, rot }, () => m.xxx(d))` 摆在画布中央，高度占 60–80%；配角靠边或叠在主体上；星芒至多两个，放在空角。
4. **渲染并看图。** 运行 `npm run cover -- <slug> --preview`，然后 Read `tools/covers/.preview/<slug>.png`，逐项核对：
   - 一眼能认出隐喻里的物件
   - 主体完整在画布内，四周留白 60 以上，没有母题互相压住关键部位
   - 全图线宽一致，纸片与墨线的错位可见
   - 画面只有图形，文字和数字都已换成图形隐喻

   任一项不过就改坐标 / 缩放 / 换 seed，重渲再看；全部通过才进入下一步。
5. **登记。** `src/pages/bloglist.js` 的 POSTS 对应条目加 `swatch: '<名>'` 和 `cover: '/img/blog/cover-<slug>.svg'`；`tools/covers/README.md` 封面清单加一行（slug、底色、文件、配方）。
   完成标准：`git status` 恰好出现配方、SVG、bloglist.js、README 四处改动。

最后向用户报告：隐喻一句话、底色、预览图路径。
