import React from 'react';

import './Form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-container">
      <input
        className="form-input"
        onChange={handleChange} {...otherProps} />
        { label ? <label className={`${otherProps.value.length ? 'shrink' : '' } form-label`}> </label> : null }
    </div>
  )
}

export default FormInput;