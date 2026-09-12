import React from 'react';
import {OctagonAlert} from 'lucide-react';

// 覆盖 Docusaurus 自带的实心图标，改用 Lucide 线条版；尺寸与描边由 custom.css 的提示块样式统一控制
export default function AdmonitionIconDanger(props) {
  return <OctagonAlert size={18} strokeWidth={2} aria-hidden="true" {...props} />;
}
