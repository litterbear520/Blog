import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import RUNS from '@site/src/data/agentRuns';
import styles from './styles.module.css';

/**
 * Agent 循环的分镜动画：左边是流程图（节点 + 连线），右边是 messages[] 随帧增长，下方是本帧说明与播放控件。
 * 静止在第 0 帧时就是这一步的架构图，按播放就是一次运行示例。
 * 数据驱动：<AgentLoopViz variant="commerceLoop" />，分镜在 src/data/agentRuns/，不传 variant 用笔记里的 claudeCode。
 * 配色全部引用 custom.css 的 --th-* 令牌，深浅模式自动跟随。
 */

const VIEW_W = 500;
const VIEW_H = 440;

// 节点某一边的中点（菱形取顶点）
function anchor(node, side) {
  const hw = node.w / 2;
  const hh = node.h / 2;
  if (side === 'top') return [node.x, node.y - hh];
  if (side === 'bottom') return [node.x, node.y + hh];
  if (side === 'left') return [node.x - hw, node.y];
  return [node.x + hw, node.y];
}

function defaultSides(from, to) {
  if (to.y - to.h / 2 >= from.y + from.h / 2) return ['bottom', 'top'];
  if (from.y - from.h / 2 >= to.y + to.h / 2) return ['top', 'bottom'];
  return to.x > from.x ? ['right', 'left'] : ['left', 'right'];
}

function edgeGeometry(edge, nodeById) {
  const from = nodeById[edge.from];
  const to = nodeById[edge.to];
  const [fs, ts] = defaultSides(from, to);
  const start = anchor(from, edge.fromSide || fs);
  const end = anchor(to, edge.toSide || ts);
  const points = [start, ...(edge.via || []), end];
  const d = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  let labelAt = edge.labelAt;
  if (!labelAt && edge.label) {
    // 没指定位置：竖线放右侧，横线放上方
    const [x1, y1] = points[0];
    const [x2, y2] = points[points.length - 1];
    labelAt = Math.abs(x1 - x2) < 1 ? [x1 + 44, (y1 + y2) / 2 + 4] : [(x1 + x2) / 2, Math.min(y1, y2) - 10];
  }
  return { d, labelAt };
}

export default function AgentLoopViz({ variant = 'claudeCode' }) {
  const run = RUNS[variant];
  if (!run) {
    throw new Error(`AgentLoopViz: unknown variant "${variant}"`);
  }
  return <Viz key={variant} run={run} />;
}

function Viz({ run }) {
  const { nodes, edges, frames } = run;
  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const total = frames.length;

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setCurrent((s) => {
          if (s >= total - 1) {
            setPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, total]);

  const frame = frames[current];
  const activeNodes = frame.nodes || [];
  const activeEdges = frame.edges || [];
  const messages = frames.slice(0, current + 1).flatMap((f) => f.messages || []);

  const controls = [
    { icon: <RotateCcw size={16} />, title: '重置', onClick: () => { setCurrent(0); setPlaying(false); }, disabled: false },
    { icon: <SkipBack size={16} />, title: '上一帧', onClick: () => setCurrent((s) => Math.max(0, s - 1)), disabled: current === 0 },
    { icon: playing ? <Pause size={16} /> : <Play size={16} />, title: playing ? '暂停' : '播放', onClick: () => setPlaying((p) => !p), disabled: false },
    { icon: <SkipForward size={16} />, title: '下一帧', onClick: () => setCurrent((s) => Math.min(total - 1, s + 1)), disabled: current === total - 1 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.panels}>
        <div className={styles.leftPanel}>
          <div className={styles.panelLabel}>{run.loopLabel}</div>
          <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className={styles.svg} role="img" aria-label={frame.title}>
            <defs>
              <marker id="alv-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" className={styles.arrowHead} />
              </marker>
              <marker id="alv-arrow-active" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" className={styles.arrowHeadActive} />
              </marker>
            </defs>

            {edges.map((edge) => {
              const key = `${edge.from}->${edge.to}`;
              const active = activeEdges.includes(key);
              const { d, labelAt } = edgeGeometry(edge, nodeById);
              return (
                <g key={key}>
                  <path
                    d={d}
                    className={clsx(styles.edge, active && styles.edgeActive)}
                    markerEnd={active ? 'url(#alv-arrow-active)' : 'url(#alv-arrow)'}
                  />
                  {edge.label && (
                    <text x={labelAt[0]} y={labelAt[1]} textAnchor="middle" className={styles.edgeLabel}>
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}

            {nodes.map((node) => {
              const active = activeNodes.includes(node.id);
              const cls = clsx(styles.node, active && (node.tone === 'end' ? styles.nodeEnd : styles.nodeActive));
              const textCls = clsx(styles.nodeText, active && styles.nodeTextActive);
              if (node.shape === 'diamond') {
                const hw = node.w / 2;
                const hh = node.h / 2;
                return (
                  <g key={node.id}>
                    <polygon
                      points={`${node.x},${node.y - hh} ${node.x + hw},${node.y} ${node.x},${node.y + hh} ${node.x - hw},${node.y}`}
                      className={cls}
                    />
                    <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize={11} className={textCls}>
                      {node.label}
                    </text>
                  </g>
                );
              }
              return (
                <g key={node.id}>
                  <rect x={node.x - node.w / 2} y={node.y - node.h / 2} width={node.w} height={node.h} rx={8} className={cls} />
                  <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize={12} className={textCls}>
                    {node.label}
                  </text>
                </g>
              );
            })}

            {frame.tag && (
              <text x={frame.tag.x} y={frame.tag.y} textAnchor="middle" className={styles.tag}>
                {frame.tag.text}
              </text>
            )}
          </svg>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.panelLabel}>messages[]</div>
          <div className={styles.messageList}>
            {messages.length === 0 && <div className={styles.emptyMsg}>[ empty ]</div>}
            {messages.map((msg, i) => (
              <div key={i} className={clsx(styles.messageItem, styles[`tone_${msg.tone || 'assistant'}`])}>
                <div className={styles.messageRole}>{msg.role}</div>
                <div className={styles.messageDetail}>{msg.detail}</div>
              </div>
            ))}
            {messages.length > 0 && <div className={styles.messageCount}>length: {messages.length}</div>}
          </div>
        </div>
      </div>

      <div className={styles.annotation}>
        <div className={styles.annotationTitle}>{frame.title}</div>
        <div className={styles.annotationDesc}>{frame.desc}</div>
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          {controls.map((btn) => (
            <button
              key={btn.title}
              type="button"
              onClick={btn.onClick}
              disabled={btn.disabled}
              title={btn.title}
              aria-label={btn.title}
              className={styles.btn}
            >
              {btn.icon}
            </button>
          ))}
        </div>
        <div className={styles.stepIndicator}>
          <div className={styles.dots}>
            {frames.map((_, i) => (
              <div key={i} className={clsx(styles.dot, i === current && styles.dotCurrent, i < current && styles.dotPast)} />
            ))}
          </div>
          <span className={styles.stepCount}>
            {current + 1}/{total}
          </span>
        </div>
      </div>
    </div>
  );
}
