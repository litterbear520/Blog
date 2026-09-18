import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import { usePrismTheme } from '@docusaurus/theme-common';
import WALKTHROUGHS, { UI } from '@site/src/data/codeWalkthroughs';
import useTypewriter from '@site/src/theme/CodeBlock/RunOutput/useTypewriter';
import { diffLines, plainRows } from './diff';
import styles from './styles.module.css';

/**
 * 代码演进演练：一个示例项目按步骤演进，每一步是一份项目快照（只记本步改动的文件，其余继承）。
 * 上方是步骤说明与上一步/下一步，中间是迷你代码查看器（文件树 + 标签 + 代码），切到某一步时
 * 自动打开本步改动的文件，并把相对上一步的改动按行上色（新增绿、删除红，删除行以幽灵行插回原位）；
 * 下方是终端，列出本步可运行的命令，点击后逐行打印预先录好的输出。
 * 数据见 src/data/codeWalkthroughs/，用法：<CodeWalkthrough variant="unittest" step={3} />，step 是初始停在的步骤（1 起数）；
 * 默认不显示上一步/下一步，加 nav 才显示（一篇文章里通常只给最后一个实例开）。
 * 步骤可以不改文件、只写 file + lines（行区间），代码区把这些行标成聚焦行并滚过去，用来在同一份代码里逐段讲。
 */

const LANG_BY_EXT = { py: 'python', md: 'markdown', json: 'json', toml: 'toml', txt: 'text' };

function languageOf(path) {
  const ext = path.split('.').pop();
  return LANG_BY_EXT[ext] || 'text';
}

function fmt(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
}

function buildTree(paths) {
  const root = { type: 'folder', name: '', path: '', children: [] };
  for (const p of paths) {
    const parts = p.split('/');
    let node = root;
    parts.forEach((part, i) => {
      if (i === parts.length - 1) {
        node.children.push({ type: 'file', name: part, path: p });
        return;
      }
      const folderPath = parts.slice(0, i + 1).join('/');
      let folder = node.children.find((c) => c.type === 'folder' && c.path === folderPath);
      if (!folder) {
        folder = { type: 'folder', name: part, path: folderPath, children: [] };
        node.children.push(folder);
      }
      node = folder;
    });
  }
  const sort = (nodes) =>
    [...nodes]
      .sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === 'folder' ? -1 : 1))
      .map((n) => (n.type === 'folder' ? { ...n, children: sort(n.children) } : n));
  return sort(root.children);
}

// 把每一步的 files 逐步合并成完整快照（null 表示删除该文件）
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
      <code key={i} className={styles.inlineCode}>
        {part.slice(1, -1)}
      </code>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

// Lucide square-terminal：圆角方框里一个 >_，作终端面板的标识
function IconTerminal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
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

// 单条命令的输出：逐行打印，打印完显示退出码
function TerminalOutput({ run }) {
  const lines = useMemo(() => run.output.replace(/\n$/, '').split('\n'), [run.output]);
  const { shown, started, done } = useTypewriter(lines, true);
  return (
    <div className={styles.termOutput} aria-live="polite">
      {!started && <div className={styles.termRunning}>{UI['terminal.running']}</div>}
      {lines.slice(0, shown).map((line, i) => (
        <div key={i} className={clsx('run-output__line', styles.termLine)}>
          {line === '' ? ' ' : line}
        </div>
      ))}
      {started && !done && <span className="run-output__cursor" />}
      {done && (
        <div className={clsx(styles.termFoot, run.exit !== 0 && styles.termFootFail)}>
          {fmt(UI['terminal.exit'], { code: run.exit })}
        </div>
      )}
    </div>
  );
}

export default function CodeWalkthrough({ variant, step = 1, nav = false }) {
  const data = WALKTHROUGHS[variant];
  if (!data) {
    throw new Error(`CodeWalkthrough: unknown variant "${variant}"`);
  }
  return <Walkthrough key={variant} data={data} initialStep={step} nav={nav} />;
}

// 本步默认打开的文件：指定的 file 优先，其次是本步改动（且仍存在）的文件
function tabsForStep(step, snapshot) {
  const changed = Object.keys(step.files || {}).filter((p) => p in snapshot);
  const tabs = step.file ? [step.file, ...changed.filter((p) => p !== step.file)] : changed;
  return tabs.filter((p) => p in snapshot);
}

