import Layout from '@theme/Layout';
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const startDate = new Date('2025-05-15T00:00:00'); // 设置开始日期为2025年5月15日
  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const calculateTimePassed = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimePassed({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimePassed, 1000);
    calculateTimePassed(); // Initial call to set time immediately

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // 运行时状态
    let drops = [];
    let animationId = 0;
    let lastTs = 0;
    let isPaused = false;

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
        this.y = randomY ? Math.random() * heightCss : -this.length;
        // 长度和速度正相关以提升观感
        this.length = rand(8, 22);
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
      const desired = Math.round(widthCss * heightCss * DENSITY_PER_PIXEL);
      return Math.max(MIN_DROPS, Math.min(MAX_DROPS, desired));
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
      widthCss = canvas.clientWidth || window.innerWidth;
      heightCss = canvas.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

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

    function onVisibilityChange() {
      isPaused = document.hidden;
      if (!isPaused) {
        // 恢复时重置计时，避免大 dt 跳变
        lastTs = 0;
        animationId = requestAnimationFrame(animate);
      }
    }

    function animate(ts) {
      if (isPaused) return;
      const t = typeof ts === 'number' ? ts : performance.now();
      const dtMs = lastTs ? Math.min(48, t - lastTs) : 16; // 钳制最大步长
      lastTs = t;
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

      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    applyCanvasSize();
    // 初始时让雨滴分布均匀
    for (let i = 0; i < drops.length; i += 1) drops[i].reset(true);
    animationId = requestAnimationFrame(animate);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [startDate]);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/** 保留容器，已移除文本 **/}
        <canvas ref={canvasRef} className={styles.rainCanvas}></canvas>
      </div>
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
