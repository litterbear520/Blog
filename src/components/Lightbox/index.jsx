import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

// 放大查看：markdown 图片（theme/MDXComponents/Img）和课文配图（Diagram）共用。
// 原生 dialog 用 portal 挂到 body，避免 dialog 出现在 <p> 里造成 SSR/水合不一致；点内容以外的地方或按 Esc 关闭。

function ZoomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 3 21 3 21 9" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// 右上角的放大按钮：放在 position: relative 的外层里，作为它的直接子元素；桌面端悬停外层时显示，触屏常显
export function ZoomButton({ label, onClick }) {
  return (
    <button type="button" className={styles.zoom} onClick={onClick} aria-label={label} title={label}>
      <ZoomIcon />
    </button>
  );
}

export default function Lightbox({ label, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    if (!dialog.open) dialog.showModal();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  // 点放大的内容以外的区域关闭；Esc 由浏览器触发 onClose
  const handleClick = (e) => {
    if (!e.target.closest(`.${styles.content}`)) onClose();
  };

  return createPortal(
    <dialog ref={dialogRef} className={styles.dialog} onClose={onClose} onClick={handleClick} aria-label={label}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="关闭">
        <CloseIcon />
      </button>
      <div className={styles.scroller}>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>,
    document.body,
  );
}
