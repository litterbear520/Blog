# 《所有代码都是 slop（除了我的）》原图出处

原图是演讲幻灯片的截图，汉化前就放在 `blog/all-code-is-slop/` 里，文件名和成品相同。`src/` 不进仓库；改译名要重渲时，从汉化前的提交取回原图：

```bash
mkdir -p src/all-code-is-slop
for f in $(cd specs/all-code-is-slop && ls *.js | sed 's/\.js$/.png/'); do
  git show 9c52fc736:blog/all-code-is-slop/$f > src/all-code-is-slop/$f
done
```

## 渲染顺序

1. `uv run --with pillow --with numpy python specs/all-code-is-slop/clean.py`：抹掉气泡、纸纹、蜡笔天空上的英文，生成 `src/all-code-is-slop/<名字>-clean.png`（formal-verification、read-the-code、unsolicited-markdown、each-copy、slop-vs-craft 的规格指向它）。
2. 逐张 `./rmac all-code-is-slop/<名字>`。
3. `uv run --with pillow python specs/all-code-is-slop/redraw.py`：用汉化后的 poteto-pyramid 合成 code-is-memory 和 verification-step，所以要在第 2 步之后。

译名和不汉化的图见同目录 `GLOSSARY.md`。
