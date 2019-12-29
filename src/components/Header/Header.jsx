import React from 'react';
import './Header.scss';


const Header = (props) => {
  const className = `btn ${props.type}`;

  return (
    <div className="header-container">
    <div className="headline">
      <h1>Be <span>glam</span> with Airy Dreams.</h1>
      <h3>shop now</h3>
      {props.button}
    </div>
    </div>
  );
}

export default Header;