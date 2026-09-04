import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * 单选测验：一次只显示一道题，答完点"下一题"，最后一题点"提交"；
 * 有未作答的题会先确认，交卷后显示是否通过、答对题数和得分条，可重新参加。
 * 每道题的选项顺序在首次进入和每次重新参加时都随机打乱（在挂载后打乱，避免 SSR 水合不一致）。
 * questions: [{ text, options: string[], answer: number }]，answer 为原始选项下标。
 */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const identityOrders = (questions) => questions.map((q) => q.options.map((_, i) => i));
const shuffledOrders = (questions) => questions.map((q) => shuffle(q.options.map((_, i) => i)));

export default function McpQuiz({ questions, passingPercentage = 70 }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [attempt, setAttempt] = useState(1);
  // orders[qi] = 该题展示顺序对应的原始选项下标；answers 里存的是原始下标
  const [orders, setOrders] = useState(() => identityOrders(questions));

  useEffect(() => {
    setOrders(shuffledOrders(questions));
  }, [questions]);

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const unanswered = total - answeredCount;
  const isLast = current === total - 1;
  const question = questions[current];

  const submit = () => {
    setConfirming(false);
    setSubmitted(true);
  };

  const retake = () => {
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
    setConfirming(false);
    setAttempt((n) => n + 1);
    setOrders(shuffledOrders(questions));
  };

  if (submitted) {
    const correctCount = questions.filter((q, i) => answers[i] === q.answer).length;
    const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    const passed = score >= passingPercentage;
    return (
      <div className={clsx(styles.card, styles.result)} role="status">
        <h2 className={styles.resultTitle}>{passed ? '您已通过' : '未能通过'}</h2>
        <p className={styles.resultBody}>
          {passed
            ? `您答对了 ${total} 题中的 ${correctCount} 题。`
            : `您答对了 ${total} 题中的 ${correctCount} 题。请复习课程材料，准备好后再重试。尝试次数不限。`}
        </p>
        <div className={styles.scoreBox}>
          <div className={styles.scoreLabel}>
            您的得分 <b className={styles.scoreValue}>{score}%</b>
          </div>
          <div aria-hidden="true" className={styles.scoreTrack}>
            <span className={styles.scoreFill} style={{ width: `${score}%` }} />
            {!passed && <span className={styles.scoreTick} style={{ left: `${passingPercentage}%` }} />}
          </div>
        </div>
        <div className={styles.resultActions}>
          <button type="button" onClick={retake} className={clsx(styles.btn, styles.btnSecondary)}>
            重新参加测验
          </button>
        </div>
      </div>
    );
  }

  const legendId = `mcp-quiz-q-${current}`;
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span aria-live="polite" aria-atomic="true" className={styles.counter}>
                第 {current + 1} 题，共 {total} 题
              </span>
              {attempt > 1 && (
                <>
                  <span aria-hidden="true" className={styles.muted}>
                    ·
                  </span>
                  <span className={styles.muted}>第 {attempt} 次尝试</span>
                </>
              )}
            </div>
            <span className={styles.muted}>已回答 {answeredCount} 题</span>
          </div>
          <div className={styles.progress}>
            {questions.map((q, i) => (
              <button
                key={i}
                type="button"
                aria-label={`跳到第 ${i + 1} 题${answers[i] !== undefined ? '（已回答）' : ''}`}
                aria-current={i === current ? 'step' : undefined}
                onClick={() => setCurrent(i)}
                className={styles.segment}
              >
                <span
                  className={clsx(
                    styles.segmentBar,
                    i === current && styles.segmentCurrent,
                    i !== current && answers[i] !== undefined && styles.segmentDone,
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <fieldset className={styles.body}>
          <legend id={legendId} className={styles.questionText}>
            {question.text}
          </legend>
          <div className={styles.options} role="radiogroup" aria-labelledby={legendId}>
            {orders[current].map((oi) => {
              const opt = question.options[oi];
              const chosen = answers[current] === oi;
              return (
                <label key={oi} className={clsx(styles.option, chosen && styles.optionChosen)}>
                  <input
                    type="radio"
                    name={`mcp-quiz-${current}`}
                    checked={chosen}
                    onChange={() => setAnswers((prev) => ({ ...prev, [current]: oi }))}
                    className={styles.radio}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={styles.footer}>
          <button
            type="button"
            disabled={current === 0}
            onClick={() => setCurrent((i) => Math.max(0, i - 1))}
            className={clsx(styles.btn, styles.btnSecondary)}
          >
            ← 返回
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={() => (unanswered > 0 ? setConfirming(true) : submit())}
              className={clsx(styles.btn, styles.btnPrimary)}
            >
              提交
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrent((i) => Math.min(total - 1, i + 1))}
              className={clsx(styles.btn, styles.btnPrimary)}
            >
              下一题 →
            </button>
          )}
        </div>
      </div>

      {confirming && (
        <div className={styles.confirm} role="alertdialog" aria-labelledby="mcp-quiz-confirm-title">
          <p id="mcp-quiz-confirm-title" className={styles.confirmTitle}>
            有 {unanswered} 道题未作答，确定提交？
          </p>
          <p className={styles.confirmBody}>未作答的题目将被视为答错。</p>
          <div className={styles.confirmActions}>
            <button type="button" onClick={() => setConfirming(false)} className={clsx(styles.btn, styles.btnSecondary)}>
              返回
            </button>
            <button type="button" onClick={submit} className={clsx(styles.btn, styles.btnPrimary)}>
              提交
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
