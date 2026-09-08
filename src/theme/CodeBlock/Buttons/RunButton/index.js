import React from 'react';
import clsx from 'clsx';
import Button from '@theme/CodeBlock/Buttons/Button';
import {useRunOutput} from '@site/src/theme/CodeBlock/RunOutput/context';
import styles from './styles.module.css';

// Lucide play / square 线条图标，与导航栏 GitHub、深浅切换图标同一风格
function IconPlay(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function IconStop(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
}

export default function RunButton({className}) {
  const run = useRunOutput();
  if (!run || run.output === null) {
    return null;
  }
  const label = run.open ? '收起输出' : '运行（显示预录输出）';
  return (
    <Button
      aria-label={label}
      aria-expanded={run.open}
      title={label}
      className={clsx(className, styles.runButton, run.open && styles.runButtonOpen)}
      onClick={run.toggle}>
      <span className={styles.runButtonIcons} aria-hidden="true">
        {run.open ? (
          <IconStop className={styles.runButtonIcon} />
        ) : (
          <IconPlay className={styles.runButtonIcon} />
        )}
      </span>
    </Button>
  );
}
