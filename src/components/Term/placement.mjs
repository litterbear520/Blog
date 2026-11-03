const GAP = 8;
const MARGIN = 8;
const ARROW_INSET = 14;

const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));

/**
 * 算解释弹层的视口坐标：默认在词上方居中，贴边时收回屏幕内，上方放不下（被导航栏挡住）时翻到下方。
 * arrow 是小三角相对弹层左边的距离，弹层被收回时它仍指着词。
 */
export function placeTip({ anchor, tip, viewportWidth, topInset = 0 }) {
  const center = anchor.left + anchor.width / 2;
  const left = clamp(center - tip.width / 2, MARGIN, viewportWidth - tip.width - MARGIN);
  const above = anchor.top - GAP - tip.height;
  const fitsAbove = above >= topInset + MARGIN;
  return {
    left,
    top: fitsAbove ? above : anchor.bottom + GAP,
    side: fitsAbove ? 'above' : 'below',
    arrow: clamp(center - left, ARROW_INSET, tip.width - ARROW_INSET),
  };
}
