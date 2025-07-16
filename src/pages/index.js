import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const startDate = new Date('2025-05-15T00:00:00'); // 设置开始日期为2025年5月15日
  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.myCustomTitle)}>Welcome!</h1>
        {/*
        <div className={styles.inputLikeBox}>
      喜欢小雨宝宝的第{timePassed.days}天 {timePassed.hours}小时 {timePassed.minutes}分钟 {timePassed.seconds}秒
        </div>
        */}
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
