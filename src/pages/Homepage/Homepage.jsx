import React, { Component } from 'react';
import './Homepage.scss';


import Button from '../../components/Button/Button';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';



class Homepage extends Component {

  // submit btn function
  handleSubmit = (e) => {
    console.log('btn has been clicked');
  }

  render() {
    return (

      <div className="menu-container">
        <Nav />
        <Menu />
        <div className="menu-title">This is the title</div>
        
        <Button type="add-to-cart" handleSubmit={this.handleSubmit} />
      </div> // end of menu-container

    );
  }
}

export default Homepage;
