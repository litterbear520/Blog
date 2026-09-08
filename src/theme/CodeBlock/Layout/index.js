/**
 * Swizzle 自 @docusaurus/theme-classic 的 CodeBlock/Layout：
 * 原结构不变，在代码内容下方追加预录输出面板（RunOutput/Panel）。
 */
import React from 'react';
import clsx from 'clsx';
import {useCodeBlockContext} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import Title from '@theme/CodeBlock/Title';
import Content from '@theme/CodeBlock/Content';
import Buttons from '@theme/CodeBlock/Buttons';
import RunOutputPanel from '@site/src/theme/CodeBlock/RunOutput/Panel';
import {useRunOutput} from '@site/src/theme/CodeBlock/RunOutput/context';
import styles from './styles.module.css';

export default function CodeBlockLayout({className}) {
  const {metadata} = useCodeBlockContext();
  const run = useRunOutput();
  const open = Boolean(run && run.open);
  return (
    <Container
      as="div"
      className={clsx(className, metadata.className, open && 'run-output-open')}>
      {metadata.title && (
        <div className={styles.codeBlockTitle}>
          <Title>{metadata.title}</Title>
        </div>
      )}
      <div className={styles.codeBlockContent}>
        <Content />
        <Buttons />
      </div>
      <RunOutputPanel />
    </Container>
  );
}
