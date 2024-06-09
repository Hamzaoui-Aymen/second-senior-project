'use client';
import React from "react";
import Carosel from "./Carosel";
import Products from "./Products";
import Category from "../Category/Page"

import WishlistItem from '../Wishlist/page';

const Home = () => {
  const item = {
    imgUrl: 'https://m.media-amazon.com/images/I/51+AvgQs50L.jpg', // Replace with actual URL
    name: 'Sample Item',
    price: 99.99,
    oldPrice: 129.99,
  };

  return (
    <>
      <Carosel />
      <Products />
      <Category/>
      <div>
        <WishlistItem item={item} />
      </div>
    </>
  );
};

export default Home;
