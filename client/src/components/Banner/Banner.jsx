import React from 'react';
import { Card, CardMedia } from '@material-ui/core'
import './banner.css';
import banner from '../../assets/clearance-banner.jpg'

const Banner = () => {
  return (
    <div>
      <Card className="bannerBackground" >
        <CardMedia className="bannerMedia" image={banner} />
      </Card>

    </div>
  )
}

export default Banner
