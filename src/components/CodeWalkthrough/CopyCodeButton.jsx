import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Check, CircleAlert, Copy } from 'lucide-react';
import { UI } from '@site/src/data/codeWalkthroughs';
import styles from './styles.module.css';

const RESET_MS = 2000;

// 父组件用步骤和文件路径作为 key，切换后不沿用上一次的复制状态。
export default function CopyCodeButton({ text, path }) {
  const [status, setStatus] = useState('idle');
  const resetTimer = useRef(null);
  const requestId = useRef(0);
  const hasFile = typeof text === 'string'; // 空文件也可以复制。

  useEffect(() => () => {
    clearTimeout(resetTimer.current);
    // 忽略切换文件或卸载后才完成的剪贴板请求。
    requestId.current += 1;
  }, []);

  const handleCopy = async () => {
    if (!hasFile || status === 'copying') return;
    const id = ++requestId.current;
    clearTimeout(resetTimer.current);
    setStatus('copying');

    try {
      // 保留原始缩进、空行和末尾换行，不从高亮后的 DOM 读取。
      await navigator.clipboard.writeText(text);
      if (id !== requestId.current) return;
      setStatus('copied');
      resetTimer.current = setTimeout(() => setStatus('idle'), RESET_MS);
    } catch {
      if (id !== requestId.current) return;
      setStatus('error');
    }
  };

  const label = UI[`copy.${status}`];
  const hint = !hasFile
    ? UI['copy.empty']
    : status === 'error'
      ? UI['copy.errorHint']
      : status === 'idle'
        ? UI['copy.hint'].replace('{path}', path)
        : label;
  const Icon = status === 'copied' ? Check : status === 'error' ? CircleAlert : Copy;

  return (
    <>
      <button
        type="button"
        className={clsx(
          styles.codeActionButton,
          status === 'copied' && styles.codeActionCopied,
          status === 'error' && styles.codeActionError,
        )}
        disabled={!hasFile || status === 'copying'}
        onClick={handleCopy}
        title={hint}
        aria-label={hint}
        aria-busy={status === 'copying'}
      >
        <Icon className={styles.codeActionIcon} aria-hidden="true" focusable="false" />
      </button>
      <span className={styles.copyStatus} role="status" aria-live="polite" aria-atomic="true">
        {status === 'copied' ? UI['copy.copied'] : status === 'error' ? UI['copy.errorHint'] : ''}
      </span>
    </>
  );
}
