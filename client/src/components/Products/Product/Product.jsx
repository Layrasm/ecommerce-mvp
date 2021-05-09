import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import "./product.css";

const Product = ({ product }) => {

  return (
    <Card className="root">
      < CardMedia className="media" image='' title={product.name} />
      <CardContent CardContent >
        <div className="cardContent">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>


      </CardContent >
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add To Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card >
  )
}

export default Product;
