import React from 'react';
import styles from './styles.module.css';

// 课文标题下的两枚标签：第几课、大约几分钟读完。
// 数字由 /lesson 技能的 lesson_lint.py 按目录里的课序和篇幅算出并核对，课文里写 <LessonMeta lesson={1} minutes={4} />。

function BookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

export default function LessonMeta({ lesson, minutes }) {
  return (
    <div className={styles.meta}>
      <span className={styles.chip}>
        <BookIcon />第 {lesson} 课
      </span>
      <span className={styles.chip}>
        <ClockIcon />{minutes} 分钟
      </span>
    </div>
  );
}
