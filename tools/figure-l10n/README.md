# 配图汉化

转载英文文章时，把原文配图里的英文换成中文：保留原图每一个像素，只在英文文字处用同色底块盖住，再在原位置写上中文，按原分辨率输出 PNG。数据曲线、网络图、像素画这类没法重画的图也能处理。

## 准备

```bash
cd tools/figure-l10n
mkdir -p fonts && curl -sL -o fonts/NotoSansSC.ttf "https://github.com/google/fonts/raw/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf"
mkdir -p src/<slug>   # 原图按文章里出现的顺序存成 fig01.png、fig02.png …
```

原图取原站的最大分辨率版本（Anthropic 的图去掉 `/_next/image?url=` 包装，直接下 `www-cdn.anthropic.com/images/...`）。`src/`、`out/`、`fonts/` 都不进仓库。

## 流程

每张图写一个规格文件 `specs/<slug>/figNN.js`（字段说明在 `render.html` 顶部注释，例子见 `specs/components-of-agent-memory/`），然后：

```bash
./rmac <slug>/figNN --debug     # 只画洋红框（遮盖范围），打印每项的字迹框 ink、高度 h、底色 bg、文字色
./rmac <slug>/figNN             # 正式输出 out/<slug>/figNN.png
./rmac <slug>/figNN --crop x0,y0,x1,y1   # 输出局部，按原分辨率核对细节
```

`rmac` 把本目录同步到 Mac、在 Mac 上跑无头 Chrome、再取回 `out/`，本机不占 CPU；Mac 不可用时把 `rmac` 换成 `python3 -I render.py`（本机要有 Chrome）。一次只跑一张。

核对通过后把成品复制进 `blog/<slug>/`，改成有意义的文件名。

## 约定

- 字号：中文 ≈ 同位置英文字号 × 0.92。英文字号从 debug 打印的字迹高度 h 估：同时有大写/升部和降部（g、y、p、j）时 ≈ h / 0.9，只有大写没有降部时 ≈ h / 0.7。粗体标题用 weight 600，正文 400。颜色默认自动取原文字迹色。
- 遮盖框不能吃掉线条、箭头、图标、数据点、坐标轴。字压在连线上时用 `inpaint` 只抹字迹再补回周围像素；遮盖切断了网格线就用一个 `patch` + `bg` 设成线色、`thr: 999`、不写文字的项补回。
- 对齐方式照原图（左对齐 start、居中 middle、右对齐 end）；行首、行尾的全角括号和逗号会显得缩进或参差，必要时微调 dx 或换断行位置。
- 不翻译：模型名、Agent、Claude、wiki、文件名 / 目录名 / 页面名、代码样式的编号、纯数字和刻度、文件代号（FY2022 10-K 这类）。这些保留原像素，不遮盖。
- 中文用全角标点，数字和中文之间加空格（“413 个文件”），千分位逗号保留。
- 图里的术语要和正文、图注、alt 一致：先写一份术语表（例：`specs/components-of-agent-memory/GLOSSARY.md`），多人或多个子代理分工时都照它。
- 交付前让没看过过程的人对照原图逐张检查：残留英文、误译、压线、被遮掉的图形。
