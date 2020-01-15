import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './Nav.scss';


const Nav = ({ currentUser }) => {
  return (
    <div className="nav-bar-container">
      <Link className="logo" to='/'>
        <img className="logo-image" src='ad-logo.svg' alt="logo" />
      </Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/necklace'>Necklace</Link></li>
        <li><Link to='/necklace'>Earrings</Link></li>
        <li><Link to='/necklace'>Bracelets</Link></li>
        <li>
            {
              currentUser ? (<div className="option" onClick={() => auth.signOut()}>Log out</div>) :
              (<Link className="option" to='/log-in'>Log in</Link>
              )}
          
        </li>
      </ul>
    </div>

  )
}

export default Nav;