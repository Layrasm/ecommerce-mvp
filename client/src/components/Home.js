import React from 'react';
import Products from './Products/Products';
import Navbar2 from './Navbar/Navbar';
import Banner from './Banner/Banner';
import '../App.css';

const Home = () => {




  return (
    <div className="home" >
      <Navbar2 />
      <Banner />
      <Products />

    </div >



  )
};

export default Home;