import React from 'react';
import { Card, CardMedia } from '@material-ui/core'
import './banner.css';

const Banner = () => {
  return (
    <div>
      <Card className="bannerBackground">
        <CardMedia className="bannerMedia" />
      </Card>

    </div>
  )
}

export default Banner
