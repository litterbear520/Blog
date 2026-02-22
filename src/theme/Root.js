import React from 'react';
import PasswordProtect from '../components/PasswordProtect';

/**
 * Docusaurus Root 组件
 * 这是 React 树的最顶层组件，适合做全局认证逻辑
 */
export default function Root({ children }) {
  return <PasswordProtect>{children}</PasswordProtect>;
}
