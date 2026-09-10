import MDXComponents from '@theme-original/MDXComponents';
import Term from '@site/src/components/Term';

// 注册到 MDX 全局作用域，docs / roadmap / blog 正文里可直接写 <Term tip="...">，无需 import
export default {
  ...MDXComponents,
  Term,
};
