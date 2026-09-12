import React from 'react';
import {processAdmonitionProps} from '@docusaurus/theme-common';
import Admonition from '@theme-original/Admonition';

// 站点 locale 是 en，没写自定义标题的 :::info 会显示英文 "info"，这里补上中文默认标签。
// MDX 里 :::info[标题] 的标题以 mdxAdmonitionTitle 子节点传入，先按官方逻辑提取成 title 再判断有没有
const DEFAULT_TITLES = {
  note: '备注',
  tip: '提示',
  info: '信息',
  warning: '注意',
  caution: '注意',
  danger: '危险',
};

export default function AdmonitionWrapper(unprocessedProps) {
  const props = processAdmonitionProps(unprocessedProps);
  const title = props.title ?? DEFAULT_TITLES[props.type];
  return <Admonition {...props} title={title} />;
}
