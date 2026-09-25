import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { FileCode2, FileDiff, Play, Square } from 'lucide-react';
import { Highlight } from 'prism-react-renderer';
import { usePrismTheme } from '@docusaurus/theme-common';
import { UI } from '@site/src/data/projectViewerUI';
import { RunOutputProvider } from '@site/src/theme/CodeBlock/RunOutput/context';
import RunOutputPanel from '@site/src/theme/CodeBlock/RunOutput/Panel';
import { diffLines, plainRows } from './diff';
import { buildTree, closeFile, fileStatus, hasFile, isFocused, languageOf, openFile, syncSelection } from './model.mjs';
import CopyCodeButton from './CopyCodeButton';
import SymbolsIcon from './SymbolsIcon';
import styles from './styles.module.css';

const EMPTY_PATHS = [];
const EMPTY_RANGES = [];

/**
 * One renderer for MCP, Python and roadmap projects. Lesson adapters own the
 * instructions/tour/terminal; this component owns files, tabs, icons and code.
 * Change stepKey to reveal preferredFiles. Omit previousFiles to disable diff.
 * focusRanges are inclusive, 1-based current-file line ranges (not diff rows).
 * single swaps the tree, tabs and picker for a filename header and lets the code
 * set the height; the adapter decides it from every step, so a later step cannot
 * add a sidebar.
 * run ({ output, status }) adds a code-block style run button and output panel;
 * the panel closes whenever stepKey changes.
 */
