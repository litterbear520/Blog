import assert from 'node:assert/strict';
import test from 'node:test';
import { placeTip } from './placement.mjs';

const tip = { width: 320, height: 60 };
const anchor = (left, top, width = 100, height = 24) => ({ left, top, width, height, bottom: top + height });

test('sits centered above the word when there is room', () => {
  assert.deepEqual(placeTip({ anchor: anchor(500, 400), tip, viewportWidth: 1280, topInset: 60 }), {
    left: 390,
    top: 332,
    side: 'above',
    arrow: 160,
  });
});

test('stays inside the viewport near either edge, arrow still points at the word', () => {
  const nearLeft = placeTip({ anchor: anchor(10, 400), tip, viewportWidth: 1280 });
  assert.equal(nearLeft.left, 8);
  assert.equal(nearLeft.arrow, 52);

  const nearRight = placeTip({ anchor: anchor(1170, 400), tip, viewportWidth: 1280 });
  assert.equal(nearRight.left, 952);
  assert.equal(nearRight.arrow, 268);
});

test('flips below when the navbar would cover it', () => {
  const placed = placeTip({ anchor: anchor(500, 100), tip, viewportWidth: 1280, topInset: 60 });
  assert.equal(placed.side, 'below');
  assert.equal(placed.top, 132);
});

test('arrow never leaves the rounded corners', () => {
  assert.equal(placeTip({ anchor: anchor(0, 400, 4), tip, viewportWidth: 1280 }).arrow, 14);
});
