// 快速检查的数据校验和判定，纯函数，无框架依赖（node --test src/components/QuickCheck/model.test.mjs）。

// 返回错误信息数组；空数组表示数据合法。
export function validate({ question, options }) {
  const errors = [];
  if (typeof question !== 'string' || !question.trim()) errors.push('question 必填');
  if (!Array.isArray(options) || options.length < 2 || options.length > 5) {
    errors.push('options 要有 2–5 个选项');
    return errors;
  }
  const correct = options.filter((o) => o && o.correct === true).length;
  if (correct !== 1) errors.push(`正好一个选项写 correct: true，现在有 ${correct} 个`);
  options.forEach((o, i) => {
    if (!o || typeof o.text !== 'string' || !o.text.trim()) errors.push(`第 ${i + 1} 个选项缺 text`);
    if (!o || typeof o.explain !== 'string' || !o.explain.trim()) errors.push(`第 ${i + 1} 个选项缺 explain：每个选项都要说明为什么对或不对`);
  });
  return errors;
}

// 读者选了第 picked 个选项之后显示什么。picked 为 null 表示还没选。
export function feedback(options, picked) {
  const correctIndex = options.findIndex((o) => o.correct === true);
  if (picked === null || picked === undefined) return { status: 'idle', correctIndex, explain: null };
  const right = picked === correctIndex;
  return { status: right ? 'correct' : 'wrong', correctIndex, explain: options[picked].explain };
}

// 每个选项此刻的状态：选中且对、选中且错、没选中但是正确答案（读者选错时一并标出）、普通。
export function optionState(index, picked, correctIndex) {
  if (picked === null || picked === undefined) return 'idle';
  if (index === picked) return index === correctIndex ? 'correct' : 'wrong';
  if (index === correctIndex) return 'answer';
  return 'idle';
}
