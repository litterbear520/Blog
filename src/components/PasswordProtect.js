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
    let drops = [];
    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    }

    function createDrop() {
      return {
        x: Math.random() * width,
        y: -10 - Math.random() * 100,
        speed: 8 + Math.random() * 12,
        length: 20 + Math.random() * 40,
        opacity: 0.2 + Math.random() * 0.3
      };
    }

    function init() {
      resize();
      drops = [];
      const dropCount = Math.floor(width / 40);
      for (let i = 0; i < dropCount; i++) {
        const drop = createDrop();
        drop.y = Math.random() * height;
        drops.push(drop);
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.4)';
      ctx.lineWidth = 1.5;

      drops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > height) {
          drop.x = Math.random() * width;
          drop.y = -drop.length;
        }

        ctx.beginPath();
        ctx.globalAlpha = drop.opacity;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
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
