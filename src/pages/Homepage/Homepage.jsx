import React, { Component } from 'react';
import './Homepage.scss';


import Button from '../../components/Button/Button';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Nav/Nav';


class Homepage extends Component {

    constructor() {
      super();
      this.state = {
        title: "",
      }

    }

  // submit btn function
  handleSubmit = (e) => {
    console.log('btn has been clicked');
  }

  render() {
    return (
      <div className="container">
        <Header navbar={<Navbar />} 
          button={<Button type="shop" handleSubmit={this.handleSubmit} title="shop now" />}
        />
        

        <div className="inner-wrapper">
          <Menu />
          <div className="menu-title">This is the title</div>
          <Button type="add-to-cart" handleSubmit={this.handleSubmit} title="add to cart" />
        </div>

      </div> // end of container

    );
  }
}

export default Homepage;
