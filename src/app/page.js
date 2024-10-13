import ProductInfo from '@/stories/ProductInfo';
import MainBanner from './components/MainBanner';
import styles from './page.module.css';
import { mockData } from './mockData';

export default function Home() {
  return (
    <div className={styles.page}>
      <MainBanner />
      <div className={styles.productTitle}>
        Most Popular
        <div className={styles.productSubTitle}>인기 상품</div>
        <div className={styles.productItmes}>
          {mockData.map((item) => (
            <ProductInfo {...item} />
          ))}
        </div>
      </div>
      <div className={styles.productTitle}>
        Just Dropped
        <div className={styles.productSubTitle}>발매 상품</div>
        <div className={styles.productItmes}>
          {mockData.map((item) => (
            <ProductInfo {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
