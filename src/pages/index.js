import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';

function HomepageHeader() {
  const startDate = new Date('2025-05-15T00:00:00'); // 设置开始日期为2025年5月15日
  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diffTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setTimePassed({
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    };

    calculateTime(); // 初始计算
    const intervalId = setInterval(calculateTime, 1000); // 每秒更新一次

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="homepage-header">
      <div className="container">
      喜欢小雨宝宝的第{timePassed.days}天 {timePassed.hours}小时 {timePassed.minutes}分钟 {timePassed.seconds}秒
      </div>
    </header>
  );
}

export default function Home() {

  return (
    <Layout>
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}
