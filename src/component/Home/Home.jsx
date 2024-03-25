import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import NewArrivals from '../Products/Product/NewArrivals';
import Discount from './Discount/Discount';
import OrderMethod from './OrderMethod/OrderMethod';

const Home = () => {
  return (
    <>
      <Banner />
      <Category/>
      <Products/>
      <NewArrivals/>
      <Discount/>
      <OrderMethod/>
    </>
  );
};

export default Home;
