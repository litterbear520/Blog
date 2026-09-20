import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Check, CircleAlert, Copy } from 'lucide-react';
import { UI } from '@site/src/data/projectViewerUI';
import styles from './styles.module.css';

const RESET_MS = 2000;

// The viewer keys this by step, file and source, so stale async work is discarded.
export default function CopyCodeButton({ text, path }) {
  const [status, setStatus] = useState('idle');
  const resetTimer = useRef(null);
  const requestId = useRef(0);
  const pending = useRef(false);
  const hasFile = typeof text === 'string';

  useEffect(() => () => {
    clearTimeout(resetTimer.current);
    requestId.current += 1;
  }, []);

  const handleCopy = async () => {
    if (!hasFile || pending.current) return;
    const id = ++requestId.current;
    pending.current = true;
    clearTimeout(resetTimer.current);
    setStatus('copying');
    try {
      // Copy raw source, not rendered tokens, line numbers or deleted diff rows.
      await navigator.clipboard.writeText(text);
      if (id !== requestId.current) return;
      setStatus('copied');
      resetTimer.current = setTimeout(() => setStatus('idle'), RESET_MS);
    } catch {
      if (id !== requestId.current) return;
      setStatus('error');
    } finally {
      if (id === requestId.current) pending.current = false;
    }
  };

  const label = UI[`copy.${status}`];
  const hint = !hasFile ? UI['copy.empty'] : status === 'error' ? UI['copy.errorHint']
    : status === 'idle' ? UI['copy.hint'].replace('{path}', path) : label;
  const Icon = status === 'copied' ? Check : status === 'error' ? CircleAlert : Copy;
  return (
    <>
      <button type="button" className={clsx(styles.codeActionButton,
        status === 'copied' && styles.codeActionCopied, status === 'error' && styles.codeActionError)}
        disabled={!hasFile || status === 'copying'} onClick={handleCopy}
        title={hint} aria-label={hint} aria-busy={status === 'copying'}>
        <Icon className={styles.codeActionIcon} aria-hidden="true" focusable="false" />
      </button>
      <span className={styles.copyStatus} role="status" aria-live="polite" aria-atomic="true">
        {status === 'copied' ? UI['copy.copied'] : status === 'error' ? UI['copy.errorHint'] : ''}
      </span>
    </>
  );
}
