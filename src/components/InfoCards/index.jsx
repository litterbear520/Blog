import React from 'react';
import styles from './InfoCards.module.css';

/**
 * 文章里的横排信息卡（复刻 claude.com 博客的 ca-cards / ca-steps / ca-cta）。
 *
 * <CardGrid numbered>            并排卡片；numbered 时左上角显示 01 / 02 / 03
 *   <Card title="..." sub="...">正文</Card>
 * </CardGrid>
 * <LinkCallout label="参考实现" href="..." linkText="...">正文</LinkCallout>
 * <SkillList items={[['search-discovery', '搜索与发现'], ...]} />
 *   卡片里的技能清单：中文名为主，英文技能 id 作小号对照
 */
export function CardGrid({ columns = 3, numbered = false, children }) {
  return (
    <div
      className={`${styles.grid} ${numbered ? styles.numbered : ''}`}
      style={{ '--cards-columns': columns }}
    >
      {children}
    </div>
  );
}

export function Card({ title, sub, tone, children }) {
  return (
    <div className={`${styles.card} ${tone === 'accent' ? styles.accent : ''}`}>
      {title && <b className={styles.title}>{title}</b>}
      {sub && <i className={styles.sub}>{sub}</i>}
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export function SkillList({ items }) {
  return (
    <ul className={styles.skills}>
      {items.map(([id, name]) => (
        <li key={id}>
          <span className={styles.skillName}>{name}</span>
          <code className={styles.skillId}>{id}</code>
        </li>
      ))}
    </ul>
  );
}

export function LinkCallout({ label, href, linkText, children }) {
  return (
    <div className={styles.callout}>
      <div>
        {label && <small className={styles.label}>{label}</small>}
        <div className={styles.body}>{children}</div>
      </div>
      {href && (
        <a className={styles.button} href={href} target="_blank" rel="noopener noreferrer">
          {linkText || href}
        </a>
      )}
    </div>
  );
}
