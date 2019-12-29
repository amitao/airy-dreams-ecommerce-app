import React from 'react';
import './Preview.scss';


const PreviewItem = ({ id, name, price, imageUrl }) => {
  return (

    <div className="item" key={id}>

      <div className="item-container">
      <div 
      className="image-item"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      >
      </div>
      <div className="preview-content">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      </div>
      
    </div> // end of item
  )
}

export default PreviewItem;