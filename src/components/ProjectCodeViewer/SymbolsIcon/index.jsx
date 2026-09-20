import React from 'react';
import clsx from 'clsx';
import PythonIcon from './icons/python.svg';
import GitIcon from './icons/git.svg';
import GearIcon from './icons/gear.svg';
import DocumentIcon from './icons/document.svg';
import TextIcon from './icons/text.svg';
import MarkdownIcon from './icons/markdown.svg';
import JsonIcon from './icons/brackets-yellow.svg';
import FolderIcon from './icons/folder.svg';
import TestFolderIcon from './icons/folder-red-code.svg';
import { getSymbolIconName } from './associations.mjs';
import styles from './styles.module.css';

const ICONS = {
  python: PythonIcon,
  git: GitIcon,
  gear: GearIcon,
  document: DocumentIcon,
  text: TextIcon,
  markdown: MarkdownIcon,
  'brackets-yellow': JsonIcon,
  folder: FolderIcon,
  'folder-red-code': TestFolderIcon,
};

// 原始 SVG 本地打包为 React 组件，不请求 CDN，也不使用系统 emoji。
// 树和标签栏共用同一套映射；折叠状态交给箭头，保留 Symbols 原始文件夹形状。
export default function SymbolsIcon({ path, folder = false, tree = false, expanded = false }) {
  const name = getSymbolIconName(path, { folder });
  const Icon = ICONS[name];
  const icon = (
    <Icon
      className={styles.icon}
      width={16}
      height={16}
      aria-hidden="true"
      focusable="false"
      data-symbols-icon={name}
    />
  );

  if (!tree) return icon;

  return (
    <span className={styles.treeIcon} aria-hidden="true">
      {folder ? (
        <svg
          className={clsx(styles.chevron, expanded && styles.expanded)}
          width={10}
          height={10}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <path d="m9 5 7 7-7 7" />
        </svg>
      ) : (
        <span className={styles.chevron} />
      )}
      {icon}
    </span>
  );
}
