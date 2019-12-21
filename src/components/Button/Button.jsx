import React from 'react';
import './Button.scss';


const Button = (props) => {
  const className = `btn ${props.type}`

  return (
    <button className={className} onClick={props.handleSubmit}>Add to cart</button>
  );
}


Button.defaultProps = {
  type: "submit"
 };

export default Button;