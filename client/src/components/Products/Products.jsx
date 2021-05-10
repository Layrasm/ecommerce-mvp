import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';



const products = [
  { id: 1, name: 'Shirts', description: 'cool t-shirts', price: '$5', image: 'https://res.cloudinary.com/dbbgin0ik/image/upload/v1620607647/t-shirt_diz16h.jpg' },
  { id: 2, name: 'Shirts', description: 'cool t-shirts', price: '$5', image: 'https://res.cloudinary.com/dbbgin0ik/image/upload/v1620607647/t-shirt_diz16h.jpg' },
  { id: 3, name: 'Shirts', description: 'cool t-shirts', price: '$5', image: 'https://res.cloudinary.com/dbbgin0ik/image/upload/v1620607647/t-shirt_diz16h.jpg' },


];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>

  )
};

export default Products;