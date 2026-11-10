import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import CopyMarkdownButton from '../components/CopyMarkdownButton';

/**
 * Docusaurus Root 组件
 * React 树的最顶层组件，负责往页面标题旁注入“复制 Markdown”按钮。
 * 笔记、路线、博客文章构建时都会生成同名的 .md（plugins/copy-markdown-source），
 * 按钮只在这一页确实有 .md 时出现：博客列表、标签页和本地开发服务器上都没有。
 */
const mdUrlOf = (pathname) => `${pathname.replace(/\/$/, '')}.md`;
// 每个页面只问一次服务器有没有 .md
const hasMarkdown = new Map();
function checkMarkdown(pathname) {
  if (!hasMarkdown.has(pathname)) {
    hasMarkdown.set(pathname, fetch(mdUrlOf(pathname), { method: 'HEAD' })
      .then((r) => r.ok && /markdown|text\/plain/.test(r.headers.get('content-type') || ''))
      .catch(() => false));
  }
  return hasMarkdown.get(pathname);
}

export default function Root({ children }) {
  useEffect(() => {
    function isContentPage() {
      return /^\/(docs|roadmap|blog)(\/|$)/.test(window.location.pathname);
    }

    async function injectButton() {
      if (!isContentPage()) return;
      if (document.querySelector('[data-copy-md-btn]')) return;

      // 笔记和路线的标题在 .markdown 里，博客文章的标题在 article 的 header 里
      const h1 = document.querySelector('article .markdown > header h1, article .markdown > h1, article > header > h1');
      if (!h1) return;

      const pathname = window.location.pathname;
      if (!(await checkMarkdown(pathname))) return;
      // 等待期间可能已经切到别的页面，或者别的回调已经插好了
      if (window.location.pathname !== pathname || !h1.isConnected || document.querySelector('[data-copy-md-btn]')) return;

      // 让 h1 变成 flex 容器，按钮放在右侧
      h1.style.display = 'flex';
      h1.style.alignItems = 'center';
      h1.style.justifyContent = 'space-between';

      const container = document.createElement('span');
      container.setAttribute('data-copy-md-btn', 'true');
      container.style.flexShrink = '0';
      container.style.marginLeft = '16px';
      h1.appendChild(container);

      createRoot(container).render(<CopyMarkdownButton />);
    }

    // 初始注入
    injectButton();

    // 监听 DOM 变化（客户端路由切换时 article 会重新渲染）
    const observer = new MutationObserver(() => {
      injectButton();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
