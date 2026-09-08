/**
 * Swizzle 自 @docusaurus/theme-classic 的 CodeBlock/Buttons：
 * 在换行、复制按钮左侧加一个「运行」按钮（仅当代码块带预录输出时出现）。
 */
import React from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CopyButton from '@theme/CodeBlock/Buttons/CopyButton';
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton';
import RunButton from '@theme/CodeBlock/Buttons/RunButton';
import styles from './styles.module.css';

// 按钮不做 SSR：初始 HTML 里没用，且 SVG 体积不小；原实现如此，这里保持
export default function CodeBlockButtons({className}) {
  return (
    <BrowserOnly>
      {() => (
        <div className={clsx(className, styles.buttonGroup)}>
          <RunButton />
          <WordWrapButton />
          <CopyButton />
        </div>
      )}
    </BrowserOnly>
  );
}
