import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const guideMenu = [
    {
      title: '검수기준',
      type: 'ReviewCriteria',
    },
    {
      title: '이용정책',
      type: 'TermsOfUse',
    },
    {
      title: '페널티 정책',
      type: 'PenaltyPolicy',
    },
    {
      title: '커뮤니티 가이드라인',
      type: 'CommunityGuidelines',
    },
  ];

  const supportMenu = [
    {
      title: '공지사항',
      link: '/notice',
    },
    {
      title: '서비스 소개',
      link: '/about',
    },
    {
      title: '스토어 안내',
      link: '/showroom',
    },
    {
      title: '판매자 방문접수',
      link: '/about/seller_reception ',
    },
  ];

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_topmenu_container}>
        <div className={styles.footer_topmenu_left_container}>
          <div className={styles.footer_topmenu_guidemenu_container}>
            <strong className={`${styles.font_bold} ${styles.font_strong}`}>이용안내</strong>
            <ul className={styles.footer_topmenu_guidemenu_list}>
              {guideMenu.map((item, idx) => (
                <li key={idx} className={styles.footer_topmenu_guidemenu_item}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer_topmenu_guidemenu_container}>
            <strong className={`${styles.font_bold} ${styles.font_strong}`}>고객지원</strong>
            <ul className={styles.footer_topmenu_guidemenu_list}>
              {supportMenu.map((item, idx) => (
                <li key={idx} className={styles.footer_topmenu_guidemenu_item}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footer_topmenu_right_container}>
          <div className={`${styles.font_bold} ${styles.font_strong}`}>고객센터 1588-7813</div>
          <div className={styles.footer_topmenu_right_item}>운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무)</div>
          <div>점심시간 평일 13:00 - 14:00</div>
          <div className={`${styles.footer_topmenu_right_item} ${styles.font_normal}`}>1:1 문의하기는 앱에서만 가능합니다.</div>
          <div className={styles.footer_topmenu_faq_button}>자주 묻는 질문</div>
        </div>
      </div>
    </div>
  );
}
