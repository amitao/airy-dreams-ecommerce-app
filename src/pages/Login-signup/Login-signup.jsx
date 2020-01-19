import React from 'react';
import LoginOut from './Login-out-state';
import SignUp from '../Sign-up/Sign-up';

import './Login.scss';


const Login = () => {
  return (
    <div className="login-container">
      <LoginOut />
      <SignUp />
    </div>
  )
}

  export default Login;