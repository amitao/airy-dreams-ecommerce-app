import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.scss';
import CustomButton from '../Custom-button/Custom-button';


const Header = () => {
  // hook react-router
  let history = useHistory();

  return (
    <div className="header-container">
      <div className="headline">
        <h1>Be <span>glam</span> with Airy Dreams.</h1>
        <h3>shop now these styles</h3>
        <CustomButton type="submit" onClick={() => history.push("/shop")}>Shop now</CustomButton>
      </div>
    </div>
  );
}

export default Header;