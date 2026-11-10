const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

/**
 * 构建后给每一页生成同名的 .md（页面地址后面加 .md），供“复制 Markdown”按钮和模型读取。
 * 做法照 claude.dev、platform.claude.com、code.claude.com：
 *   - 笔记（docs）、路线（roadmap）、博客文章（blog）三处都生成；
 *   - 交互组件展开成文字，代码一个不丢，转换规则在 ./convert.mjs；
 *   - 每页 HTML 头部加 <link rel="alternate" type="text/markdown">；
 *   - 站点根目录生成 llms.txt，列出所有页面的 .md 地址。
 */

// 链接地址里的空格和括号会让 Markdown 断开，转义掉；中文保留，读起来方便
const safeUrl = (url) => url.replace(/[ ()<>]/g, (c) => encodeURIComponent(c));

// 构建好的这一页 HTML
function htmlFileOf(outDir, permalink) {
  const p = decodeURIComponent(permalink).replace(/\/$/, '');
  for (const candidate of [path.join(outDir, p, 'index.html'), path.join(outDir, `${p}.html`)]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

// 页面里引用的 /assets/ 文件按“原文件名去掉扩展名”登记：构建产物的文件名是“原名-哈希.扩展名”
function assetsOf(html) {
  const map = new Map();
  for (const [, url] of html.matchAll(/(?:src|href|poster)="(\/assets\/[^"]+)"/g)) {
    const base = decodeURIComponent(path.basename(url));
    const m = /^(.*)-[0-9a-f]{6,}(\.[^.]+)$/.exec(base);
    if (!m) continue;
    const key = `${m[1]}${m[2]}`;
    if (!map.has(key)) map.set(key, url);
  }
  return map;
}

// 一个内容插件里的所有页面：[{ source, permalink, title, description, date, frontMatter, instance, sidebarPosition }]
function pagesOf(plugin, siteDir) {
  const toAbs = (source) => path.join(siteDir, source.replace(/^@site\//, ''));
  if (plugin.name === 'docusaurus-plugin-content-docs') {
    const instance = plugin.options?.id ?? 'default';
    return (plugin.content?.loadedVersions || []).flatMap((v) => v.docs).map((doc) => ({
      file: toAbs(doc.source), permalink: doc.permalink, title: doc.title,
      description: doc.frontMatter?.description, frontMatter: doc.frontMatter || {},
      sidebarPosition: doc.sidebarPosition, instance,
    }));
  }
  if (plugin.name === 'docusaurus-plugin-content-blog') {
    return (plugin.content?.blogPosts || []).map(({ metadata: m }) => ({
      file: toAbs(m.source), permalink: m.permalink, title: m.title,
      description: m.frontMatter?.description, frontMatter: m.frontMatter || {},
      date: new Date(m.date).toISOString().slice(0, 10), instance: 'blog',
    }));
  }
  return [];
}

const SECTIONS = { blog: '博客', default: '笔记', roadmap: '路线' };

module.exports = function copyMarkdownSourcePlugin(context) {
  const { siteDir, siteConfig } = context;
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    name: 'copy-markdown-source',

    async postBuild({ outDir, plugins }) {
      const { toMarkdown } = await import(pathToFileURL(path.join(__dirname, 'convert.mjs')).href);
      const { importDataModule } = await import(pathToFileURL(path.join(siteDir, 'tools', 'data-module.mjs')).href);
      const modules = new Map();
      const loadModule = (file) => {
        if (!modules.has(file)) modules.set(file, importDataModule(file));
        return modules.get(file);
      };

      const pages = plugins.flatMap((p) => pagesOf(p, siteDir)).filter((p) => fs.existsSync(p.file));
      const urlOf = (page) => safeUrl(siteUrl + page.permalink.replace(/\/$/, ''));
      const byFile = new Map(pages.map((p) => [p.file, p]));

      // DocCardList 列出的下级页面：同目录的其他页面，加上直接子目录的 index 页
      const childPages = (page) => {
        if (!/^index\.mdx?$/.test(path.basename(page.file))) return [];
        const dir = path.dirname(page.file);
        return pages
          .filter((p) => p !== page && p.instance === page.instance && (
            path.dirname(p.file) === dir
            || (path.dirname(path.dirname(p.file)) === dir && /^index\.mdx?$/.test(path.basename(p.file)))))
          .sort((a, b) => (a.sidebarPosition ?? Infinity) - (b.sidebarPosition ?? Infinity) || a.file.localeCompare(b.file))
          .map((p) => ({ title: p.title, url: urlOf(p), description: p.description }));
      };

      let count = 0;
      const failed = [];
      for (const page of pages) {
        const htmlFile = htmlFileOf(outDir, page.permalink);
        const html = htmlFile ? fs.readFileSync(htmlFile, 'utf8') : '';
        const assets = assetsOf(html);
        // 找不到构建产物里的地址时（小图片会被内联），退回仓库里的原文件
        const resolveAsset = (abs) => {
          const hit = assets.get(path.basename(abs));
          if (hit) return safeUrl(siteUrl + hit);
          if (!fs.existsSync(abs)) return null;
          return safeUrl(`https://github.com/litterbear520/Blog/raw/main/${path.relative(siteDir, abs).split(path.sep).join('/')}`);
        };

        let md;
        try {
          md = await toMarkdown(fs.readFileSync(page.file, 'utf8'), {
            file: page.file, siteDir, siteUrl, pageUrl: urlOf(page),
            title: page.title, date: page.date, description: page.description,
            resolveAsset,
            pageUrlOf: (abs) => (byFile.has(abs) ? urlOf(byFile.get(abs)) : null),
            childPages: childPages(page),
            loadModule,
          });
        } catch (error) {
          // 一篇转换失败不拦部署：这一篇给源文件，构建日志里报出来
          failed.push(`${path.relative(siteDir, page.file)}：${error.message}`);
          md = fs.readFileSync(page.file, 'utf8');
        }

        const outPath = path.join(outDir, `${decodeURIComponent(page.permalink).replace(/\/$/, '')}.md`);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, md, 'utf8');
        page.mdUrl = `${urlOf(page)}.md`;
        count++;

        // 页面头部声明 .md 版本，抓取工具和浏览器插件靠它找到
        if (htmlFile && !html.includes('type="text/markdown"')) {
          const link = `<link rel="alternate" type="text/markdown" href="${page.mdUrl}">`;
          fs.writeFileSync(htmlFile, html.replace('</head>', `${link}</head>`), 'utf8');
        }
      }

      // llms.txt：按博客、笔记、路线分组列出每一页的 .md
      const lines = [`# ${siteConfig.title}`, '', `> ${siteConfig.tagline}。中文个人技术博客，每一页都有对应的 Markdown 版本，地址是页面地址后面加 .md。`, ''];
      for (const [instance, heading] of Object.entries(SECTIONS)) {
        const list = pages.filter((p) => p.instance === instance && p.mdUrl);
        if (!list.length) continue;
        if (instance === 'blog') list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        else list.sort((a, b) => a.permalink.localeCompare(b.permalink));
        lines.push(`## ${heading}`, '', ...list.map((p) => `- [${p.title}](${p.mdUrl})${p.description ? `: ${p.description}` : ''}`), '');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), lines.join('\n'), 'utf8');

      console.log(`[copy-markdown-source] 已生成 ${count} 个 .md 文件和 llms.txt`);
      if (failed.length) console.warn(`[copy-markdown-source] ${failed.length} 篇没能转换，给的是源文件：\n  ${failed.join('\n  ')}`);
    },
  };
};

module.exports.assetsOf = assetsOf;
module.exports.pagesOf = pagesOf;