export default function ProjectCodeViewer({
  files, previousFiles = null, preferredFiles = EMPTY_PATHS, stepKey = 0,
  focusFile, focusRanges = EMPTY_RANGES, onFileSelect, className, single = false, run = null,
}) {
  const prismTheme = usePrismTheme();
  const [selection, setSelection] = useState(() => syncSelection(null, files, preferredFiles, stepKey));
  const [collapsed, setCollapsed] = useState(() => new Set());
  const [showDiff, setShowDiff] = useState(true);
  const scrollRef = useRef(null);
  const [runOpenAt, setRunOpenAt] = useState(null);
  const runOpen = run != null && runOpenAt !== null && Object.is(runOpenAt.stepKey, stepKey);
  const toggleRun = () => setRunOpenAt(runOpen ? null : { stepKey });

  // Guarded, same-component state adjustment: never commit stale file contents
  // for a new step. Unlike key-remounting the viewer, this preserves other tabs.
  if (selection.files !== files || !Object.is(selection.stepKey, stepKey)) {
    setSelection(syncSelection(selection, files, preferredFiles, stepKey));
  }

  const { activeFile, tabs } = selection;
  const tree = useMemo(() => buildTree(Object.keys(files)), [files]);
  const statusOf = (path) => fileStatus(files, previousFiles, path);
  const activeStatus = statusOf(activeFile);
  const source = hasFile(files, activeFile) ? files[activeFile] : undefined;
  const rows = useMemo(() => {
    if (source === undefined) return [];
    return showDiff && activeStatus === 'changed'
      ? diffLines(previousFiles[activeFile], source) : plainRows(source);
  }, [source, previousFiles, activeFile, activeStatus, showDiff]);
  const ranges = focusFile == null || focusFile === activeFile ? focusRanges : EMPTY_RANGES;
  const editorBg = prismTheme.plain.backgroundColor;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector('[data-change]') || container.querySelector('[data-focus]');
    const top = target ? Math.max(0, target.offsetTop - container.clientHeight / 2 + target.offsetHeight / 2) : 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.scrollTo({ top, behavior: target && !reduceMotion ? 'smooth' : 'auto' });
  }, [stepKey, activeFile, showDiff, source, focusFile, focusRanges]);

  const selectFile = (path) => {
    setSelection((current) => openFile(current, path));
    onFileSelect?.(path);
  };
  const toggleFolder = (path) => setCollapsed((current) => {
    const next = new Set(current);
    if (next.has(path)) next.delete(path);
    else next.add(path);
    return next;
  });
  const renderTree = (nodes, depth) => nodes.map((node) => {
    const indent = { paddingLeft: `${8 + depth * 14}px` };
    if (node.type === 'file') {
      const status = statusOf(node.path);
      return (
        <button key={node.path} type="button" onClick={() => selectFile(node.path)}
          aria-pressed={node.path === activeFile} style={indent} title={node.path}
          className={clsx(styles.treeItem, node.path === activeFile && styles.treeItemActive)}>
          <SymbolsIcon path={node.path} tree />
          <span className={styles.treeName}>{node.name}</span>
          {status !== 'same' && <span className={clsx(styles.treeDot, status === 'new' && styles.treeDotNew)} title={UI[`badge.${status}`]} />}
        </button>
      );
    }
    const isCollapsed = collapsed.has(node.path);
    return (
      <div key={node.path}>
        <button type="button" aria-expanded={!isCollapsed} onClick={() => toggleFolder(node.path)}
          style={indent} className={styles.treeItem} title={node.path}>
          <SymbolsIcon path={node.path} folder tree expanded={!isCollapsed} />
          <span className={styles.treeName}>{node.name}</span>
        </button>
        {!isCollapsed && renderTree(node.children, depth + 1)}
      </div>
    );
  });

  return (
    <RunOutputProvider output={run?.output} status={run?.status} open={runOpen} onToggle={toggleRun}>
      <div className={clsx(styles.editor, single && styles.single, className)} data-project-code-viewer="">
        {!single && (
          <aside className={styles.fileTree} aria-label={UI['files.heading']}>
            <h4 className={styles.fileTreeHeading}>{UI['files.heading']}</h4>
            <div className={styles.treeScroll}>{renderTree(tree, 0)}</div>
          </aside>
        )}
        <div className={styles.editorMain}>
          {/* The desktop tree is hidden on small screens. Keep ALL files reachable,
              even when every tab has been closed; do not rely on existing tabs. */}
          {!single && (<>
            <label className={styles.mobilePicker}>
              <span>{UI['files.heading']}</span>
              <select aria-label={UI['files.heading']} value={activeFile ?? ''}
                onChange={(event) => selectFile(event.target.value)}>
                <option value="" disabled>{UI['copy.empty']}</option>
                {Object.keys(files).map((path) => <option key={path} value={path}>{path}</option>)}
              </select>
            </label>
            <div className={styles.editorToolbar}>
              <div className={styles.tabs} aria-label={UI['aria.openFiles']}>
                {tabs.map((path) => {
                  const active = path === activeFile;
                  const status = statusOf(path);
                  return (
                    <div key={path} className={clsx(styles.tab, active && styles.tabActive)}
                      style={active ? { backgroundColor: editorBg } : undefined}>
                      <button type="button" aria-pressed={active} onClick={() => selectFile(path)} className={styles.tabBtn} title={path}>
                        <SymbolsIcon path={path} />
                        {path.split('/').pop()}
                        {status !== 'same' && <span className={clsx(styles.badge, status === 'new' && styles.badgeNew)}>{UI[`badge.${status}`]}</span>}
                      </button>
                      <button type="button" aria-label={UI['aria.closeTab'].replace('{path}', path)}
                        onClick={() => setSelection((current) => closeFile(current, path))} className={styles.tabClose}>×</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </>)}
          {single && activeFile && (
            <div className={styles.fileHeader} title={activeFile}>
              <SymbolsIcon path={activeFile} />
              <span className={styles.fileHeaderName}>{activeFile}</span>
            </div>
          )}
          <div className={styles.codeShell} style={{ backgroundColor: editorBg, '--cw-editor-bg': editorBg }}>
            {source !== undefined && (
              <div className={styles.codeActions} role="group" aria-label={UI['aria.codeActions']}>
                {run && (
                  <button type="button" className={clsx(styles.codeActionButton, runOpen && styles.codeActionOn)}
                    aria-expanded={runOpen} aria-label={runOpen ? UI['run.hide'] : UI['run.show']}
                    title={runOpen ? UI['run.hide'] : UI['run.show']} onClick={toggleRun}>
                    {runOpen ? <Square className={styles.codeActionIcon} aria-hidden="true" focusable="false" />
                      : <Play className={styles.codeActionIcon} aria-hidden="true" focusable="false" />}
                  </button>
                )}
                {activeStatus === 'changed' && (
                  <button type="button" className={styles.codeActionButton} aria-label={UI['diff.show']}
                    aria-pressed={showDiff} title={showDiff ? UI['diff.hide'] : UI['diff.show']}
                    onClick={() => setShowDiff((value) => !value)}>
                    {showDiff ? <FileDiff className={styles.codeActionIcon} aria-hidden="true" focusable="false" />
                      : <FileCode2 className={styles.codeActionIcon} aria-hidden="true" focusable="false" />}
                  </button>
                )}
                <CopyCodeButton key={JSON.stringify([stepKey, activeFile, source])} text={source} path={activeFile} />
              </div>
            )}
            {source !== undefined ? (
              <div ref={scrollRef} className={styles.codeScroll} style={{ backgroundColor: editorBg }}>
                <Highlight theme={prismTheme} code={rows.map((row) => row.text).join('\n')} language={languageOf(activeFile)}>
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className={styles.pre} style={{ color: prismTheme.plain.color }}>
                      {tokens.map((line, i) => {
                        const row = rows[i] || { type: 'same', newNo: i + 1 };
                        const lineProps = getLineProps({ line });
                        const changed = row.type !== 'same';
                        const focused = !changed && isFocused(row.newNo, ranges);
                        return (
                          <div key={i} {...lineProps} data-line={row.newNo ?? undefined}
                            data-change={changed ? row.type : undefined} data-focus={focused ? '' : undefined}
                            className={clsx(lineProps.className, styles.line,
                              row.type === 'add' && styles.lineAdd, row.type === 'del' && styles.lineDel, focused && styles.lineFocus)}>
                            <span aria-hidden="true" className={styles.lineNo}>{row.newNo ?? ''}</span>
                            <span aria-hidden="true" className={styles.lineSign}>{row.type === 'add' ? '+' : row.type === 'del' ? '−' : ''}</span>
                            <span className={styles.lineContent}>{line.map((token, k) => <span key={k} {...getTokenProps({ token })} />)}</span>
                          </div>
                        );
                      })}
                    </pre>
                  )}
                </Highlight>
              </div>
            ) : (
              <div className={styles.empty} style={{ backgroundColor: editorBg }}>
                <div><p>{UI['empty.title']}</p><p className={styles.emptySub}>{UI['empty.body']}</p></div>
              </div>
            )}
          </div>
          {run && <RunOutputPanel />}
        </div>
      </div>
    </RunOutputProvider>
  );
}
