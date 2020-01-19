import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../../pages/Homepage/Homepage';
import Shoppage from '../../pages/Shop/Shoppage';
import Navbar from '../../components/Nav/Nav';
import LoginOut from '../../pages/Login-out/Login-out-state';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Footer from '../../components/Footer/Footer';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot => {
          //create new object data
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        });
         console.log(this.state);
      } else {
        this.setState({currentUser: userAuth}) // if null
      }
      
    })
  }

  // close the subsrciption
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render () {
    return (
      <div className="app-container">
  
          <Navbar currentUser={this.state.currentUser}/>
  
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shoppage} />
            <Route path="/log-in" component={LoginOut} />
          </Switch>
  
          <Footer />
      </div>
    );
  }
}

export default App;
