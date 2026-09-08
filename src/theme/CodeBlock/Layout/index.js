/**
 * Swizzle 自 @docusaurus/theme-classic 的 CodeBlock/Layout：
 * 原结构不变，在代码内容下方追加预录输出面板（RunOutput/Panel）。
 */
import React from 'react';
import clsx from 'clsx';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
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
  // 锚点 id 来自 Content/String 解析的围栏 meta；登记给 Docusaurus 的坏链检查，跳到后由 custom.css 的 :target 闪一下边框
  const id = run?.blockId || undefined;
  const brokenLinks = useBrokenLinks();
  if (id) {
    brokenLinks.collectAnchor(id);
  }
  return (
    <Container
      as="div"
      id={id}
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
