// 善用工具弥补技术深度：两块纸白断崖之间是一道深沟（技术深度的鸿沟），
// 一架墨线梯子从矮的一边搭到高的一边——工具把人送过去；沟里一支箭头直插沟底，量出这道沟有多深
module.exports = {
  swatch: 'sky',
  seed: 7,
  draw(d, m) {
    // 两块断崖：内侧崖壁往下收，沟底留窄缝
    d.cut([[60, 450], [380, 450], [440, 935], [60, 935]]);
    d.cut([[622, 220], [940, 220], [940, 935], [555, 935]]);

    // 梯子：下面那根梯帮踩在左崖顶、架在右崖角上（两点连线往外延）
    const L0 = [250, 452], L1 = [730, 152];
    const dx = L1[0] - L0[0], dy = L1[1] - L0[1];
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const px = uy * 34, py = -ux * 34; // 垂直方向半宽
    const A = [L0[0] + px, L0[1] + py], B = [L1[0] + px, L1[1] + py]; // 梯子中线
    d.brush([[A[0] + px, A[1] + py], [B[0] + px, B[1] + py]]);
    d.brush([[A[0] - px, A[1] - py], [B[0] - px, B[1] - py]]);
    for (let t = 70; t < len - 30; t += 72) {
      const cx = A[0] + ux * t, cy = A[1] + uy * t;
      d.brush([[cx + px, cy + py], [cx - px, cy - py]]);
    }

    // 沟里的深度：一支箭头直插沟底
    d.arrow([[498, 470], [498, 880]]);
  },
};
