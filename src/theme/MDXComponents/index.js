import MDXComponents from '@theme-original/MDXComponents';
import Term from '@site/src/components/Term';
import QuickCheck from '@site/src/components/QuickCheck';
import ReadMore from '@site/src/components/ReadMore';
import LessonMeta from '@site/src/components/LessonMeta';

// 注册到 MDX 全局作用域，docs / roadmap / blog 正文里可直接写 <Term tip="...">、<QuickCheck …>、<ReadMore …>、<LessonMeta …>，无需 import
export default {
  ...MDXComponents,
  Term,
  QuickCheck,
  ReadMore,
  LessonMeta,
};
