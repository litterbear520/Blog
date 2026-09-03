import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import MDXImg from '@theme-original/MDXComponents/Img';
import styles from './styles.module.css';

/**
 * 包装 Docusaurus 默认的 markdown 图片组件：
 * 图片被缩小显示时，左上角出现放大按钮，点击后用原生 dialog 弹层显示原图，长图可滚动。
 * 弹层用 portal 挂到 body，避免 dialog 出现在 <p> 里造成 SSR/水合不一致。
 */

function ZoomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
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

function Lightbox({ src, alt, onClose }) {
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

  // 点图片以外的区域关闭；Esc 由浏览器触发 onClose
  const handleClick = (e) => {
    if (e.target.tagName !== 'IMG') onClose();
  };

  return createPortal(
    <dialog ref={dialogRef} className={styles.dialog} onClose={onClose} onClick={handleClick} aria-label={alt ? `放大查看：${alt}` : '放大查看图片'}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="关闭">
        <CloseIcon />
      </button>
      <div className={styles.scroller}>
        <img src={src} alt={alt || ''} className={styles.full} />
      </div>
    </dialog>,
    document.body,
  );
}

export default function Img(props) {
  const wrapRef = useRef(null);
  const [zoomable, setZoomable] = useState(false);
  const [open, setOpen] = useState(false);

  // 只有原图比显示尺寸大时才有放大的意义
  useEffect(() => {
    const img = wrapRef.current?.querySelector('img');
    if (!img) return undefined;

    const check = () => {
      setZoomable(img.naturalWidth > img.clientWidth + 8);
    };

    if (img.complete) check();
    img.addEventListener('load', check);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(check) : null;
    ro?.observe(img);

    return () => {
      img.removeEventListener('load', check);
      ro?.disconnect();
    };
  }, [props.src]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <span ref={wrapRef} className={styles.wrap}>
      <MDXImg {...props} />
      {zoomable && (
        <button type="button" className={styles.zoom} onClick={() => setOpen(true)} aria-label="放大图片" title="放大图片">
          <ZoomIcon />
        </button>
      )}
      {open && <Lightbox src={props.src} alt={props.alt} onClose={close} />}
    </span>
  );
}
