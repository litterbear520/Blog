import React, { useState } from 'react';
import styles from './styles.module.css';

export default function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      let pathname = window.location.pathname;
      if (pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
      }
      const mdUrl = pathname + '.md';

      const response = await fetch(mdUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const text = await response.text();
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制 Markdown 失败:', err);
    }
  };

  return (
    <button
      className={styles.copyButton}
      onClick={handleCopy}
      title="复制 Markdown 源码"
      aria-label="复制 Markdown 源码"
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>已复制</span>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>复制 Markdown</span>
        </>
      )}
    </button>
  );
}
