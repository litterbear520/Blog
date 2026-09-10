import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import CopyMarkdownButton from '../components/CopyMarkdownButton';

/**
 * Docusaurus Root 组件
 * React 树的最顶层组件，负责往文档页标题旁注入 CopyMarkdown 按钮
 */
export default function Root({ children }) {
  useEffect(() => {
    function isDocsPage() {
      return window.location.pathname.startsWith('/docs/');
    }

    function injectButton() {
      if (!isDocsPage()) return;
      if (document.querySelector('[data-copy-md-btn]')) return;

      const markdown = document.querySelector('article .markdown');
      if (!markdown) return;

      const header = markdown.querySelector(':scope > header');
      const h1 = header
        ? header.querySelector('h1')
        : markdown.querySelector(':scope > h1');
      if (!h1) return;

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
