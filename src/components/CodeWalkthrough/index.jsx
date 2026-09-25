import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { usePrismTheme } from '@docusaurus/theme-common';
import WALKTHROUGHS, { UI } from '@site/src/data/codeWalkthroughs';
import useTypewriter from '@site/src/theme/CodeBlock/RunOutput/useTypewriter';
import ProjectCodeViewer from '../ProjectCodeViewer';
import styles from './styles.module.css';

// Snapshot lesson adapter. All file-viewer UI lives in ProjectCodeViewer.
function fmt(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
}

// Merge each step into a complete snapshot; null removes a file.
function buildSnapshots(steps) {
  const snapshots = [];
  let current = {};
  for (const step of steps) {
    current = { ...current };
    for (const [path, content] of Object.entries(step.files || {})) {
      if (content === null) delete current[path];
      else current[path] = content;
    }
    snapshots.push(current);
  }
  return snapshots;
}

function InlineCode({ text }) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length >= 2 ? (
      <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>
    ) : <React.Fragment key={i}>{part}</React.Fragment>,
  );
}

function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function IconTerminal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
    </svg>
  );
}

function IconWrapText(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
      <path d="m16 16-2 2 2 2" />
      <path d="M3 18h7" />
    </svg>
  );
}

function IconStop(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
}

function TerminalOutput({ run, wrap }) {
  const lines = useMemo(() => run.output.replace(/\n$/, '').split('\n'), [run.output]);
  const { shown, started, done } = useTypewriter(lines, true);
  return (
    <div className={clsx(styles.termOutput, wrap && styles.termOutputWrap)} aria-live="polite">
      <div className={styles.termOutputRow}>
        <span className={styles.termMark} title={UI['terminal.hint']}>
          <IconTerminal className={styles.termMarkIcon} aria-label={UI['terminal.heading']} role="img" />
        </span>
        <div className={styles.termOutputBody}>
          {!started && <div className={styles.termRunning}>{UI['terminal.running']}</div>}
          {lines.slice(0, shown).map((line, i) => (
            <div key={i} className={clsx('run-output__line', styles.termLine)}>{line === '' ? ' ' : line}</div>
          ))}
          {started && !done && <span className="run-output__cursor" />}
        </div>
      </div>
      {done && <div className={clsx(styles.termFoot, run.exit !== 0 && styles.termFootFail)}>{fmt(UI['terminal.exit'], { code: run.exit })}</div>}
    </div>
  );
}

export default function CodeWalkthrough({ variant, step = 1, nav = false }) {
  const data = WALKTHROUGHS[variant];
  if (!data) throw new Error(`CodeWalkthrough: unknown variant "${variant}"`);
  return <Walkthrough key={variant} data={data} initialStep={step} nav={nav} />;
}

function tabsForStep(step, snapshot) {
  const changed = Object.keys(step.files || {}).filter((path) => Object.hasOwn(snapshot, path));
  const tabs = step.file ? [step.file, ...changed.filter((path) => path !== step.file)] : changed;
  return tabs.filter((path) => Object.hasOwn(snapshot, path));
}

function Walkthrough({ data, initialStep, nav }) {
  const { steps } = data;
  const prismTheme = usePrismTheme();
  const snapshots = useMemo(() => buildSnapshots(steps), [steps]);
  // Judge by every step, so a file added later still gets the tree from step 1.
  const single = useMemo(() => new Set(snapshots.flatMap(Object.keys)).size === 1, [snapshots]);
  const [current, setCurrent] = useState(() => Math.min(Math.max(initialStep - 1, 0), steps.length - 1));
  const [runIndex, setRunIndex] = useState(null);
  const [wrap, setWrap] = useState(false);
  const step = steps[current];
  const snapshot = snapshots[current];
  const previous = current > 0 ? snapshots[current - 1] : null;
  const editorBg = prismTheme.plain.backgroundColor;
  const runs = step.runs || [];
  const goToStep = (index) => {
    if (!steps[index]) return;
    setCurrent(index);
    setRunIndex(null);
  };

  return (
    <div className={styles.root}>
      <div className={styles.stepsPanel}>
        <div className={styles.stepHead}>
          <span className={styles.stepTitle}>{fmt(UI['step.heading'], { n: current + 1, title: step.title })}</span>
          <span className={styles.stepCounter}>{fmt(UI['step.counter'], { n: current + 1, total: steps.length })}</span>
        </div>
        <div className={styles.stepBody}>
          {step.body.map((text, i) => <p key={i}><InlineCode text={text} /></p>)}
        </div>
        {nav && (
          <div className={styles.navButtons}>
            <button type="button" disabled={current === 0} onClick={() => goToStep(current - 1)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['btn.prev']}</button>
            <button type="button" disabled={current === steps.length - 1} onClick={() => goToStep(current + 1)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['btn.next']}</button>
          </div>
        )}
      </div>
      <ProjectCodeViewer files={snapshot} previousFiles={previous} stepKey={current}
        preferredFiles={tabsForStep(step, snapshot)} focusFile={step.file} focusRanges={step.lines} single={single} />
      {runs.length > 0 && (
        <div className={styles.terminal} style={{ backgroundColor: editorBg, color: prismTheme.plain.color }}>
          {runs.map((run, k) => {
            const open = runIndex === k;
            return (
              <div key={`${current}-${k}`} className={styles.termRun}>
                <div className={styles.termPrompt}>
                  <span className={styles.termDollar} aria-hidden="true">$</span>
                  <code className={styles.termCmd}>{run.cmd}</code>
                  {open && (
                    <button type="button" aria-pressed={wrap}
                      aria-label={wrap ? UI['terminal.nowrap'] : UI['terminal.wrap']}
                      title={wrap ? UI['terminal.nowrap'] : UI['terminal.wrap']}
                      onClick={() => setWrap(!wrap)} className={clsx(styles.termBtn, wrap && styles.termBtnOpen)}>
                      <IconWrapText className={styles.termIcon} />
                    </button>
                  )}
                  <button type="button" aria-expanded={open}
                    aria-label={open ? UI['terminal.collapse'] : UI['terminal.run']}
                    title={open ? UI['terminal.collapse'] : UI['terminal.run']}
                    onClick={() => setRunIndex(open ? null : k)} className={clsx(styles.termBtn, open && styles.termBtnOpen)}>
                    {open ? <IconStop className={styles.termIcon} /> : <IconPlay className={styles.termIcon} />}
                  </button>
                </div>
                {open && <TerminalOutput run={run} wrap={wrap} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
