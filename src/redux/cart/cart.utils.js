export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id 
  );

  // returns a new array
    if (existingCartItem) {
      return cartItems.map(cartItem => {
        cartItem.id === cartItemsToAdd.id ? { ...cart, quantity: cartItem.quantity + 1} : cartItem
      })
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
}