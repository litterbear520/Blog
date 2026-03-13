const fs = require('fs');
const path = require('path');

/**
 * 清洗 Markdown/MDX 内容，移除 Docusaurus 特有语法
 */
function cleanMarkdown(content) {
  let cleaned = content;
  // 移除 YAML frontmatter
  cleaned = cleaned.replace(/^---[\s\S]*?---\n*/m, '');
  // 移除 MDX import 语句（只匹配 from '@theme/...' 或 from '@site/...' 的 import）
  cleaned = cleaned.replace(/^import\s+.*from\s+['"]@(theme|site|docusaurus)\/.*['"];?\s*$/gm, '');
  // 移除 <DocCardList /> 自闭合组件
  cleaned = cleaned.replace(/^\s*<DocCardList\s*\/>\s*$/gm, '');
  // 移除 <CsvTable ... /> 自闭合组件（可能跨多行）
  cleaned = cleaned.replace(/<CsvTable[\s\S]*?\/>/g, '');
  // 移除 <Tabs ...> </Tabs> <TabItem ...> </TabItem> 标签行（保留内部内容）
  cleaned = cleaned.replace(/^\s*<\/?(Tabs|TabItem)\s*[^>]*>\s*$/gm, '');
  // 合并多余空行（3个以上 → 2个）
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  return cleaned.trim() + '\n';
}

module.exports = function copyMarkdownSourcePlugin(context) {
  return {
    name: 'copy-markdown-source',

    async postBuild(props) {
      const { outDir, siteDir, plugins } = props;

      // 找到 docusaurus-plugin-content-docs
      const docsPlugin = plugins.find(
        (p) => p.name === 'docusaurus-plugin-content-docs'
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
