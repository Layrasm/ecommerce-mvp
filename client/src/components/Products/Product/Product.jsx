import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import "./product.css";

const Product = ({ product, onAddToCart }) => {

  return (
    <Card className="root">
      <CardMedia className="media" image={product.media.source} title={product.name} />
      <CardContent CardContent >
        <div className="cardContent">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body3" className="productDescription" />
      </CardContent >
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id, 1)} className="buttons">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card >
  )
}

export default Product;
