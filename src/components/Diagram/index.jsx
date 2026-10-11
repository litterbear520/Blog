import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import DIAGRAMS from '@site/src/data/diagrams';
import Lightbox, { ZoomButton } from '@site/src/components/Lightbox';
import styles from './styles.module.css';

// 课文配图：按规则画好的 SVG 原样嵌入；SVG 里只有类名，配色在 styles.module.css。
// SVG 自带 role="img" 和 <title>/<desc>，读屏软件读的就是它们。右上角可以放大查看。

// 放大的那一份和页面上的同时存在，id 加后缀，免得 url(#…) 和 aria-labelledby 指到两处
function withSuffix(svg, suffix) {
  return svg
    .replace(/\bid="([^"]+)"/g, `id="$1${suffix}"`)
    .replace(/url\(#([^)]+)\)/g, `url(#$1${suffix})`)
    .replace(/aria-labelledby="([^"]+)"/g, (_, ids) => `aria-labelledby="${ids.split(/\s+/).map((id) => id + suffix).join(' ')}"`);
}

export default function Diagram({ variant }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const svg = DIAGRAMS[variant];
  if (!svg) throw new Error(`Diagram: unknown variant "${variant}"`);
  const title = svg.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];

  return (
    <figure className={styles.figure}>
      <div className={styles.scroller} dangerouslySetInnerHTML={{ __html: svg }} />
      <ZoomButton label="放大查看这张图" onClick={() => setOpen(true)} />
      {open && (
        <Lightbox label={title ? `放大查看：${title}` : '放大查看这张图'} onClose={close}>
          <div className={clsx(styles.figure, styles.zoomed)} dangerouslySetInnerHTML={{ __html: withSuffix(svg, '-zoom') }} />
        </Lightbox>
      )}
    </figure>
  );
}
