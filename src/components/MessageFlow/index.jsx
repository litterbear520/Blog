import React, { useId } from 'react';
import clsx from 'clsx';
import FLOWS from '@site/src/data/messageFlows';
import { buildFlow, rowTone } from './model.mjs';
import styles from './styles.module.css';

/**
 * 消息流（泳道）图：参与者从左到右排成几列，每列一条虚线生命线，消息画成两条生命线之间的箭头，
 * 发生在一方内部的事（门控、判断）画成生命线上的注释框。
 * 用 HTML 网格而不是 SVG 排版：中文标签和消息小表由浏览器换行，窄屏横向滚动，字号不跟着缩小。
 * 数据在 src/data/messageFlows/<variant>.js，形状见那里的 index.js；upTo={n} 只画前 n 项。
 */

function InlineCode({ text }) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.length > 2 && part.startsWith('`') && part.endsWith('`') ? (
      <code key={i}>{part.slice(1, -1)}</code>
    ) : <React.Fragment key={i}>{part}</React.Fragment>,
  );
}

// 每一行都铺满生命线，行与行首尾相接，虚线看起来就是连续的
function Lanes({ count }) {
  return Array.from({ length: count }, (_, i) => (
    <span key={i} aria-hidden="true" className={styles.lane} style={{ gridColumn: i + 1 }} />
  ));
}

function Rows({ rows }) {
  return (
    <table className={styles.rows}>
      <tbody>
        {rows.map(([role, block, content], i) => (
          <tr key={i}>
            <th scope="row" className={styles.rowRole} data-tone={rowTone(role)}>{role}</th>
            <td className={styles.rowBlock}>{block}</td>
            <td className={styles.rowContent}><InlineCode text={content} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function MessageFlow({ variant, flow: inline, upTo }) {
  const data = inline ?? FLOWS[variant];
  if (!data) throw new Error(`MessageFlow: unknown variant "${variant}"`);
  const flow = buildFlow(data, upTo);
  const summaryId = useId();
  const count = flow.participants.length;
  const span = (item) => ({ gridColumn: `${item.start + 1} / ${item.end + 2}`, '--span': item.end - item.start + 1 });

  return (
    <figure className={styles.figure} aria-describedby={summaryId}>
      <p id={summaryId} className={styles.srOnly}>{flow.summary}</p>
      {flow.title && <div className={styles.title}>{flow.title}</div>}
      <div className={styles.scroller}>
        <div className={styles.flow} style={{ '--cols': count }}>
          <div className={styles.row}>
            {flow.participants.map((p, i) => (
              <div key={p.id} className={styles.actor} data-role={p.role} style={{ gridColumn: i + 1 }}>
                <span className={styles.actorName}>{p.name}</span>
                {p.sub && <span className={styles.actorSub}>{p.sub}</span>}
              </div>
            ))}
          </div>
          {flow.items.map((item, k) => (
            <div key={k} className={styles.row}>
              <Lanes count={count} />
              {item.type === 'note' ? (
                <div className={clsx(styles.note, item.focal && styles.focal)} style={span(item)}>
                  <InlineCode text={item.text} />
                </div>
              ) : (
                <div className={clsx(styles.message, styles[item.kind])} style={span(item)}>
                  <div className={clsx(styles.body, item.focal && styles.focal)}>
                    <span className={styles.srOnly}>{item.fromName} → {item.toName}：</span>
                    {item.label && <span className={styles.label}><InlineCode text={item.label} /></span>}
                    {item.rows && <Rows rows={item.rows} />}
                  </div>
                  <span aria-hidden="true" className={clsx(styles.arrow, item.direction === 'left' && styles.toLeft)}>
                    <svg className={styles.head} viewBox="0 0 8 12"><path d="M1 1 L7 6 L1 11" /></svg>
                  </span>
                </div>
              )}
            </div>
          ))}
          <div className={clsx(styles.row, styles.tail)}><Lanes count={count} /></div>
        </div>
      </div>
    </figure>
  );
}
