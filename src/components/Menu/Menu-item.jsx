import React from 'react';
import './Menu.scss';


// items to shop

const MenuItem = ({ title }) => {
  return (
    <div className="menu-item">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  );
}

export default MenuItem;