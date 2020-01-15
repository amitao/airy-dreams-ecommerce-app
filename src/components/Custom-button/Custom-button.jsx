import React from 'react';

import './Custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div >
      <button 
      className={`${ isGoogleSignIn ? 'google-signin' : '' } custom-button`}
        {...otherProps}>
        {children}
      </button>
    </div>
  )

}

export default CustomButton;