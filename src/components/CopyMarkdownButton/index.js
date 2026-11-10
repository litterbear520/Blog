import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ArrowUpRight, ChevronDown, Copy } from 'lucide-react';
import styles from './styles.module.css';

// 页面标题旁的“复制页面”分体按钮，由 src/theme/Root.js 插到有 .md 的页面上。
// 左边复制本页 Markdown；右边下拉三项：复制为 Markdown、新标签页打开 Markdown、带着本页地址去 Claude.ai 对话。
// .md 由 plugins/copy-markdown-source 在构建时生成，地址是页面地址加 .md。

const RESET_MS = 2000;

const pageUrl = () => window.location.origin + window.location.pathname.replace(/\/$/, '');
const mdUrl = () => `${window.location.pathname.replace(/\/$/, '')}.md`;

// Claude 的星芒标志
function Spark() {
  return (
    <svg className={styles.spark} viewBox="0 0 100 100" width="16" height="16" aria-hidden="true">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  );
}

export default function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const resetTimer = useRef(null);
  const wrapRef = useRef(null);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  // 鼠标移上来或聚焦时先把 .md 取回来：点下去时直接写剪贴板，不跨 await，Safari 才认这是用户操作
  const cached = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const prefetch = useCallback(() => {
    if (!cached.current) {
      cached.current = fetch(mdUrl()).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      });
      cached.current.then((text) => { cached.current.text = text; }, () => { cached.current = null; });
    }
    return cached.current;
  }, []);

  const copy = useCallback(async () => {
    try {
      const text = cached.current?.text;
      if (text != null) {
        await navigator.clipboard.writeText(text);
      } else if (typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
        // 还没取回来：把取文件的 Promise 交给剪贴板，同样算在这次点击里
        await navigator.clipboard.write([new ClipboardItem({
          'text/plain': prefetch().then((t) => new Blob([t], { type: 'text/plain' })),
        })]);
      } else {
        await navigator.clipboard.writeText(await prefetch());
      }
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), RESET_MS);
    } catch (err) {
      // 剪贴板被拒（个别应用内浏览器）：直接打开 .md，读者自己复制
      console.error('复制 Markdown 失败:', err);
      window.open(mdUrl(), '_blank', 'noopener');
    }
  }, [prefetch]);

  const close = useCallback((focusToggle) => {
    setOpen(false);
    if (focusToggle) toggleRef.current?.focus();
  }, []);

  // 点菜单外面关闭
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  // 打开时焦点落到第一项
  useEffect(() => {
    if (open) menuRef.current?.querySelector('[role="menuitem"]')?.focus();
  }, [open]);

  const onMenuKey = (e) => {
    const items = [...menuRef.current.querySelectorAll('[role="menuitem"]')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const step = e.key === 'ArrowDown' ? 1 : -1;
      items[(i + step + items.length) % items.length].focus();
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      items[e.key === 'Home' ? 0 : items.length - 1].focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  const choose = (action) => () => {
    close(true);
    action();
  };

  const items = [
    { label: '复制为 Markdown', icon: <Copy size={16} strokeWidth={1.5} aria-hidden="true" />, action: copy },
    { label: '打开 Markdown', icon: <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />,
      action: () => window.open(mdUrl(), '_blank', 'noopener') },
    { label: '在 Claude.ai 中对话', icon: <Spark />,
      action: () => window.open(`https://claude.ai/new?q=${encodeURIComponent(`我想讨论这个页面的内容：${pageUrl()}`)}`, '_blank', 'noopener') },
  ];

  return (
    <div ref={wrapRef} className={styles.wrap} onPointerEnter={prefetch} onFocus={prefetch}>
      <div className={styles.group} role="group" aria-label="复制页面">
        <button type="button" className={clsx(styles.segment, styles.main)} onClick={copy} aria-live="polite">
          <Copy size={16} strokeWidth={1.5} aria-hidden="true" />
          {/* 两个文字叠在同一格里，切换时按钮宽度不跳 */}
          <span className={styles.labels}>
            <span className={clsx(!copied && styles.hidden)} aria-hidden={!copied}>已复制</span>
            <span className={clsx(copied && styles.hidden)} aria-hidden={copied}>复制页面</span>
          </span>
        </button>
        <span className={styles.seam} aria-hidden="true" />
        <button
          ref={toggleRef}
          type="button"
          className={clsx(styles.segment, styles.more)}
          aria-label="更多选项"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' && !open) {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
      {open && (
        <div ref={menuRef} className={styles.menu} role="menu" aria-label="更多选项" onKeyDown={onMenuKey}>
          {items.map((item) => (
            <button key={item.label} type="button" role="menuitem" tabIndex={-1} className={styles.item} onClick={choose(item.action)}>
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
