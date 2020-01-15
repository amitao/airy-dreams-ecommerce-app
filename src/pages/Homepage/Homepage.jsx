import React, { Component } from 'react';
import './Homepage.scss';

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

  render() {
    return (
      <React.Fragment>
        <Header />
          <Menu />
          <Banner />
          <Subscription />
      </React.Fragment> 
    );
  }
}

export default Homepage;
