import React from 'react';
import FormInput from '../../components/Form-input/Form-input';
import CustomButton from '../../components/Custom-button/Custom-button';

import './Login.scss';
import { auth, loginWithGoogle } from '../../firebase/firebase.utils';


class LoginOut extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit =async (e) => {
    e.preventDefault();

    const { email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''}); // clear state after exceed
    } catch(err){
      console.log(err);
    }

    this.setState({ email: '', password: '' })

  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="log-in-out-container">
        <h3>I have an account.</h3>
        <h3>Sign in with yout email and password</h3>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <FormInput
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
            label="email"
            />

          <label>Password</label>
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            required  
            label="password"
            />
          <CustomButton type="submit"> Log in </CustomButton>
          <CustomButton onClick={loginWithGoogle} isGoogleSignIn> Login with google</CustomButton>
        </form>
      </div>
    )
  }
}

export default LoginOut;