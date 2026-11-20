import React, { useCallback, useEffect, useId, useRef } from 'react';
import { placeTip } from './placement.mjs';
import styles from './styles.module.css';

/**
 * 术语提示：正文里的词加虚线下划线，悬停 / 键盘聚焦时在上方弹出解释。
 * 显示靠 CSS，可聚焦（tabIndex）并用 aria-describedby 关联，读屏和键盘都能拿到解释。
 * 弹层用 fixed 定位，不会被表格这类带滚动的容器裁掉；坐标在弹出时算，见 placement.mjs。
 * 按 Esc 关掉（焦点和鼠标不用移开）；鼠标可以移到弹层上，方便放大镜用户和选中文字。
 *
 *   <Term tip="读取局部变量">LOAD_FAST</Term>
 */
export default function Term({ tip, children }) {
  const id = useId();
  const termRef = useRef(null);
  const tipRef = useRef(null);

  const place = useCallback(() => {
    const term = termRef.current;
    const el = tipRef.current;
    if (!term || !el) return;
    // 词可能折成多行，以第一行为准，弹层不会盖住词本身
    const anchor = term.getClientRects()[0] ?? term.getBoundingClientRect();
    const { left, top, side, arrow } = placeTip({
      anchor,
      tip: { width: el.offsetWidth, height: el.offsetHeight },
      viewportWidth: document.documentElement.clientWidth,
      topInset: document.querySelector('.navbar')?.getBoundingClientRect().bottom ?? 0,
    });
    el.style.setProperty('--tip-left', `${left}px`);
    el.style.setProperty('--tip-top', `${top}px`);
    el.style.setProperty('--tip-arrow', `${arrow}px`);
    el.dataset.side = side;
  }, []);

  const onKey = useCallback((e) => {
    if (e.key === 'Escape' && termRef.current) termRef.current.dataset.dismissed = '';
  }, []);

  const unfollow = useCallback(() => {
    window.removeEventListener('scroll', place, true);
    window.removeEventListener('resize', place);
    window.removeEventListener('keydown', onKey);
    if (termRef.current) delete termRef.current.dataset.dismissed;
  }, [place, onKey]);

  // fixed 不随页面滚动，弹出期间跟着词走；capture 才收得到表格内部的滚动
  const show = useCallback(() => {
    place();
    window.addEventListener('scroll', place, { capture: true, passive: true });
    window.addEventListener('resize', place);
    window.addEventListener('keydown', onKey);
  }, [place, onKey]);

  useEffect(() => unfollow, [unfollow]);

  return (
    <span
      ref={termRef}
      className={styles.term}
      tabIndex={0}
      aria-describedby={id}
      onMouseEnter={show}
      onMouseLeave={unfollow}
      onFocus={show}
      onBlur={unfollow}
    >
      {children}
      <span ref={tipRef} role="tooltip" id={id} className={styles.tip}>
        {tip}
      </span>
    </span>
  );
}
