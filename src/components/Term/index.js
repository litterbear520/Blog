import React, { useId } from 'react';
import styles from './styles.module.css';

/**
 * 术语提示：正文里的词加虚线下划线，悬停 / 键盘聚焦时在上方弹出解释。
 * 纯 CSS 显示，可聚焦（tabIndex）并用 aria-describedby 关联，读屏和键盘都能拿到解释。
 *
 *   <Term tip="读取局部变量">LOAD_FAST</Term>
 */
export default function Term({ tip, children }) {
  const id = useId();
  return (
    <span className={styles.term} tabIndex={0} aria-describedby={id}>
      {children}
      <span role="tooltip" id={id} className={styles.tip}>
        {tip}
      </span>
    </span>
  );
}
