import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import styles from './styles.module.css';

// 阅读更多：把边缘情况和支线收进一张折叠卡，标题写成读者会问的问题。
// <ReadMore title="为什么不按情况增删工具？">（空一行）正文 Markdown（空一行）</ReadMore>
// 已注册到 MDX 全局，正文里直接写；收起时浏览器的页内查找也能搜到内容。
// 传 id 时正文可以用 [文字](#id) 跳过来，跳转后卡片自动展开。
export default function ReadMore({ id, title, label = '阅读更多', children }) {
  const ref = useRef(null);
  const { hash } = useLocation();
  useBrokenLinks().collectAnchor(id);

  useEffect(() => {
    if (!id) return undefined;
    const openIfTargeted = () => {
      if (decodeURIComponent(window.location.hash.slice(1)) === id && ref.current) {
        ref.current.open = true;
      }
    };
    openIfTargeted();
    window.addEventListener('hashchange', openIfTargeted);
    return () => window.removeEventListener('hashchange', openIfTargeted);
  }, [id, hash]);

  return (
    <details id={id} ref={ref} className={styles.card}>
      <summary className={styles.summary}>
        <span className={styles.text}>
          <span className={styles.label}>{label}</span>
          <span className={styles.title}>{title}</span>
        </span>
        <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
