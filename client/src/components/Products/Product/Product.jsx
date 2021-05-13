import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import "./product.css";

const Product = ({ product, onAddToCart }) => {

  const [show, setShow] = useState(false);


  return (
    <Card className="cardRoot">
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
        {show && <Typography id="description" dangerouslySetInnerHTML={{ __html: product.description }} variant="body3" className="productDescription" />}
        <div className="cardActions">
          <Button className="showButton" onClick={() => setShow(!show)}>
            {show ? "Hide" : "View More"}
          </Button>
          <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id, 1)} className="addCartButton">
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardContent >

    </Card >
  )
}

export default Product;
