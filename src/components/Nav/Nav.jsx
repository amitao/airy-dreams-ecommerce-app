import React from 'react';
import './Nav.scss';


const Nav = () => {
  return (

    <div className="nav-bar">
      <div className="logo">
        LOGO
        <img src="https://airy-dreams-image.s3.amazonaws.com/ad-logo.svg" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Necklace</li>
        <li>Earrings</li>
        <li>Bracelets</li>
      </ul>
    </div>

  )
}

export default Nav;