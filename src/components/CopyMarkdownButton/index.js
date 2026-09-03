import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const RESET_MS = 2000;

export default function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  // 组件卸载时清掉定时器，避免对已卸载组件 setState
  useEffect(() => () => clearTimeout(resetTimer.current), []);

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
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), RESET_MS);
    } catch (err) {
      console.error('复制 Markdown 失败:', err);
    }
  };

  return (
    <button
      className={clsx(styles.copyButton, copied && styles.copied)}
      onClick={handleCopy}
      title="复制 Markdown 源码"
      aria-label={copied ? '已复制' : '复制 Markdown 源码'}
      aria-live="polite"
    >
      {/* 两个图标叠在同一格里，靠 class 切换做交叉过渡 */}
      <span className={styles.icon} aria-hidden="true">
        <svg
          className={styles.copyIcon}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg
          className={styles.checkIcon}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline className={styles.checkPath} points="20 6 9 17 4 12" />
        </svg>
      </span>
      {/* key 变化让 span 重新挂载，淡入动画每次都会重放 */}
      <span className={styles.label} key={copied ? 'done' : 'idle'}>
        {copied ? '已复制' : '复制 Markdown'}
      </span>
    </button>
  );
}
