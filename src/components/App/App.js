import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../../pages/Homepage/Homepage';
import Shoppage from '../../pages/Shop/Shoppage';
import Navbar from '../../components/Nav/Nav';
import LoginOut from '../../pages/Login-out/Login-out-state';
import { auth } from '../../firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }



  render () {
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
}

export default App;
