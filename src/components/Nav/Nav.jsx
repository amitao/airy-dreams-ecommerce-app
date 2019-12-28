import React from 'react';
import './Nav.scss';


const Nav = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">LOGO</div>
        <ul>
          <li>Home</li>
          <li>Necklace</li>
          <li>Earrings</li>
          <li>Bracelets</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;