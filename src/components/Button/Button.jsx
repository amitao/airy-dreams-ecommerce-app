import React from 'react';
import './Button.scss';


const Button = (props) => {
  const className = `btn ${props.type}`;

  return (
    <button className={className} onClick={props.handleSubmit}>{props.title}</button>
  );
}


Button.defaultProps = {
  type: "shop"
 };

export default Button;