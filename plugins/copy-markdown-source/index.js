const fs = require('fs');
const path = require('path');

/**
 * 清洗 Markdown/MDX 内容，移除 Docusaurus 特有语法。
 * 代码围栏里的内容原样保留：示例代码里的 import、--- 和标签都不是 MDX 语法。
 */
function cleanProse(text) {
  let cleaned = text;
  // 移除 MDX import 语句（只匹配 from '@theme/...' 或 from '@site/...' 的 import）
  cleaned = cleaned.replace(/^import\s+.*from\s+['"]@(theme|site|docusaurus)\/.*['"];?\s*$/gm, '');
  // 移除 <DocCardList /> 自闭合组件
  cleaned = cleaned.replace(/^\s*<DocCardList\s*\/>\s*$/gm, '');
  // 移除 <CsvTable ... /> 自闭合组件（可能跨多行）
  cleaned = cleaned.replace(/<CsvTable[\s\S]*?\/>/g, '');
  // 移除 <Tabs ...> </Tabs> <TabItem ...> </TabItem> 标签行（保留内部内容）
  cleaned = cleaned.replace(/^\s*<\/?(Tabs|TabItem)\s*[^>]*>\s*$/gm, '');
  // <Term tip="解释">术语</Term> 只留术语
  cleaned = cleaned.replace(/<Term\s+tip=(?:"[^"]*"|'[^']*'|\{[^}]*\})\s*>([\s\S]*?)<\/Term>/g, '$1');
  // <ReadMore title="标题"> 换成加粗标题，里面的内容保留
  cleaned = cleaned.replace(/^[ \t]*<ReadMore\b[^>]*?\btitle="([^"]*)"[^>]*>[ \t]*$/gm, '**$1**');
  cleaned = cleaned.replace(/^[ \t]*<\/?ReadMore\b[^>]*>[ \t]*$/gm, '');
  // MDX 注释
  cleaned = cleaned.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  return cleaned;
}

function cleanMarkdown(content) {
  // YAML frontmatter 只认文件开头那一段。正文里的分隔线也是 ---，
  // 不锚定开头的话，没写 frontmatter 的文档会被删掉两条分隔线之间的正文
  const body = content.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/, '');

  // 按代码围栏切开，只清洗围栏外面的部分
  const out = [];
  let prose = [];
  let fence = null;
  for (const line of body.split('\n')) {
    const mark = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      out.push(line);
      if (mark && mark[1][0] === fence[0] && mark[1].length >= fence.length && line.trim() === mark[1]) fence = null;
    } else if (mark) {
      out.push(cleanProse(prose.join('\n')));
      prose = [];
      fence = mark[1];
      out.push(line);
    } else {
      prose.push(line);
    }
  }
  out.push(cleanProse(prose.join('\n')));

  // 合并多余空行（3个以上 → 2个）
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

module.exports = function copyMarkdownSourcePlugin(context) {
  return {
    name: 'copy-markdown-source',

    async postBuild(props) {
      const { outDir, siteDir, plugins } = props;

      // 找到 docusaurus-plugin-content-docs
      // 只处理默认的 docs 实例（/docs/ 下的笔记）；roadmap 是同名的第二个实例，按钮也只在 /docs/ 页面出现
      const docsPlugin = plugins.find(
        (p) => p.name === 'docusaurus-plugin-content-docs' && (p.options?.id ?? 'default') === 'default'
      );
      if (!docsPlugin || !docsPlugin.content) {
        console.warn('[copy-markdown-source] 未找到 plugin-content-docs，跳过');
        return;
      }

      const { loadedVersions } = docsPlugin.content;
      let count = 0;

      for (const version of loadedVersions) {
        for (const doc of version.docs) {
          const { permalink, source } = doc;

          // source 格式: @site/docs/xxx.md
          const relativePath = source.replace(/^@site\//, '');
          const srcFile = path.join(siteDir, relativePath);

          if (!fs.existsSync(srcFile)) {
            continue;
          }

          const raw = fs.readFileSync(srcFile, 'utf-8');
          const cleaned = cleanMarkdown(raw);

          // 输出路径: {outDir}{permalink}.md
          // permalink 如 /docs/Agent → build/docs/Agent.md
          let outPath = permalink;
          if (outPath.endsWith('/')) {
            outPath = outPath.slice(0, -1);
          }
          outPath = path.join(outDir, outPath + '.md');

          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, cleaned, 'utf-8');
          count++;
        }
      }

      console.log(`[copy-markdown-source] 已生成 ${count} 个 .md 文件`);
    },
  };
};

module.exports.cleanMarkdown = cleanMarkdown;
