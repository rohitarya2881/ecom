import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import NewArrivals from '../Products/Product/NewArrivals';

const Home = () => {
  return (
    <>
      <Banner />
      <Category/>
      <Products/>
      <NewArrivals/>
    </>
  );
};

export default Home;
