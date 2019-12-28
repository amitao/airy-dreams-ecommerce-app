import React from 'react';
import './Menu.scss';


// items to shop

const MenuItem = ({ title, img, size }) => {
  return (
    <div 
      style={{
        backgroundImage:`url(${img})`
      }} 
      className={`menu-item ${size}`} 
      >
      <div className="content">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default MenuItem;