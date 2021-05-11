import React, { useState, useEffect } from 'react';
import Products from './Products/Products';
import Navbar2 from './Navbar/Navbar';
import Banner from './Banner/Banner';
import '../App.css';
import { commerce } from '../lib/commerce';

const Home = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();

  }, []);



  return (
    <div className="home" >
      <Navbar2 />
      <Banner />
      <Products products={products} />

    </div >



  )
};

export default Home;