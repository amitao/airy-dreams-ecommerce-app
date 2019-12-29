import React from 'react';
import './Preview.scss';


const Preview = ({ title, items}) => {
  return(
    <div className="preview-container">
      <h3>{title}</h3>

      <div className="item-preview">
        {items
          .filter((item, idx) => idx < 4)
          .map( (item) => {
          return (
            <div key={item.id}>
              <img src={item.imageUrl} alt="iamge"/>
              {item.name}
            </div>
          )
        })}
      </div>

    </div>
  )
}


export default Preview;