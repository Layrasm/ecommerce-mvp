import React from 'react';
import { Paper, Button } from '@material-ui/core';


const CarouselItem = ({ item }) => {

  return (
    <Paper className="carouselContent">
      <div>
        <img className="carouselImage" src={item.imgSrc} alt="" />
        <Button className="carouselButton">
          Check it out!
        </Button>
      </div>
    </Paper>
  )
}

export default CarouselItem;
