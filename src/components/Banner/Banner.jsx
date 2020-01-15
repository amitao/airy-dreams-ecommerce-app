import React from 'react';
import CustomButton from '../Custom-button/Custom-button';

import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="content">
        <h1>Tribal necklaces</h1>
        <h3>Exclusive items</h3>
        <CustomButton>view more</CustomButton>
      </div>
    </div>
  )
}


export default Banner;