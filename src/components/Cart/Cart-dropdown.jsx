import React from 'react';

import CustomButton from '../Custom-button/Custom-button';

import './Cart.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>go to checkout</CustomButton>
    </div>
  </div>
)

export default CartDropdown;