import React from 'react';
import './ticker.css';
import logo from '../../assets/Dogecoin_Logo.png';
import PriceCard from './PriceCard';


const Ticker = () => {
  return (
    <div className="tickerMain">
      <img src={logo} width={150} height={150} alt="dogecoin logo" />
      <h1 className="titleTicker">Live Dogecoin Price</h1>
      <h5 className="subtitleTicker">To The Moon 🚀🌕</h5>
      <div className="pricesContainer">
        <PriceCard type="low" price={100} />
        <PriceCard type="high" price={200} />
        <PriceCard type="current" price={150} />
      </div>
    </div>
  )
}

export default Ticker;
