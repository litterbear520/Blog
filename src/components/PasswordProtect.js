import React, { useState, useEffect, useRef } from 'react';
import { PASSWORD_CONFIG } from '../constants/passwordConfig';
import styles from './PasswordProtect.module.css';

export default function PasswordProtect({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shakeError, setShakeError] = useState(false);
  const canvasRef = useRef(null);
  const cardCanvasRef = useRef(null);

  useEffect(() => {
    if (!PASSWORD_CONFIG.enabled) {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    const storedAuth = localStorage.getItem(PASSWORD_CONFIG.storageKey);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isAuthenticated || isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let shootingStars = [];
    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouse = { x: -1000, y: -1000 };
    const CONNECT_DIST = 120;
    const MOUSE_RADIUS = 180;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function createStar() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        radius: 0.5 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.005 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      };
    }

    function createShootingStar() {
      const fromLeft = Math.random() > 0.5;
      return {
        x: fromLeft ? -10 : width + 10,
        y: Math.random() * height * 0.5,
        vx: fromLeft ? 8 + Math.random() * 6 : -(8 + Math.random() * 6),
        vy: 3 + Math.random() * 4,
        life: 1,
        decay: 0.015 + Math.random() * 0.01,
        length: 40 + Math.random() * 60,
      };
    }

    function init() {
      resize();
      stars = [];
      const starCount = Math.floor((width * height) / 4000);
      for (let i = 0; i < starCount; i++) {
        const star = createStar();
        star.baseX = star.x;
        star.baseY = star.y;
        stars.push(star);
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // 偶尔生成流星
      if (Math.random() < 0.003 && shootingStars.length < 2) {
        shootingStars.push(createShootingStar());
      }

      // 绘制流星
      shootingStars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        const tailX = s.x - (s.vx / Math.abs(s.vx)) * s.length * s.life;
        const tailY = s.y - (s.vy / Math.abs(s.vy)) * s.length * s.life * 0.5;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, `rgba(200, 220, 255, ${s.life * 0.8})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      });
      shootingStars = shootingStars.filter(s => s.life > 0);

      // 更新和绘制星星
      stars.forEach(star => {
        // 缓慢漂移
        star.baseX += star.vx;
        star.baseY += star.vy;
        if (star.baseX < 0) star.baseX = width;
        if (star.baseX > width) star.baseX = 0;
        if (star.baseY < 0) star.baseY = height;
        if (star.baseY > height) star.baseY = 0;

        // 鼠标排斥效果
        const dx = star.baseX - mouse.x;
        const dy = star.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          star.x = star.baseX + dx * force * 0.5;
          star.y = star.baseY + dy * force * 0.5;
        } else {
          star.x = star.baseX;
          star.y = star.baseY;
        }

        // 闪烁
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        const alpha = star.opacity * (0.4 + 0.6 * twinkle);

        // 绘制星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
        ctx.fill();

        // 较大的星星加光晕
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 200, 255, ${alpha * 0.15})`;
          ctx.fill();
        }
      });

      // 鼠标附近的星星连线
      stars.forEach((a, i) => {
        const dxA = a.x - mouse.x;
        const dyA = a.y - mouse.y;
        const distA = Math.sqrt(dxA * dxA + dyA * dyA);
        if (distA > MOUSE_RADIUS * 1.5) return;

        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dxB = b.x - mouse.x;
          const dyB = b.y - mouse.y;
          const distB = Math.sqrt(dxB * dxB + dyB * dyB);
          if (distB > MOUSE_RADIUS * 1.5) continue;

          const dxAB = a.x - b.x;
          const dyAB = a.y - b.y;
          const distAB = Math.sqrt(dxAB * dxAB + dyAB * dyAB);

          if (distAB < CONNECT_DIST) {
            const lineAlpha = (1 - distAB / CONNECT_DIST) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isAuthenticated, isLoading]);

  // 卡片内星空背景
  useEffect(() => {
    if (isAuthenticated || isLoading) return;

    const canvas = cardCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationId = 0;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000 };
    const CONNECT_DIST = 80;
    const MOUSE_RADIUS = 120;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function init() {
      resize();
      stars = [];
      const count = Math.floor((width * height) / 1500);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          radius: 0.4 + Math.random() * 1.5,
          opacity: 0.3 + Math.random() * 0.7,
          twinkleSpeed: 0.008 + Math.random() * 0.025,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        const dx = star.baseX - mouse.x;
        const dy = star.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          star.x = star.baseX + dx * force * 0.4;
          star.y = star.baseY + dy * force * 0.4;
        } else {
          star.x = star.baseX;
          star.y = star.baseY;
        }

        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        const alpha = star.opacity * (0.4 + 0.6 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
        ctx.fill();

        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 200, 255, ${alpha * 0.12})`;
          ctx.fill();
        }
      });

      // 鼠标附近连线
      stars.forEach((a, i) => {
        const dA = Math.sqrt((a.x - mouse.x) ** 2 + (a.y - mouse.y) ** 2);
        if (dA > MOUSE_RADIUS * 1.5) return;
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dB = Math.sqrt((b.x - mouse.x) ** 2 + (b.y - mouse.y) ** 2);
          if (dB > MOUSE_RADIUS * 1.5) continue;
          const dAB = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (dAB < CONNECT_DIST) {
            const lineAlpha = (1 - dAB / CONNECT_DIST) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isAuthenticated, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setShakeError(false);

    if (password === PASSWORD_CONFIG.password) {
      localStorage.setItem(PASSWORD_CONFIG.storageKey, 'true');
      setIsAuthenticated(true);
    } else {
      setError(PASSWORD_CONFIG.errorText);
      setShakeError(true);
      setPassword('');
      setTimeout(() => setShakeError(false), 500);
    }
  };

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={styles.passwordPage} style={{ backgroundImage: 'url(/Blog/img/city.png)' }}>
      <canvas ref={canvasRef} className={styles.rainCanvas}></canvas>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={`${styles.passwordContainer} ${shakeError ? styles.shake : ''}`}>
          <canvas ref={cardCanvasRef} className={styles.cardCanvas}></canvas>
          <div className={styles.logoContainer}>
            <img src="/Blog/img/icon2.png" alt="Logo" className={styles.logo} />
          </div>

          <h1 className={styles.title}>{PASSWORD_CONFIG.title}</h1>
          <p className={styles.hint}>{PASSWORD_CONFIG.hint}</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={PASSWORD_CONFIG.placeholder}
                className={styles.input}
                autoFocus
              />
              <div className={styles.inputBorder}></div>
            </div>

            {error && (
              <div className={styles.errorContainer}>
                <span className={styles.error}>{error}</span>
              </div>
            )}

            <button type="submit" className={styles.button}>
              <span className={styles.buttonText}>{PASSWORD_CONFIG.submitText}</span>
              <span className={styles.buttonGlow}></span>
            </button>
          </form>

          <div className={styles.decorativeLine}></div>
        </div>
      </div>
    </div>
  );
}
