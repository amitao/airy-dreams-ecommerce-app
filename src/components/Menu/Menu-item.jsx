import React from 'react';
import './Menu.scss';


// items to shop

const MenuItem = ({ title, img, size }) => {
  return (
    <div style={{
      backgroundImage:`url(${img})`
      }} 
      className={`menu-item ${size}`} 
      >
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  );
}

export default MenuItem;