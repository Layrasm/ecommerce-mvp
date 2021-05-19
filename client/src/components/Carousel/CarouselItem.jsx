import React from 'react';
import { Paper, Button } from '@material-ui/core';


const CarouselItem = ({ item }) => {

  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}

export default CarouselItem;
