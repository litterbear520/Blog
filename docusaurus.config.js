// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import cursorTheme from './src/theme/prism-cursor-theme.js';
import cursorLightTheme from './src/theme/prism-cursor-light-theme.js';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkRunOutput from './plugins/remark-run-output.js';
import remarkEagerLeadImage from './plugins/remark-eager-lead-image.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小熊的博客',
  tagline: '专注于学习、开发和分享',
  favicon: 'img/icon2.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // url: 'https://litterbear520.github.io',
  url: 'https://huangsitao.fun',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/Blog/',
  baseUrl: '/',
  // GitHub Pages 会给目录页补结尾斜杠；生成的链接、canonical、sitemap 跟它一致，省掉一次 301
  trailingSlash: true,

  organizationName: 'litterbear520',
  projectName: 'Blog',

  onBrokenLinks: 'throw',


  // 决定 <html lang>、og:locale 和框架自带界面文字的语言
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    './plugins/copy-markdown-source',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roadmap',
        path: './roadmap',
        routeBasePath: 'roadmap',
        sidebarPath: './sidebarsRoadmap.js',
        admonitions: { keywords: ['important'], extendDefaults: true }, // 补上 GitHub alerts 的 IMPORTANT 类型，组件见 src/theme/Admonition/Types.js
        remarkPlugins: [remarkMath, remarkRunOutput, remarkEagerLeadImage],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          admonitions: { keywords: ['important'], extendDefaults: true }, // 补上 GitHub alerts 的 IMPORTANT 类型，组件见 src/theme/Admonition/Types.js
          remarkPlugins: [remarkMath, remarkRunOutput, remarkEagerLeadImage],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          admonitions: { keywords: ['important'], extendDefaults: true }, // 补上 GitHub alerts 的 IMPORTANT 类型，组件见 src/theme/Admonition/Types.js
          remarkPlugins: [remarkRunOutput, remarkEagerLeadImage],
          routeBasePath: '/blog',
          // blogSidebarTitle: false, // 禁用博客侧边栏标题
          blogSidebarCount: 0, // 禁用博客侧边栏计数，设置为0
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // 官方推荐写法（v4 的默认值）：lastmod 取 git 提交时间，搜索引擎不看的 priority/changefreq 不输出
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
        },
      }),
    ],
  ],

  stylesheets: [
    // 保留原字体文件及字符分片，从本站加载以避免外部样式请求阻塞首屏。
    '/fonts/google-fonts.css',
    {
      href: '/katex/katex.min.css',
      integrity:
        'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
    },
  ],

  headTags: [
    // Inter 的拉丁字符分片每页都用，提前下载，不必等字体 CSS 解析完才发请求
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/inter-3100e775e8616cd2.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: '小熊的博客',
          src: 'img/icon.png',
        },
        items: [
          {
            to: '/docs/MCP',
            label: '笔记',
            position: 'left'
          },
          { to: '/bloglist', label: '博文', position: 'left' },
          { to: '/roadmap', label: '路线', position: 'left' },
          { to: '/skills', label: 'Skills', position: 'left' },
          {
            href: 'https://github.com/litterbear520/Blog',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub 仓库',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: 'Copyright © huangsitao 2026',
      },
      prism: {
        theme: cursorLightTheme,
        darkTheme: cursorTheme,
        additionalLanguages: ['bash', 'json', 'python', 'java', 'typescript', 'rust', 'go', 'cpp', 'c', 'diff'],
      },
    }),
};

export default config;
