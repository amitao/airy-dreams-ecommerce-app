import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../../pages/Homepage/Homepage';
import Shoppage from '../../pages/Shop/Shoppage';
import Navbar from '../../components/Nav/Nav';
import LoginOut from '../../pages/Login-out/Login-out-state';


function App() {
  return (
    <div className="app-container">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/log-in" component={LoginOut} />
        </Switch>

    </div>
  );
}

export default App;
