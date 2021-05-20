import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import './carousel.css';
import carouselHat from '../../assets/carousel-hat.png';

const CarouselHeader = () => {
  var items = [
    {
      name: "hats",
      imgSrc: carouselHat,
    },
    {
      name: "bags",


    }
  ]

  return (
    <div className="carouselRoot">
      <Carousel autoPlay={false}>
        {items.map((item, i) => <CarouselItem key={i} item={item} />)}
      </Carousel>
    </div>
  )
}

export default CarouselHeader;