function Walkthrough({ data, initialStep, nav }) {
  const { steps } = data;
  const prismTheme = usePrismTheme();
  const snapshots = useMemo(() => buildSnapshots(steps), [steps]);
  const first = Math.min(Math.max(initialStep - 1, 0), steps.length - 1);

  const [current, setCurrent] = useState(first);
  const [openTabs, setOpenTabs] = useState(() => tabsForStep(steps[first], snapshots[first]));
  const [activeFile, setActiveFile] = useState(() => tabsForStep(steps[first], snapshots[first])[0] ?? null);
  const [showDiff, setShowDiff] = useState(true);
  const [collapsed, setCollapsed] = useState(() => new Set());
  const [runIndex, setRunIndex] = useState(null);
  const scrollRef = useRef(null);

  const step = steps[current];
  const snapshot = snapshots[current];
  const previous = current > 0 ? snapshots[current - 1] : null;
  const tree = useMemo(() => buildTree(Object.keys(snapshot)), [snapshot]);

  // 文件相对上一步的状态：new / changed / same
  const statusOf = (path) => {
    if (!previous) return 'same';
    if (!(path in previous)) return 'new';
    return previous[path] !== snapshot[path] ? 'changed' : 'same';
  };

  const goToStep = (index) => {
    if (!steps[index]) return;
    const nextSnapshot = snapshots[index];
    const tabs = tabsForStep(steps[index], nextSnapshot);
    setCurrent(index);
    setRunIndex(null);
    setOpenTabs((prev) => {
      const kept = prev.filter((p) => p in nextSnapshot && !tabs.includes(p));
      return tabs.length > 0 ? [...tabs, ...kept] : kept;
    });
    setActiveFile((prev) => tabs[0] ?? (prev && prev in nextSnapshot ? prev : null));
  };

  const openFile = (path) => {
    setActiveFile(path);
    setOpenTabs((tabs) => (tabs.includes(path) ? tabs : [...tabs, path]));
  };

  const closeTab = (path) => {
    const rest = openTabs.filter((t) => t !== path);
    setOpenTabs(rest);
    if (activeFile === path) {
      setActiveFile(rest.length > 0 ? rest[rest.length - 1] : null);
    }
  };

  const toggleFolder = (path) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const activeStatus = activeFile ? statusOf(activeFile) : 'same';
  const rows = useMemo(() => {
    if (activeFile === null || !(activeFile in snapshot)) return [];
    if (showDiff && activeStatus === 'changed') return diffLines(previous[activeFile], snapshot[activeFile]);
    return plainRows(snapshot[activeFile]);
  }, [activeFile, snapshot, previous, showDiff, activeStatus]);

  // 本步的聚焦行（只对 step.file 生效）：newNo 落在任一 [起, 止] 区间内
  const focusRanges = activeFile === (step.file ?? activeFile) ? step.lines || [] : [];
  const inFocus = (no) => no != null && focusRanges.some(([a, b]) => no >= a && no <= (b ?? a));

  // 切换步骤或文件后，把第一处改动（其次是第一处聚焦行）滚到代码区中央；都没有就回到顶部
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector('[data-change]') || container.querySelector('[data-focus]');
    if (!target) {
      container.scrollTo({ top: 0 });
      return;
    }
    const top = target.offsetTop - container.clientHeight / 2 + target.offsetHeight / 2;
    container.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }, [current, activeFile, showDiff]);

  const renderTree = (nodes, depth) =>
    nodes.map((node) => {
      const indent = { paddingLeft: `${8 + depth * 14}px` };
      if (node.type === 'file') {
        const active = node.path === activeFile;
        const status = statusOf(node.path);
        return (
          <button
            key={node.path}
            type="button"
            onClick={() => openFile(node.path)}
            aria-pressed={active}
            style={indent}
            className={clsx(styles.treeItem, active && styles.treeItemActive)}
          >
            <span aria-hidden="true">📄</span>
            <span className={styles.treeName}>{node.name}</span>
            {status !== 'same' && (
              <span
                className={clsx(styles.treeDot, status === 'new' && styles.treeDotNew)}
                title={status === 'new' ? UI['badge.new'] : UI['badge.changed']}
              />
            )}
          </button>
        );
      }
      const isCollapsed = collapsed.has(node.path);
      return (
        <div key={node.path}>
          <button
            type="button"
            aria-expanded={!isCollapsed}
            onClick={() => toggleFolder(node.path)}
            style={indent}
            className={styles.treeItem}
          >
            <span aria-hidden="true">{isCollapsed ? '📁' : '📂'}</span>
            <span className={styles.treeName}>{node.name}</span>
          </button>
          {!isCollapsed && renderTree(node.children, depth + 1)}
        </div>
      );
    });

  const editorBg = prismTheme.plain.backgroundColor;
  const code = rows.map((r) => r.text).join('\n');
  const runs = step.runs || [];

  return (
    <div className={styles.root}>
      <div className={styles.stepsPanel}>
        <div className={styles.stepHead}>
          <span className={styles.stepTitle}>{fmt(UI['step.heading'], { n: current + 1, title: step.title })}</span>
          <span className={styles.stepCounter}>{fmt(UI['step.counter'], { n: current + 1, total: steps.length })}</span>
        </div>
        <div className={styles.stepBody}>
          {step.body.map((text, i) => (
            <p key={i}>
              <InlineCode text={text} />
            </p>
          ))}
        </div>
        {nav && (
        <div className={styles.navButtons}>
          <button
            type="button"
            disabled={current === 0}
            onClick={() => goToStep(current - 1)}
            className={clsx(styles.btn, styles.btnPrimary)}
          >
            {UI['btn.prev']}
          </button>
          <button
            type="button"
            disabled={current === steps.length - 1}
            onClick={() => goToStep(current + 1)}
            className={clsx(styles.btn, styles.btnPrimary)}
          >
            {UI['btn.next']}
          </button>
        </div>
        )}
      </div>

      <div className={styles.editor}>
        <aside className={styles.fileTree}>
          <h4 className={styles.fileTreeHeading}>{UI['files.heading']}</h4>
          <div className={styles.treeScroll}>{renderTree(tree, 0)}</div>
        </aside>
        <div className={styles.editorMain}>
          <div className={styles.tabs} aria-label={UI['aria.openFiles']}>
            {openTabs.map((path) => {
              const active = path === activeFile;
              const status = statusOf(path);
              return (
                <div
                  key={path}
                  className={clsx(styles.tab, active && styles.tabActive)}
                  style={active ? { backgroundColor: editorBg } : undefined}
                >
                  <button type="button" aria-pressed={active} onClick={() => openFile(path)} className={styles.tabBtn}>
                    {path.split('/').pop()}
                    {status !== 'same' && (
                      <span className={clsx(styles.badge, status === 'new' && styles.badgeNew)}>
                        {status === 'new' ? UI['badge.new'] : UI['badge.changed']}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    aria-label={fmt(UI['aria.closeTab'], { path })}
                    onClick={() => closeTab(path)}
                    className={styles.tabClose}
                  >
                    ×
                  </button>
                </div>
              );
            })}
            {activeStatus === 'changed' && (
              <button
                type="button"
                aria-pressed={showDiff}
                onClick={() => setShowDiff((v) => !v)}
                className={styles.diffToggle}
              >
                {showDiff ? UI['diff.hide'] : UI['diff.show']}
              </button>
            )}
          </div>
          {activeFile !== null && rows.length > 0 ? (
            <div ref={scrollRef} className={styles.codeScroll} style={{ backgroundColor: editorBg }}>
              <Highlight theme={prismTheme} code={code} language={languageOf(activeFile)}>
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className={styles.pre} style={{ color: prismTheme.plain.color }}>
                    {tokens.map((line, i) => {
                      const row = rows[i] || { type: 'same', newNo: i + 1 };
                      const lineProps = getLineProps({ line });
                      const changed = row.type !== 'same';
                      const focused = !changed && inFocus(row.newNo);
                      return (
                        <div
                          key={i}
                          {...lineProps}
                          data-change={changed ? row.type : undefined}
                          data-focus={focused ? '' : undefined}
                          className={clsx(
                            lineProps.className,
                            styles.line,
                            row.type === 'add' && styles.lineAdd,
                            row.type === 'del' && styles.lineDel,
                            focused && styles.lineFocus,
                          )}
                        >
                          <span aria-hidden="true" className={styles.lineNo}>
                            {row.newNo ?? ''}
                          </span>
                          <span aria-hidden="true" className={styles.lineSign}>
                            {row.type === 'add' ? '+' : row.type === 'del' ? '−' : ''}
                          </span>
                          <span className={styles.lineContent}>
                            {line.map((token, k) => (
                              <span key={k} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      );
                    })}
                  </pre>
                )}
              </Highlight>
            </div>
          ) : (
            <div className={styles.empty} style={{ backgroundColor: editorBg }}>
              <div>
                <p>{UI['empty.title']}</p>
                <p className={styles.emptySub}>{UI['empty.body']}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {runs.length > 0 && (
        <div className={styles.terminal} style={{ backgroundColor: editorBg, color: prismTheme.plain.color }}>
          <div className={styles.termHead} title={UI['terminal.hint']}>
            <IconTerminal className={styles.termHeadIcon} aria-label={UI['terminal.heading']} role="img" />
          </div>
          {runs.map((run, k) => {
            const open = runIndex === k;
            return (
              <div key={`${current}-${k}`} className={styles.termRun}>
                <div className={styles.termPrompt}>
                  <span className={styles.termDollar} aria-hidden="true">
                    $
                  </span>
                  <code className={styles.termCmd}>{run.cmd}</code>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-label={open ? UI['terminal.collapse'] : UI['terminal.run']}
                    title={open ? UI['terminal.collapse'] : UI['terminal.run']}
                    onClick={() => setRunIndex(open ? null : k)}
                    className={clsx(styles.termBtn, open && styles.termBtnOpen)}
                  >
                    {open ? <IconStop className={styles.termIcon} /> : <IconPlay className={styles.termIcon} />}
                  </button>
                </div>
                {open && <TerminalOutput run={run} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
