import React, { Component } from 'react';
import './Homepage.scss';


import Button from '../../components/Button/Button';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Subscription from '../../components/Subscription/Subscription';


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
      <React.Fragment>
        <Header 
          button={<Button type="shop" handleSubmit={this.handleSubmit} title="shop now" />}
        />
          <Menu />
          <Banner />
          <Subscription />
      </React.Fragment> 
    );
  }
}

export default Homepage;
