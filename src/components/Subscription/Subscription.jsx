import React from 'react';

import './Subscription.scss';
import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-button/Custom-button';


class Subscription extends React.Component {

  constructor() {
    super();

    this.state = {
      email: ''
    }
  }


  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }



  render() {
    return (
      <div className="sub-container">
        <div className="inner-wrapper sub-box">
          <div className="item contents">
            <h3>Subscribe</h3>
            <p>Love what we have here? Wanna keep up to date? Subscribe today!</p>
          </div>
          <form className="item subs-email">
            <FormInput
              label="email"
              type="email"
              name="email"
              value={this.state.email}
              handleChange={this.handleChange}
            />
            <CustomButton type="submit">Subscribe</CustomButton>
          </form>
        </div>
      </div>
    )
  }
}

export default Subscription;