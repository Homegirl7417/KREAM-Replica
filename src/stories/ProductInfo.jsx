import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInfo.module.scss';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
const ProductInfo = ({ image, isBookmarked, productName, brandName, quickDelivery, discountedPrice }) => {
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={productName} className={styles.productImage} />
        {isBookmarked ? <BiSolidBookmark className={styles.bookmarkButton} /> : <BiBookmark className={styles.bookmarkButton} />}
      </div>
      <div className={styles.details}>
        <div className={styles.brandName}>{brandName}</div>
        <div className={styles.productName}>{productName}</div>
        <div className={styles.badges}>
          {quickDelivery && (
            <div className={styles.quickDelivery}>
              <img src="/quickDelivery.png" alt="Quick Delivery Badge" className={styles.quickDeliveryImg} />
              <span>빠른배송</span>
            </div>
          )}
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.discountedPrice}>{discountedPrice}원</div>
          <div className={styles.instantPrice}>즉시 구매가</div>
        </div>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  image: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  quickDelivery: PropTypes.bool.isRequired,
  discountedPrice: PropTypes.number.isRequired,
};

export default ProductInfo;
