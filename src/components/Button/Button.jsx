import React from 'react';

const Button = (props) => {
  const className = `btn ${props.type}`

  return (
    <button className={className} onClick={props.handleSubmit}>Add to cart</button>
  );
}


export default Button;