import React from 'react';
import './Preview.scss';

import CustomButton from '../Custom-button/Custom-button';

const PreviewItem = ({ id, name, price, imageUrl }) => {
  return (

    <div className="item">

      <div className="inner-wrapper item-container">
        <div
          className="image-item"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >

          <div className="preview-content">
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <CustomButton inverted>Add to Cart</CustomButton>
        </div>
      </div>

    </div> // end of item
  )
}

export default PreviewItem;