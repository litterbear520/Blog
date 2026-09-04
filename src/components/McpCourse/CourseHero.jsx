import React from 'react';
import styles from './CourseHero.module.css';

/**
 * 课程索引页顶部的信息卡：难度 / 课数标签、课程简介与"开始学习"链接（写在 children 的 markdown 里，
 * 最后一段的链接会渲染成按钮），底部一行来源链接。
 */
export default function CourseHero({ level, lessonCount, sourceHref, sourceLabel = 'Claude Academy', children }) {
  return (
    <div className={styles.hero}>
      <div className={styles.chips}>
        {level && <span className={styles.chip}>难度：{level}</span>}
        {lessonCount && <span className={styles.chip}>{lessonCount} 课</span>}
      </div>
      <div className={styles.body}>{children}</div>
      {sourceHref && (
        <div className={styles.source}>
          内容整理自{' '}
          <a href={sourceHref} target="_blank" rel="noopener noreferrer">
            {sourceLabel}
          </a>
        </div>
      )}
    </div>
  );
}
