import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './Cart.scss';

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <p className="item-count">0</p>
  </div>
)

export default CartIcon;