# 《Agent 记忆的组成部分》原图出处

原文：[The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory)。`figNN.js` 的 `src` 指向 `src/components-of-agent-memory/figNN.png`，这个目录不进仓库；改译名要重渲时，按下表把原图下回来。地址都是原站的最大分辨率版本（去掉了 `/_next/image?url=` 包装），文件名末尾就是像素尺寸，和文章目录里的成品图一致。

| 编号 | 文章里的图 | 成品文件 | 原图 |
| ---- | ---- | ---- | ---- |
| fig01 | 图 1 | memory-hierarchy.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/a0bcfa203214d817d2b4261b7188aba8be6db5b2-3840x1754.png |
| fig02 | 图 2 | memory-notes.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/2ef2bf5c81ea6d578749782782eff10cf3136de4-3840x1754.png |
| fig03 | 图 3 | cl-bench.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/bb0d44c78cc431fb5e84fbf2cb17c4303bc6bd65-3840x2160.png |
| fig04 | 图 4 | pokemon-memory-dirs.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/5e15e10f665773050d90fafc38ab8dd76ae5368b-3840x2545.png |
| fig05 | 图 5 | steering.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/da03e864e4eba93a91314fa5f2a5d0e4c14b2a0f-3840x2310.png |
| fig06 | 图 6 | dreaming-corrects.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/55ce85bd12860090704a5543a3da7504334ad9a9-3840x1754.png |
| fig07 | 图 7 | mt-moon-ledge.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/d906d6ed9ac92db36631a624ad517183b07a545d-3840x2101.png |
| fig08 | 图 8 | cerulean-progress.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/2eb2bfe6d01e9a1fca74a41e952d948c09d42008-3840x2636.png |
| fig09 | 图 9 | dreaming-representations.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/30923242548d746ee77784c87826cadc46574c34-3840x1754.png |
| fig10 | 图 10 | wiki-growth.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/336832b5015f1bfcfd7d786fae8120c533f26ecd-3136x1432.png |
| fig11 | 图 11 | wiki-criteria.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/3677eab5e938466cc41fbac4d47f3118135d0563-3840x3694.png |
| fig12 | 图 12 | wiki-too-large.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/ffa35479b1dea63b7948f76995b488d08854e86d-3840x2150.png |
| fig13 | 图 13 | dreaming-injection.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/c88bcc04c5d0e77db5828c9dbe72faf1c4421f8f-3840x1754.png |
| fig14 | 图 14 | contract-pages.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/592f604d38e90537553ab7127d1d3115924fda92-3840x1822.png |
| fig15 | 图 15 | second-pass.png | https://www-cdn.anthropic.com/images/4zrzovbb/website/f1afeef9a2d986a6155c0789db46b8fa372a20eb-3840x1812.png |

fig01、fig02、fig06、fig09、fig13 是同一套层级图，尺寸相同、文字相同，只有高亮的层和箭头不同：这五张按原文图注的顺序对应，并逐像素比对过原图和成品图（对应的一张除文字遮盖处外 98% 的像素相同，和其他几张最多 88%）。

一次下回全部原图（在 `tools/figure-l10n` 下运行）：

```bash
mkdir -p src/components-of-agent-memory
grep -E '^\| fig[0-9]{2} ' specs/components-of-agent-memory/SOURCES.md | while IFS='|' read -r _ fig _ _ url _; do
  curl -sL -o "src/components-of-agent-memory/${fig// /}.png" "${url// /}"
done
```
