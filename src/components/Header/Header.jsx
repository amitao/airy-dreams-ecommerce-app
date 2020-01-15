import React from 'react';
import './Header.scss';
import CustomButton from '../Custom-button/Custom-button';


const Header = (props) => {

  return (
    <div className="header-container">
      <div className="headline">
        <h1>Be <span>glam</span> with Airy Dreams.</h1>
        <h3>shop now these styles</h3>
        <CustomButton type="submit">Shop now</CustomButton>
      </div>
    </div>
  );
}

export default Header;