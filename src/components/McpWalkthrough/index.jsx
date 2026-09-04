import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import { usePrismTheme } from '@docusaurus/theme-common';
import WALKTHROUGHS, { UI } from '@site/src/data/mcpWalkthroughs';
import styles from './styles.module.css';

/**
 * MCP 演练组件：上方是分步说明（手风琴 + 上一步/下一步），下方是一个迷你代码查看器
 * （文件树 + 多标签 + 代码），两块纵向堆叠；切换步骤时自动打开对应文件、高亮行区间并滚动到视野中央。
 * 首次进入有三步引导气泡（教程步骤 / 导航控件 / 代码编辑器）。
 * 数据见 src/data/mcpWalkthroughs/，用法：<McpWalkthrough variant="sampling" />
 */

const TOUR = ['steps', 'buttons', 'editor'];
const LANG_BY_EXT = { py: 'python', md: 'markdown', json: 'json', toml: 'toml' };

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

function StepBody({ body }) {
  return body.map((block, i) => {
    if (block.type === 'list') {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag key={i}>
          {block.items.map((item, j) => (
            <li key={j}>
              <InlineCode text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    return (
      <p key={i}>
        <InlineCode text={block.text} />
      </p>
    );
  });
}

export default function McpWalkthrough({ variant = 'sampling' }) {
  const data = WALKTHROUGHS[variant];
  if (!data) {
    throw new Error(`McpWalkthrough: unknown variant "${variant}"`);
  }
  return <Walkthrough key={variant} data={data} />;
}

function Walkthrough({ data }) {
  const { files, steps } = data;
  const prismTheme = usePrismTheme();
  const firstFile = steps[0]?.file ?? null;

  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(0);
  const [openTabs, setOpenTabs] = useState(firstFile ? [firstFile] : []);
  const [activeFile, setActiveFile] = useState(firstFile);
  const [highlight, setHighlight] = useState(
    steps[0] ? { file: steps[0].file, start: steps[0].line, end: steps[0].endLine } : null,
  );
  const [collapsed, setCollapsed] = useState(() => new Set());
  const [tour, setTour] = useState(0);
  const scrollRef = useRef(null);

  const tree = useMemo(() => buildTree(Object.keys(files)), [files]);

  const goToStep = (index) => {
    const step = steps[index];
    if (!step) return;
    setCurrent(index);
    setExpanded(index);
    setActiveFile(step.file);
    setOpenTabs((tabs) => (tabs.includes(step.file) ? tabs : [...tabs, step.file]));
    setHighlight({ file: step.file, start: step.line, end: step.endLine });
  };

  const openFile = (path) => {
    setActiveFile(path);
    setOpenTabs((tabs) => (tabs.includes(path) ? tabs : [...tabs, path]));
    setHighlight(null);
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

  // 切换步骤后把高亮的首行滚动到代码区中央
  useEffect(() => {
    if (!highlight || activeFile !== highlight.file) return;
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-line="${highlight.start}"]`);
    if (!target) return;
    const top = target.offsetTop - container.clientHeight / 2 + target.offsetHeight / 2;
    container.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }, [highlight, activeFile]);

  const tourTarget = tour === null ? null : TOUR[tour];
  const ring = (name) => (tourTarget === name ? styles.ring : undefined);

  const renderTree = (nodes, depth) =>
    nodes.map((node) => {
      const indent = { paddingLeft: `${8 + depth * 14}px` };
      if (node.type === 'file') {
        const active = node.path === activeFile;
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

  const code = activeFile === null ? undefined : files[activeFile];
  const editorBg = prismTheme.plain.backgroundColor;

  return (
    <div className={styles.root}>
      {tour !== null && (
        <div className={styles.tour}>
          <div className={styles.tourDots} aria-label={fmt(UI['tour.aria'], { n: tour + 1, total: TOUR.length })}>
            {TOUR.map((name, i) => (
              <span key={name} aria-hidden="true" className={clsx(styles.dot, i === tour && styles.dotActive)} />
            ))}
          </div>
          <h3 className={styles.tourTitle}>{UI[`tour.${TOUR[tour]}.title`]}</h3>
          <p className={styles.tourBody}>{UI[`tour.${TOUR[tour]}.body`]}</p>
          <div className={styles.tourActions}>
            {tour > 0 ? (
              <button type="button" onClick={() => setTour(tour - 1)} className={clsx(styles.btn, styles.btnSecondary)}>
                {UI['tour.btn.prev']}
              </button>
            ) : (
              <button type="button" onClick={() => setTour(null)} className={clsx(styles.btn, styles.btnSecondary)}>
                {UI['tour.btn.skip']}
              </button>
            )}
            {tour < TOUR.length - 1 ? (
              <button type="button" onClick={() => setTour(tour + 1)} className={clsx(styles.btn, styles.btnPrimary)}>
                {UI['tour.btn.next']}
              </button>
            ) : (
              <button type="button" onClick={() => setTour(null)} className={clsx(styles.btn, styles.btnPrimary)}>
                {UI['tour.btn.finish']}
              </button>
            )}
          </div>
        </div>
      )}

      <div className={styles.layout}>
        <div className={styles.stepsPanel}>
          <div className={clsx(styles.stepList, ring('steps'))}>
            {steps.map((step, i) => {
              const isExpanded = expanded === i;
              const isCurrent = current === i;
              const panelId = `mcp-walkthrough-step-${i}`;
              return (
                <div key={i} className={styles.step}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => (isExpanded ? setExpanded(null) : goToStep(i))}
                    className={clsx(styles.stepHeader, isCurrent && styles.stepHeaderActive)}
                  >
                    <span>{fmt(UI['step.heading'], { n: i + 1, title: step.title })}</span>
                    <span aria-hidden="true" className={clsx(styles.chevron, isExpanded && styles.chevronOpen)}>
                      ▶
                    </span>
                  </button>
                  <div id={panelId} hidden={!isExpanded} className={styles.stepBody}>
                    <StepBody body={step.body} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={clsx(styles.navButtons, ring('buttons'))}>
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
        </div>

        <div className={clsx(styles.editor, ring('editor'))}>
          <aside className={styles.fileTree}>
            <h4 className={styles.fileTreeHeading}>{UI['files.heading']}</h4>
            <div className={styles.treeScroll}>{renderTree(tree, 0)}</div>
          </aside>
          <div className={styles.editorMain}>
            <div className={styles.tabs} aria-label={UI['aria.openFiles']}>
              {openTabs.map((path) => {
                const active = path === activeFile;
                return (
                  <div
                    key={path}
                    className={clsx(styles.tab, active && styles.tabActive)}
                    style={active ? { backgroundColor: editorBg } : undefined}
                  >
                    <button type="button" aria-pressed={active} onClick={() => openFile(path)} className={styles.tabBtn}>
                      {path.split('/').pop()}
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
            </div>
            {activeFile !== null && code !== undefined ? (
              <div ref={scrollRef} className={styles.codeScroll} style={{ backgroundColor: editorBg }}>
                <Highlight theme={prismTheme} code={code.replace(/\n$/, '')} language={languageOf(activeFile)}>
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className={styles.pre} style={{ color: prismTheme.plain.color }}>
                      {tokens.map((line, i) => {
                        const n = i + 1;
                        const isHl =
                          highlight !== null &&
                          highlight.file === activeFile &&
                          n >= highlight.start &&
                          n <= highlight.end;
                        const lineProps = getLineProps({ line });
                        return (
                          <div
                            key={n}
                            {...lineProps}
                            data-line={n}
                            className={clsx(lineProps.className, styles.line, isHl && styles.lineHl)}
                          >
                            <span aria-hidden="true" className={styles.lineNo}>
                              {n}
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
      </div>
    </div>
  );
}
