const cartSelector = {
  totalItems: (state) => state.cart.items.reduce((total, { quantity }) => total + quantity, 0),

  totalPrice: (state) =>
    state.cart.items.reduce((total, { quantity, product }) => total + product.price * quantity, 0),

  cartItems: (state) => state.cart.items,
};

export default cartSelector;
