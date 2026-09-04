import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * 单选测验：全部作答后提交，逐题显示对错并给出总分与是否通过。
 * questions: [{ text, options: string[], answer: number }]，answer 为正确选项下标。
 */
export default function McpQuiz({ questions, passingPercentage = 70 }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length;
  const percentage = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = percentage >= passingPercentage;

  const choose = (qi, oi) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qi]: oi }));
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className={styles.root}>
      {submitted && (
        <div className={clsx(styles.result, passed ? styles.resultPass : styles.resultFail)} role="status">
          <div className={styles.resultScore}>
            {correctCount} / {total}
          </div>
          <div>
            <div className={styles.resultTitle}>{passed ? '通过！' : '未通过'}</div>
            <div className={styles.resultSub}>
              正确率 {percentage}%，通过线 {passingPercentage}%
            </div>
          </div>
          <button type="button" onClick={reset} className={clsx(styles.btn, styles.btnSecondary)}>
            重新作答
          </button>
        </div>
      )}

      <ol className={styles.list}>
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const isCorrect = submitted && chosen === q.answer;
          const isWrong = submitted && chosen !== undefined && chosen !== q.answer;
          return (
            <li key={qi} className={clsx(styles.question, isCorrect && styles.questionCorrect, isWrong && styles.questionWrong)}>
              <div className={styles.questionText}>
                <span className={styles.questionNo}>{qi + 1}</span>
                <span>{q.text}</span>
              </div>
              <div className={styles.options} role="radiogroup" aria-label={`第 ${qi + 1} 题`}>
                {q.options.map((opt, oi) => {
                  const selected = chosen === oi;
                  const showCorrect = submitted && oi === q.answer;
                  const showWrong = submitted && selected && oi !== q.answer;
                  return (
                    <button
                      key={oi}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={submitted}
                      onClick={() => choose(qi, oi)}
                      className={clsx(
                        styles.option,
                        selected && !submitted && styles.optionSelected,
                        showCorrect && styles.optionCorrect,
                        showWrong && styles.optionWrong,
                      )}
                    >
                      <span className={styles.optionMark} aria-hidden="true">
                        {showCorrect ? '✓' : showWrong ? '✗' : String.fromCharCode(65 + oi)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      {!submitted && (
        <div className={styles.footer}>
          <span className={styles.progress}>
            已作答 {answeredCount} / {total}
          </span>
          <button
            type="button"
            disabled={answeredCount < total}
            onClick={() => setSubmitted(true)}
            className={clsx(styles.btn, styles.btnPrimary)}
          >
            提交答案
          </button>
        </div>
      )}
    </div>
  );
}
