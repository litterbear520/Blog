import assert from 'node:assert/strict';
import test from 'node:test';
import { validate, feedback, optionState } from './model.mjs';

const options = [
  { text: 'A', explain: 'A 不对，因为……' },
  { text: 'B', correct: true, explain: 'B 对，因为……' },
  { text: 'C', explain: 'C 不对，因为……' },
];

test('valid data has no errors', () => {
  assert.deepEqual(validate({ question: '哪一个？', options }), []);
});

test('exactly one correct option, every option explained', () => {
  assert.match(validate({ question: 'q', options: options.map((o) => ({ ...o, correct: true })) }).join(), /正好一个/);
  assert.match(validate({ question: 'q', options: [{ text: 'A', correct: true }, { text: 'B', explain: 'x' }] }).join(), /第 1 个选项缺 explain/);
  assert.match(validate({ question: '', options }).join(), /question 必填/);
  assert.match(validate({ question: 'q', options: [options[1]] }).join(), /2–5/);
});

test('feedback follows the pick and can change', () => {
  assert.deepEqual(feedback(options, null), { status: 'idle', correctIndex: 1, explain: null });
  assert.deepEqual(feedback(options, 0), { status: 'wrong', correctIndex: 1, explain: 'A 不对，因为……' });
  assert.deepEqual(feedback(options, 1), { status: 'correct', correctIndex: 1, explain: 'B 对，因为……' });
});

test('a wrong pick also reveals the right answer', () => {
  assert.deepEqual([0, 1, 2].map((i) => optionState(i, 0, 1)), ['wrong', 'answer', 'idle']);
  assert.deepEqual([0, 1, 2].map((i) => optionState(i, 1, 1)), ['idle', 'correct', 'idle']);
  assert.deepEqual([0, 1, 2].map((i) => optionState(i, null, 1)), ['idle', 'idle', 'idle']);
});
