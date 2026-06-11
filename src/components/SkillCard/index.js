// src/components/SkillCard/index.js
import React, { useState } from 'react';
import clsx from 'clsx';
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
    <button className={styles.copyBtn} onClick={handleCopy} type="button">
      {state === 'copied' ? '已复制 ✓' : state === 'failed' ? '复制失败，请手动复制' : '复制'}
    </button>
  );
}

export default function SkillCard({ skill, expanded, onToggle, delay }) {
  return (
    <article
      className={clsx(styles.card, expanded && styles.cardExpanded)}
      style={{ '--delay': `${delay}ms` }}
      onClick={onToggle}
    >
      <h2 className={styles.cardName}>{skill.name}</h2>
      <p className={clsx(styles.cardDesc, !expanded && styles.cardDescClamp)}>
        {skill.description}
      </p>
      <div className={styles.cardMeta}>
        <span>{skill.author}</span>
        <span className={styles.cardBadge}>{skill.source}</span>
        <span className={clsx(styles.cardChevron, expanded && styles.chevronUp)}>
          ▾
        </span>
      </div>

      <div className={styles.cardDetail}>
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
              GitHub 仓库 ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
