/**
 * Swizzle 自 @docusaurus/theme-classic 的 CodeBlock/Content/String：
 * 原逻辑不变，只额外读取 remark-run-output 插件挂上的 data-output，
 * 用 RunOutputProvider 包一层，供运行按钮和输出面板使用。
 */
import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  CodeBlockContextProvider,
  createCodeBlockMetadata,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import CodeBlockLayout from '@theme/CodeBlock/Layout';
import {RunOutputProvider} from '@site/src/theme/CodeBlock/RunOutput/context';

function useCodeBlockMetadata(props) {
  const {prism} = useThemeConfig();
  return createCodeBlockMetadata({
    code: props.children,
    className: props.className,
    metastring: props.metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: props.language,
    title: props.title,
    showLineNumbers: props.showLineNumbers,
  });
}

export default function CodeBlockString(props) {
  const metadata = useCodeBlockMetadata(props);
  const wordWrap = useCodeWordWrap();
  return (
    <RunOutputProvider
      output={props['data-output']}
      status={props['data-output-status']}>
      <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
        <CodeBlockLayout />
      </CodeBlockContextProvider>
    </RunOutputProvider>
  );
}
