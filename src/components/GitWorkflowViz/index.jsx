import React, { useEffect, useRef, useState } from "react";
import { Cloud, GitBranch, HardDrive, Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { BRANCH_NAME, COMMITS, STEPS } from "./steps";
import styles from "./styles.module.css";

// 画布布局常量（viewBox 坐标）
const W = 600;
const NODE_W = 80;
const NODE_H = 30;
const X0 = 176; // 第一个提交的中心 x
const DX = 104; // 相邻提交的中心间距
const ROW_DY = 44; // 同一区域内两行分支的间距
const LABEL_X = 24;

const LANES = [
  { id: "remote", title: "Remote", sub: "GitHub 远端仓库", Icon: Cloud, top: 0, height: 132, rows: ["main", "feature"] },
  { id: "local", title: "Local", sub: "本地 git 仓库", Icon: GitBranch, top: 132, height: 132, rows: ["main", "feature"] },
  { id: "disk", title: "Disk", sub: "磁盘上的工作区（当前检出的分支）", Icon: HardDrive, top: 264, height: 88, rows: ["current"] },
];
const H = LANES[LANES.length - 1].top + LANES[LANES.length - 1].height;

function rowY(lane, rowIndex) {
  return lane.top + 56 + rowIndex * ROW_DY;
}

function nodeX(col) {
  return X0 + col * DX;
}

/** 某一步里，某个区域的分支行列表：[{ key, branch, commits, rowIndex }] */
function laneRows(lane, step) {
  if (lane.id === "disk") {
    if (!step.disk) return [];
    return [{ key: step.disk.branch, branch: step.disk.branch, commits: step.disk.commits, rowIndex: 0 }];
  }
  const branches = step[lane.id];
  return lane.rows
    .map((b, i) => (branches[b] ? { key: b, branch: b, commits: branches[b], rowIndex: i } : null))
    .filter(Boolean);
}

function arrowEndpoints(arrow, step) {
  const from = LANES.find((l) => l.id === arrow.from);
  const to = LANES.find((l) => l.id === arrow.to);
  const rowOf = (lane) => laneRows(lane, step).find((r) => r.branch === arrow.branch);
  const fromRow = rowOf(from);
  const toRow = rowOf(to);
  if (!fromRow || !toRow) return null;
  const x = nodeX(arrow.col);
  const y1 = rowY(from, fromRow.rowIndex);
  const y2 = rowY(to, toRow.rowIndex);
  const down = y2 > y1;
  const gap = NODE_H / 2 + 3;
  return { x, y1: down ? y1 + gap : y1 - gap, y2: down ? y2 - gap : y2 + gap };
}

export default function GitWorkflowViz() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef(null);
  const total = STEPS.length;
  const s = STEPS[step];
  const hl = new Set(s.highlight);

  useEffect(() => {
    if (!playing) return undefined;
    timer.current = setInterval(() => {
      setStep((cur) => {
        if (cur >= total - 1) {
          setPlaying(false);
          return cur;
        }
        return cur + 1;
      });
    }, 2800);
    return () => clearInterval(timer.current);
  }, [playing, total]);

  const goto = (n) => setStep(Math.max(0, Math.min(total - 1, n)));

  return (
    <div className={styles.container}>
      <div className={styles.svgWrap}>
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label={`Git 工作流第 ${step + 1} 步：${s.title}`}>
          <defs>
            <marker id="gwv-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className={styles.arrowHead} />
            </marker>
            <marker id="gwv-arrow-hl" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" className={styles.arrowHeadHl} />
            </marker>
          </defs>

          {LANES.map((lane, li) => {
            const rows = laneRows(lane, s);
            const { Icon } = lane;
            return (
              <g key={lane.id}>
                {li > 0 && <line x1={0} y1={lane.top} x2={W} y2={lane.top} className={styles.laneLine} />}
                <foreignObject x={16} y={lane.top + 8} width={W - 32} height={24}>
                  <div className={styles.laneHeader}>
                    <Icon size={15} strokeWidth={2.2} />
                    <span className={styles.laneTitle}>{lane.title}</span>
                    <span className={styles.laneSub}>{lane.sub}</span>
                  </div>
                </foreignObject>

                {rows.length === 0 && (
                  <text x={LABEL_X} y={rowY(lane, 0) + 4} className={styles.empty}>（空）</text>
                )}

                {rows.map((row) => {
                  const y = rowY(lane, row.rowIndex);
                  const name = BRANCH_NAME[row.branch];
                  const rowKey = `${lane.id}.${row.branch}`;
                  const rowHl = hl.has(rowKey);
                  const isHead = lane.id === "local" && s.head === row.branch;
                  const pillX = LABEL_X + name.length * 7.4 + 8;
                  return (
                    <g key={row.key}>
                      <text x={LABEL_X} y={y + 4} className={`${styles.branchLabel} ${rowHl ? styles.textHl : ""}`}>
                        {name}
                      </text>
                      {isHead && (
                        <g key={`head-${step}`} className={styles.appear}>
                          <rect x={pillX} y={y - 8} width={34} height={16} rx={8} className={styles.headPill} />
                          <text x={pillX + 17} y={y + 3.5} textAnchor="middle" className={styles.headText}>HEAD</text>
                        </g>
                      )}

                      {row.commits.map((id, col) => {
                        const c = COMMITS[id];
                        const key = `${rowKey}.${id}`;
                        const isHl = hl.has(key);
                        const x = nodeX(col);
                        const cls = [
                          styles.node,
                          c.dirty ? styles.nodeDirty : "",
                          isHl ? styles.nodeHl : "",
                        ].join(" ");
                        return (
                          <g key={isHl ? `${key}-${step}` : key} className={isHl ? styles.appear : ""}>
                            {col > 0 && (
                              <line
                                x1={nodeX(col - 1) + NODE_W / 2}
                                y1={y}
                                x2={x - NODE_W / 2 - 1}
                                y2={y}
                                className={isHl ? styles.edgeHl : styles.edge}
                                strokeDasharray={c.dirty ? "4 3" : undefined}
                                markerEnd={isHl ? "url(#gwv-arrow-hl)" : "url(#gwv-arrow)"}
                              />
                            )}
                            <rect x={x - NODE_W / 2} y={y - NODE_H / 2} width={NODE_W} height={NODE_H} rx={7} className={cls} />
                            <text x={x} y={y + 4} textAnchor="middle" className={`${styles.nodeText} ${isHl ? styles.textHl : ""}`}>
                              {c.label}
                            </text>
                          </g>
                        );
                      })}
                    </g>
                  );
                })}
              </g>
            );
          })}

          {s.arrows.map((a, i) => {
            const e = arrowEndpoints(a, s);
            if (!e) return null;
            return (
              <line
                key={`${step}-${i}`}
                x1={e.x} y1={e.y1} x2={e.x} y2={e.y2}
                className={`${styles.transfer} ${styles.appear}`}
                markerEnd="url(#gwv-arrow-hl)"
              />
            );
          })}
        </svg>
      </div>

      <div className={styles.annotation}>
        <div className={styles.annotationHead}>
          <span className={styles.stepBadge}>{step + 1}</span>
          <span className={styles.annotationTitle}>{s.title}</span>
          {s.cmd && <code className={styles.cmd}>{s.cmd}</code>}
        </div>
        <div className={styles.annotationDesc}>{s.desc}</div>
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn} title="重置" onClick={() => { goto(0); setPlaying(false); }}>
            <RotateCcw size={16} />
          </button>
          <button type="button" className={styles.btn} title="上一步" disabled={step === 0} onClick={() => goto(step - 1)}>
            <SkipBack size={16} />
          </button>
          <button type="button" className={styles.btn} title={playing ? "暂停" : "自动播放"} onClick={() => setPlaying((p) => !p)}>
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button type="button" className={styles.btn} title="下一步" disabled={step === total - 1} onClick={() => goto(step + 1)}>
            <SkipForward size={16} />
          </button>
        </div>
        <div className={styles.stepIndicator}>
          <div className={styles.dots}>
            {STEPS.map((st, i) => (
              <button
                type="button"
                key={i}
                title={`${i + 1}. ${st.title}`}
                onClick={() => goto(i)}
                className={`${styles.dot} ${i === step ? styles.dotActive : i < step ? styles.dotPast : ""}`}
              />
            ))}
          </div>
          <span className={styles.stepCount}>{step + 1}/{total}</span>
        </div>
      </div>
    </div>
  );
}
