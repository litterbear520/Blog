import React, { useId, useMemo, useState } from 'react';
import clsx from 'clsx';
import WALKTHROUGHS, { UI } from '@site/src/data/mcpWalkthroughs';
import ProjectCodeViewer from '../ProjectCodeViewer';
import styles from './styles.module.css';

// Guided lesson adapter: keep the tour/accordion, delegate all file UI.
const TOUR = ['steps', 'buttons', 'editor'];

function fmt(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
}

function InlineCode({ text }) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length >= 2 ? (
      <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>
    ) : <React.Fragment key={i}>{part}</React.Fragment>,
  );
}

function StepBody({ body }) {
  return body.map((block, i) => {
    if (block.type === 'list') {
      const Tag = block.ordered ? 'ol' : 'ul';
      return <Tag key={i}>{block.items.map((item, j) => <li key={j}><InlineCode text={item} /></li>)}</Tag>;
    }
    return <p key={i}><InlineCode text={block.text} /></p>;
  });
}

export default function McpWalkthrough({ variant = 'sampling' }) {
  const data = WALKTHROUGHS[variant];
  if (!data) throw new Error(`McpWalkthrough: unknown variant "${variant}"`);
  return <Walkthrough key={variant} data={data} />;
}

function Walkthrough({ data }) {
  const { files, steps } = data;
  const panelPrefix = useId();
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(0);
  const [highlight, setHighlight] = useState(steps[0] ?? null);
  const [selectionKey, setSelectionKey] = useState(0);
  const [tour, setTour] = useState(0);
  const focusRanges = useMemo(() => highlight ? [[highlight.line, highlight.endLine ?? highlight.line]] : [], [highlight]);
  const goToStep = (index) => {
    const step = steps[index];
    if (!step) return;
    setCurrent(index);
    setExpanded(index);
    setHighlight(step);
    // Reopening the current lesson must also reveal its file after manual browsing.
    setSelectionKey((key) => key + 1);
  };
  const tourTarget = tour === null ? null : TOUR[tour];
  const ring = (name) => tourTarget === name ? styles.ring : undefined;

  return (
    <div className={styles.root}>
      {tour !== null && (
        <div className={styles.tour}>
          <div className={styles.tourDots} aria-label={fmt(UI['tour.aria'], { n: tour + 1, total: TOUR.length })}>
            {TOUR.map((name, i) => <span key={name} aria-hidden="true" className={clsx(styles.dot, i === tour && styles.dotActive)} />)}
          </div>
          <h3 className={styles.tourTitle}>{UI[`tour.${TOUR[tour]}.title`]}</h3>
          <p className={styles.tourBody}>{UI[`tour.${TOUR[tour]}.body`]}</p>
          <div className={styles.tourActions}>
            {tour > 0 ? (
              <button type="button" onClick={() => setTour(tour - 1)} className={clsx(styles.btn, styles.btnSecondary)}>{UI['tour.btn.prev']}</button>
            ) : (
              <button type="button" onClick={() => setTour(null)} className={clsx(styles.btn, styles.btnSecondary)}>{UI['tour.btn.skip']}</button>
            )}
            {tour < TOUR.length - 1 ? (
              <button type="button" onClick={() => setTour(tour + 1)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['tour.btn.next']}</button>
            ) : (
              <button type="button" onClick={() => setTour(null)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['tour.btn.finish']}</button>
            )}
          </div>
        </div>
      )}
      <div className={styles.layout}>
        <div className={styles.stepsPanel}>
          <div className={clsx(styles.stepList, ring('steps'))}>
            {steps.map((step, i) => {
              const isExpanded = expanded === i;
              const panelId = `${panelPrefix}-step-${i}`;
              return (
                <div key={i} className={styles.step}>
                  <button type="button" aria-expanded={isExpanded} aria-controls={panelId}
                    onClick={() => isExpanded ? setExpanded(null) : goToStep(i)}
                    className={clsx(styles.stepHeader, current === i && styles.stepHeaderActive)}>
                    <span>{fmt(UI['step.heading'], { n: i + 1, title: step.title })}</span>
                    <span aria-hidden="true" className={clsx(styles.chevron, isExpanded && styles.chevronOpen)}>▶</span>
                  </button>
                  <div id={panelId} hidden={!isExpanded} className={styles.stepBody}><StepBody body={step.body} /></div>
                </div>
              );
            })}
          </div>
          <div className={clsx(styles.navButtons, ring('buttons'))}>
            <button type="button" disabled={current === 0} onClick={() => goToStep(current - 1)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['btn.prev']}</button>
            <button type="button" disabled={current === steps.length - 1} onClick={() => goToStep(current + 1)} className={clsx(styles.btn, styles.btnPrimary)}>{UI['btn.next']}</button>
          </div>
        </div>
        <ProjectCodeViewer files={files} stepKey={selectionKey} preferredFiles={steps[current]?.file ? [steps[current].file] : []}
          focusFile={highlight?.file} focusRanges={focusRanges} onFileSelect={() => setHighlight(null)} className={ring('editor')} />
      </div>
    </div>
  );
}
