import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/apple-touch-icon.png';
import './navbar.css';

const Navbar2 = () => {



  return (
    <div>
      <AppBar position="fixed" className="appBar" color="inherit">
        <Toolbar className="toolbar" >
          <Typography className="title" color="inherit" variant="h7">
            <img src={logo} alt="Commerce.js" height="35px" className="image" />
              Woke Supply
          </Typography>
          <div className="grow" />
          <div className="button">
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Navbar2
