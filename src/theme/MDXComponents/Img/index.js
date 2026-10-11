import React, { useCallback, useEffect, useRef, useState } from 'react';
import MDXImg from '@theme-original/MDXComponents/Img';
import Lightbox, { ZoomButton } from '@site/src/components/Lightbox';
import styles from './styles.module.css';

/**
 * 包装 Docusaurus 默认的 markdown 图片组件：
 * 图片被缩小显示时，右上角出现放大按钮，点击后用原生 dialog 弹层显示原图，长图可滚动。
 * 按钮和弹层在 src/components/Lightbox，课文配图 Diagram 也用它。
 */
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
      {zoomable && <ZoomButton label="放大图片" onClick={() => setOpen(true)} />}
      {open && (
        <Lightbox label={props.alt ? `放大查看：${props.alt}` : '放大查看图片'} onClose={close}>
          <img src={props.src} alt={props.alt || ''} />
        </Lightbox>
      )}
    </span>
  );
}
