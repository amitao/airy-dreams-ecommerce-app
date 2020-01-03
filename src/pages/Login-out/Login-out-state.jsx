import React from 'react';
import FormInput from '../../components/Form-input/Form-input';

import './Login.scss';


class LoginOut extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
            value={this.state.email} 
            handleChange={this.handleChange}
            required  
            label="password"
            />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LoginOut;