import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, MenuItem } from '@material-ui/core';
import './cartItem.css';

const CartItem = ({ item }) => {



  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className="cartItemMedia" />
      <CardContent className="cartItemCardContent">
        <Typography variant="h4">{item.name}</Typography>
        <div>
          <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
          <Typography>Qty: {item.quantity}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <div className="cartItemButtons">

        </div>
      </CardActions>

    </Card>
  )
}

export default CartItem
