import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import './carousel.css';

const CarouselHeader = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",

    }
  ]

  return (
    <Carousel className="carousel" autoPlay={false}>
      {items.map((item, i) => <CarouselItem key={i} item={item} />)}
    </Carousel>
  )
}

export default CarouselHeader;
