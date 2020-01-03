import React from 'react';

import './Form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <input
        className="form-input"
        onChange={this.handleChange}
        {...otherProps} />
        { label ? <label className={`${otherProps.value.length ? 'shrink' : '' } form-label`}> </label> : null }
    </div>
  )
}