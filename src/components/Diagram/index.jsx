import React from 'react';
import DIAGRAMS from '@site/src/data/diagrams';
import styles from './styles.module.css';

// 结构图：按 diagram-design 规则画好的 SVG 原样嵌入；SVG 里只有类名，配色在 styles.module.css。
// SVG 自带 role="img" 和 <title>/<desc>，读屏软件读的就是它们。
export default function Diagram({ variant }) {
  const svg = DIAGRAMS[variant];
  if (!svg) throw new Error(`Diagram: unknown variant "${variant}"`);
  return (
    <figure className={styles.figure}>
      <div className={styles.scroller} dangerouslySetInnerHTML={{ __html: svg }} />
    </figure>
  );
}
