// src/components/SkillCard/index.js
import React, { useId, useState } from 'react';
import clsx from 'clsx';
import { Check, Copy, Github, X } from 'lucide-react';
import styles from './styles.module.css';

function CopyButton({ command }) {
  // 状态：idle → copied / failed，2 秒后回到 idle
  const [state, setState] = useState('idle');

  const handleCopy = async (e) => {
    e.stopPropagation(); // 不触发卡片收起
    try {
      await navigator.clipboard.writeText(command);
      setState('copied');
    } catch {
      setState('failed');
    }
    setTimeout(() => setState('idle'), 2000);
  };

  return (
    <>
    <button
      className={styles.copyBtn}
      onClick={handleCopy}
      type="button"
      aria-label={state === 'failed' ? '复制失败，请手动复制' : '复制命令'}
      title={state === 'failed' ? '复制失败，请手动复制' : '复制'}
    >
      {state === 'copied' ? (
        <Check size={14} />
      ) : state === 'failed' ? (
        <X size={14} />
      ) : (
        <Copy size={14} />
      )}
    </button>
    <span role="status" className={styles.srOnly}>
      {state === 'copied' ? '已复制' : ''}
    </span>
    </>
  );
}

export default function SkillCard({ skill, expanded, onToggle, delay }) {
  const detailId = useId();
  return (
    // 开合由标题里的按钮负责；卡片上的点击只是给鼠标的方便，按钮的点击也冒泡到这里
    <article
      className={clsx(styles.card, expanded && styles.cardExpanded)}
      style={{ '--delay': `${delay}ms` }}
      onClick={onToggle}
    >
      <h2 className={styles.cardName}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-controls={detailId}
        >
          {skill.name}
        </button>
      </h2>
      <p className={clsx(styles.cardDesc, !expanded && styles.cardDescClamp)}>
        {skill.description}
      </p>
      <div className={styles.cardMeta}>
        <span>{skill.author}</span>
        <span className={styles.cardBadge}>{skill.category}</span>
        <span className={styles.cardBadge}>{skill.source}</span>
        <span
          className={clsx(styles.cardChevron, expanded && styles.chevronUp)}
          aria-hidden="true"
        >
          ▾
        </span>
      </div>

      {/* 收起时 inert：读屏和 Tab 都跳过详情，只剩视觉上的收起动画 */}
      <div className={styles.cardDetail} id={detailId} inert={!expanded}>
        <div className={styles.cardDetailInner}>
          <div className={styles.cardDetailContent}>
            {skill.install.map((item) => (
              <div key={item.command}>
                <span className={styles.installLabel}>{item.label}</span>
                <div className={styles.installRow}>
                  <code className={styles.installCommand}>{item.command}</code>
                  <CopyButton command={item.command} />
                </div>
              </div>
            ))}
            <a
              className={styles.repoLink}
              href={skill.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={15} />
              GitHub 仓库 →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
