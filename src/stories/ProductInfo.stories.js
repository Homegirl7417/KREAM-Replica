import React from 'react';
import ProductInfo from './ProductInfo';

export default {
  title: 'Components/ProductInfo',
  component: ProductInfo,
};

const Template = (args) => <ProductInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/300',
  isBookmarked: false,
  productName: '상품 이름',
  brandName: '브랜드명',
  quickDelivery: true,
  discountedPrice: 20000,
};

export const Bookmarked = Template.bind({});
Bookmarked.args = {
  ...Default.args,
  isBookmarked: true,
};
