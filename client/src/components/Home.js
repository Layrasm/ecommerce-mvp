import React, { useState, useEffect } from 'react';
import Products from './Products/Products';
import Navbar2 from './Navbar/Navbar';
import Banner from './Banner/Banner';
import '../App.css';
import { commerce } from '../lib/commerce';
import Cart from './Cart/Cart';


const Home = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <div className="home" >
      <Navbar2 totalItems={cart.total_items} />
      <Banner />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />

    </div >



  )
};

export default Home;