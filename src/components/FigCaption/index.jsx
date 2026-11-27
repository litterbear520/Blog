import React from 'react';
import styles from './styles.module.css';

/**
 * 图注：写在正文图片的下一行，正体小字、浅一级的文字色，紧贴上面的图片。
 * 用它代替 *斜体段落*：中文字体没有斜体，浏览器硬拉斜，图注一多就很难看。
 *
 *   ![一句话说明](./slide.png)
 *
 *   <FigCaption>“幻灯片标题”：图上英文的中文翻译。</FigCaption>
 */
export default function FigCaption({ children }) {
  return <p className={styles.caption}>{children}</p>;
}
