'use client';

import React, { useState, useEffect } from 'react';
import styles from './MainBanner.module.scss';

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      alt: '킨 x 엔지니어드 가먼츠 단독 발매 배너 이미지',
      src: '/mainBanner1.webp',
      backgroundColor: 'rgb(158, 162, 163)',
    },
    {
      alt: '지금 날씨에 가장 잘 어울리는 브랜드 배너 이미지',
      src: '/mainBanner2.webp',
      backgroundColor: 'rgb(179, 187, 148)',
    },
    {
      alt: '인기 후드집업 모아보기 배너 이미지',
      src: '/mainBanner3.webp',
      backgroundColor: 'rgb(226, 225, 221) ',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };
  // 자동 슬라이드 기능
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={styles.bannerBackground} style={{ backgroundColor: banners[currentIndex].backgroundColor }}>
      <div className={styles.bannerContainer}>
        <button onClick={handlePrev} className={styles.arrowButton}>
          &lt;
        </button>
        <div className={styles.banner}>
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`${styles.bannerItem} ${currentIndex === idx ? styles.active : ''}`}
              style={{ backgroundColor: 'red' }}
            >
              <img src={banner.src} alt={banner.alt} className={styles.bannerItemImg} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.arrowButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
