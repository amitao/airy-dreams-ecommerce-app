import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';


const Nav = () => {
  return (

    <div className="nav-bar">
      <Link className="logo" to='/'>
        <img className="logo-image" src='ad-logo.svg' alt="logo" />
      </Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/necklace'>Necklace</Link></li>
        <li><Link to='/necklace'>Earrings</Link></li>
        <li><Link to='/necklace'>Bracelets</Link></li>
      </ul>
    </div>

  )
}

export default Nav;