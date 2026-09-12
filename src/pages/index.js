import Layout from '@theme/Layout';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import wallpaper from '@site/static/img/city.webp';
import portraitWallpaper from '@site/static/img/city-portrait.webp';
import styles from './index.module.css';

function HomepageHeader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 运行时状态
    let drops = [];
    let animationId = 0;
    let lastTs = 0;
    let lastFrameTs = 0;
    let isInViewport = true;
    const FRAME_INTERVAL = 1000 / 30;

    // 画布尺寸与 DPR（限制以降低开销）
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let widthCss = 0;
    let heightCss = 0;

    // 基于面积的雨滴密度与上下限
    const DENSITY_PER_PIXEL = 0.00012; // 每像素雨滴密度（经验值）
    const MIN_DROPS = 60;
    const MAX_DROPS = 400;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Drop {
      constructor() {
        this.reset(true);
      }
      reset(randomY = false) {
        this.x = Math.random() * widthCss;
        // 长度和速度正相关以提升观感
        this.length = rand(8, 22);
        this.y = randomY ? Math.random() * heightCss : -this.length;
        this.speed = this.length * rand(18, 32); // px/s，和长度相关
      }
      update(dt) {
        this.y += this.speed * dt;
        if (this.y > heightCss + 4) {
          // 从顶部重新进入
          this.reset(false);
        }
      }
    }

    function computeDesiredCount() {
      const isMobile = widthCss <= 600;
      const desired = Math.round(widthCss * heightCss * DENSITY_PER_PIXEL * (isMobile ? 0.6 : 1));
      return Math.max(isMobile ? 30 : MIN_DROPS, Math.min(isMobile ? 120 : MAX_DROPS, desired));
    }

    function ensureDrops() {
      const target = computeDesiredCount();
      if (drops.length < target) {
        for (let i = drops.length; i < target; i += 1) drops.push(new Drop());
      } else if (drops.length > target) {
        drops.length = target;
      }
    }

    function applyCanvasSize() {
      // 使用 CSS 尺寸作为逻辑坐标系，内部像素用 DPR 放大
      const nextWidth = canvas.clientWidth || window.innerWidth;
      const nextHeight = canvas.clientHeight || window.innerHeight;
      const nextDpr = Math.min(window.devicePixelRatio || 1, nextWidth <= 600 ? 1 : 1.5);
      if (nextWidth === widthCss && nextHeight === heightCss && nextDpr === dpr) return;
      widthCss = nextWidth;
      heightCss = nextHeight;
      dpr = nextDpr;

      canvas.width = Math.max(1, Math.floor(widthCss * dpr));
      canvas.height = Math.max(1, Math.floor(heightCss * dpr));

      // 将坐标系缩放到 CSS 像素，避免到处手动乘 dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1; // 1 个 CSS 像素
      ctx.strokeStyle = 'rgba(174,194,224,0.55)'; // 固定透明度，便于批量描边

      ensureDrops();
    }

    function onResize() {
      applyCanvasSize();
    }

    function shouldAnimate() {
      return !document.hidden && !reducedMotion.matches && isInViewport;
    }

    function syncAnimation() {
      cancelAnimationFrame(animationId);
      animationId = 0;
      lastTs = 0;
      lastFrameTs = 0;
      if (reducedMotion.matches) {
        ctx.clearRect(0, 0, widthCss, heightCss);
      }
      if (shouldAnimate()) animationId = requestAnimationFrame(animate);
    }

    function animate(ts) {
      if (!shouldAnimate()) return;
      animationId = requestAnimationFrame(animate);
      const elapsed = ts - lastFrameTs;
      if (lastFrameTs && elapsed < FRAME_INTERVAL) return;
      // 保留不足一帧的余量，避免在高刷新率屏幕上出现帧率漂移。
      lastFrameTs = ts - (elapsed % FRAME_INTERVAL);
      const dtMs = lastTs ? Math.min(100, ts - lastTs) : FRAME_INTERVAL;
      lastTs = ts;
      const dt = dtMs / 1000; // 转换为秒

      // 更新
      for (let i = 0; i < drops.length; i += 1) drops[i].update(dt);

      // 绘制（单次路径、批量描边，减少调用次数）
      ctx.clearRect(0, 0, widthCss, heightCss);
      ctx.beginPath();
      for (let i = 0; i < drops.length; i += 1) {
        const d = drops[i];
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
      }
      ctx.stroke();

    }

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);
    const observer = new IntersectionObserver(([entry]) => {
      isInViewport = entry.isIntersecting;
      syncAnimation();
    });
    observer.observe(canvas);

    applyCanvasSize();
    // 初始时让雨滴分布均匀
    for (let i = 0; i < drops.length; i += 1) drops[i].reset(true);
    syncAnimation();

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <picture>
        <source
          media="(max-width: 600px) and (max-aspect-ratio: 2/3)"
          srcSet={portraitWallpaper}
          type="image/webp"
        />
        <img
          className={styles.wallpaper}
          src={wallpaper}
          width="2560"
          height="1440"
          alt=""
          fetchPriority="high"
          loading="eager"
        />
      </picture>
      <canvas ref={canvasRef} className={styles.rainCanvas} aria-hidden="true" />
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        {/* No content here, or add other components as needed */}
      </main>
    </Layout>
  );
}
