import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconImportant from '@theme/Admonition/Icon/Important';

// 补上 GitHub alerts 里的 IMPORTANT（紫色）；关键字在 docusaurus.config.js 的 admonitions.keywords 注册
function AdmonitionTypeImportant(props) {
  return (
    <AdmonitionLayout icon={<IconImportant />} title="重要" {...props} className={['alert', props.className].filter(Boolean).join(' ')}>
      {props.children}
    </AdmonitionLayout>
  );
}

export default {
  ...DefaultAdmonitionTypes,
  important: AdmonitionTypeImportant,
};
