import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from '../../pages/Homepage/Homepage';
import Shoppage from '../../pages/Shop/Shoppage';
import Navbar from '../../components/Nav/Nav';
import LoginOut from '../../pages/Login-signup/Login-signup';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Footer from '../../components/Footer/Footer';
import { setCurrentUser } from '../../redux/user/user.actions';


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          //create new object data
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth) // set to null user logs out
    });
  }

  // close the subsrciption
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div className="app-container">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route 
            exact 
            path="/log-in" 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
                ) : (
                  <LoginOut />
                )
              } 
              />
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
