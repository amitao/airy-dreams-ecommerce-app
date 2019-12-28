import React, { Component } from 'react';
import './Homepage.scss';


import Button from '../../components/Button/Button';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';


class Homepage extends Component {

  // submit btn function
  handleSubmit = (e) => {
    console.log('btn has been clicked');
  }

  render() {
    return (
      <div className="container">

        <Nav />
        <Header />
        
        <div className="inner-wrapper">
          <Menu />
          <div className="menu-title">This is the title</div>
          <Button type="add-to-cart" handleSubmit={this.handleSubmit} />
        </div>

      </div> // end of container

    );
  }
}

export default Homepage;
