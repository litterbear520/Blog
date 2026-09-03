/**
 * Swizzle 自 @docusaurus/theme-classic 的 prism-include-languages：
 * 原样加载 themeConfig.prism.additionalLanguages，然后用 prism-grammar-tweaks.js 细化切分。
 */
import siteConfig from '@generated/docusaurus.config';
import refinePrismGrammars from './prism-grammar-tweaks';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;
  // Prism 语言组件挂在全局 Prism 上，而 prism-react-renderer 用自己的实例：临时挂到 window，加载完再摘掉
  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      // eslint-disable-next-line global-require
      require('prismjs/components/prism-markup-templating.js');
    }
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });
  refinePrismGrammars(PrismObject);
  delete globalThis.Prism;
  if (typeof PrismBefore !== 'undefined') {
    globalThis.Prism = PrismObject;
  }
}
