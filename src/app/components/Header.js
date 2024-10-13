import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const topMenu = [
    {
      title: '고객센터',
      link: '/notice',
    },
    {
      title: '마이페이지',
      link: '/my',
    },
    {
      title: '관심',
      link: '/saved',
    },
    {
      title: '알림',
      link: '/notifications',
    },
    {
      title: '로그인',
      link: '/login',
    },
  ];

  const logoMenu = [
    {
      title: 'HOME',
      link: '/',
      isIcon: false,
      isBold: true,
    },
    {
      title: 'STYLE',
      link: '/social',
      isIcon: false,
      isBold: false,
    },
    {
      title: 'SHOP',
      link: '/search',
      isIcon: false,
      isBold: false,
    },
    {
      title: 'EXPLORE',
      link: '/search',
      isIcon: true,
      iconName: 'SEARCH',
      isBold: false,
    },
    {
      title: 'CART',
      link: '/cart',
      isIcon: true,
      iconName: 'CART',
      isBold: false,
    },
  ];
  return (
    <div className={styles.header_container}>
      <div className={styles.header_topmenu_container}>
        {topMenu.map((item, idx) => (
          <Link key={idx} className={styles.header_topmenu_link} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.header_logomenu_container}>
        <div>
          <Link href="/">
            <img src={'/logo.webp'} alt="KREAM LOGO" className={styles.header_logomenu_link} />
          </Link>
        </div>
        <div className={styles.header_logomenu_icon_container}>
          {logoMenu.map((item, idx) => (
            <div key={idx} className={`${styles.header_logomenu_icon} ${item.isBold ? styles.font_bold : styles.font_normal}`}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
