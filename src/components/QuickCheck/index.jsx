import React, { useId, useState } from 'react';
import { validate, feedback, optionState } from './model.mjs';
import styles from './styles.module.css';

// 快速检查：课文里一道当场判对错的单选题，不计分、可以改选，每个选项都有解释。
// <QuickCheck question="…" options={[{ text, explain }, { text, correct: true, explain }]} />
// 题干、选项、解释里的 `反引号` 渲染成行内代码。已注册到 MDX 全局，正文里直接写。

const inline = (text) =>
  String(text).split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length > 1
      ? <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>
      : part);

export default function QuickCheck({ question, options, label = '快速检查' }) {
  const errors = validate({ question, options });
  if (errors.length) throw new Error(`QuickCheck: ${errors.join('；')}`);
  const [picked, setPicked] = useState(null);
  const id = useId();
  const result = feedback(options, picked);

  return (
    <section className={styles.card} aria-labelledby={`${id}-q`}>
      <p className={styles.label}>{label}</p>
      <p id={`${id}-q`} className={styles.question}>{inline(question)}</p>
      <div className={styles.options} role="radiogroup" aria-labelledby={`${id}-q`}>
        {options.map((option, i) => {
          const state = optionState(i, picked, result.correctIndex);
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={picked === i}
              className={`${styles.option} ${styles[state] || ''}`}
              onClick={() => setPicked(i)}
            >
              {state === 'correct' || state === 'answer' ? <span aria-hidden="true" className={styles.mark}>✓</span> : null}
              {state === 'wrong' ? <span aria-hidden="true" className={styles.mark}>✗</span> : null}
              {inline(option.text)}
            </button>
          );
        })}
      </div>
      <div className={styles.live} aria-live="polite">
        {result.status !== 'idle' && (
          <p className={`${styles.explain} ${styles[result.status]}`}>
            <strong>{result.status === 'correct' ? '答对了。' : '不是这个。'}</strong>
            {inline(result.explain)}
          </p>
        )}
      </div>
    </section>
  );
}
