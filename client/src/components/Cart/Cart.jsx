import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import "./cart.css";
import CartItem from './CartItem/CartItem';


const Cart = ({ cart }) => {

  // const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1">Your cart is empty!</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className="cartDetails">
        <Typography variant="h2"> Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>
        <div className="actionButtons">
          <Button className="emptyButton" size="large" type="button" variant="contained">Empty Cart</Button>
          <Button className="checkoutButton" size="large" type="button" variant="contained">Checkout</Button>

        </div>

      </div>
    </>
  )

  if (!cart.line_items) return 'Loading...';

  return (
    <Container className="cartToolbar">
      <div />
      <Typography className="cartTitle" variant="h4">Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
};

export default Cart;
