import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Homepage from '../../pages/Homepage/Homepage';
import Shoppage from '../../pages/Shop/Shoppage';
import Navbar from '../../components/Nav/Nav';

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shoppage} />
    </div>
  );
}

export default App;
