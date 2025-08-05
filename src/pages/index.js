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
    let drops = [];
    const numDrops = 100; // 雨滴数量

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // 雨滴对象
    class Drop {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10; // 雨滴长度
        this.speed = Math.random() * 5 + 2; // 雨滴速度
        this.opacity = Math.random() * 0.5 + 0.3; // 透明度
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length; // 从顶部重新开始
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(174,194,224,${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // 初始化雨滴
    for (let i = 0; i < numDrops; i++) {
      drops.push(new Drop());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
      for (let i = 0; i < numDrops; i++) {
        drops[i].fall();
        drops[i].draw();
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // 初始化画布大小
    animate(); // 开始动画

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [startDate]);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/*
        <div className={styles.inputLikeBox}>
      喜欢小雨宝宝的第{timePassed.days}天 {timePassed.hours}小时 {timePassed.minutes}分钟 {timePassed.seconds}秒
        </div>
        */}
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
