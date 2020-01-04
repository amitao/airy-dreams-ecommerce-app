import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-wrapper box">
        <div className="box-item footer-logo">
          <Link className="logo" to='/'>
            <img className="logo-image" src='ad-logo.svg' alt="logo" />
          </Link>
        </div>
        <div className="box-item footer-content">
          <div className="item">
            <h4>Company info</h4>
            <p>About us</p>
            <p>Find a store</p>
            <p>Careers</p>
          </div>
          <div className="item">
            <h4>Help & Support</h4>
            <p>Shipping info</p>
            <p>Returns & Exchange</p>
            <p>Contact Us</p>
          </div>
          <div className="item">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;