import React from 'react';
import FormInput from '../../components/Form-input/Form-input';
import CustomButton from '../../components/Custom-button/Custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './Sign-up.scss';


class SignUp extends React.Component {

  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // check if password don't match
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value});
  }



  render() {

    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <p>Sign up with your email and password</p>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label='Display name'
            required
          />
      
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
        
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
     
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
         / >
       
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    )
  }
}




export default SignUp;