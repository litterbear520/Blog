import React from 'react';
import styles from './styles.module.css';

/**
 * commerce-agents 路线总览：八个 Stage 按顺序排成两行，当前所在的 Stage 用强调色标出。
 * 纯 SVG，配色引用 --th-* 令牌，深浅模式自动跟随。改 Stage 名称或当前位置直接改 STAGES / CURRENT。
 */

const STAGES = [
  { key: 'A', name: '一个文件，一段对话', steps: 'Step 00–05' },
  { key: 'B', name: '代码膨胀，该拆了', steps: 'Step 06–09' },
  { key: 'C', name: '从能用到好用', steps: 'Step 10–16' },
  { key: 'D', name: '第二个角色催生共享层', steps: 'Step 17–21' },
  { key: 'E', name: '加上 Web 界面', steps: 'Step 22–26' },
  { key: 'F', name: '扩展验证', steps: 'Step 27–28' },
  { key: 'G', name: '验证与交付', steps: 'Step 29–32' },
  { key: 'H', name: '生产闭环', steps: 'Step 33–39' },
];
const CURRENT = 'A';

// 4px 网格：节点 160×80，横向间距 32，行间距 48，四周留 16
const W = 160;
const H = 80;
const GAP_X = 32;
const GAP_Y = 48;
const PAD = 16;
const COLS = 4;
const VIEW_W = PAD * 2 + COLS * W + (COLS - 1) * GAP_X; // 768
const VIEW_H = PAD * 2 + 2 * H + GAP_Y; // 240

function pos(i) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return { x: PAD + col * (W + GAP_X), y: PAD + row * (H + GAP_Y) };
}

export default function RoadmapOverview() {
  const boxes = STAGES.map((s, i) => ({ ...s, ...pos(i) }));
  const paths = [];
  boxes.forEach((b, i) => {
    const next = boxes[i + 1];
    if (!next) return;
    if (next.y === b.y) {
      // 同一行：右边中点 → 下一个的左边中点
      paths.push(`M ${b.x + W} ${b.y + H / 2} L ${next.x} ${next.y + H / 2}`);
    } else {
      // 换行：从底边中点下到行间隙中线，向左拐到下一个的顶边中点，两处拐角用 r=8 的圆弧
      const x1 = b.x + W / 2;
      const y1 = b.y + H;
      const midY = y1 + GAP_Y / 2;
      const x2 = next.x + W / 2;
      const y2 = next.y;
      paths.push(
        `M ${x1} ${y1} L ${x1} ${midY - 8} A 8 8 0 0 1 ${x1 - 8} ${midY} L ${x2 + 8} ${midY} A 8 8 0 0 0 ${x2} ${midY + 8} L ${x2} ${y2}`,
      );
    }
  });

  return (
    <figure className={styles.figure}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className={styles.svg}
        role="img"
        aria-labelledby="roadmap-overview-title roadmap-overview-desc"
      >
        <title id="roadmap-overview-title">Commerce Agents 路线总览</title>
        <desc id="roadmap-overview-desc">八个阶段从一个文件的对话脚本开始，依次拆包、打磨、加第二个角色、加 Web 界面、扩展验证、交付，最后接入生产。</desc>
        <defs>
          <marker id="roadmap-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className={styles.arrowHead} />
          </marker>
        </defs>
        {paths.map((d, i) => (
          <path key={i} d={d} className={styles.edge} markerEnd="url(#roadmap-arrow)" />
        ))}
        {boxes.map((b) => {
          const focal = b.key === CURRENT;
          return (
            <g key={b.key}>
              <rect x={b.x} y={b.y} width={W} height={H} rx={6} className={styles.mask} />
              <rect x={b.x} y={b.y} width={W} height={H} rx={6} className={focal ? styles.boxFocal : styles.box} />
              <text x={b.x + 12} y={b.y + 20} className={focal ? styles.eyebrowFocal : styles.eyebrow}>
                STAGE {b.key}
              </text>
              <text x={b.x + 12} y={b.y + 44} className={styles.name}>
                {b.name}
              </text>
              <text x={b.x + 12} y={b.y + 64} className={styles.sub}>
                {b.steps}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
