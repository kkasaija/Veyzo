import { useState } from 'react';
import CartContext from './CartContext.js';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (!existingItem) {
        return [...prevCart, { product, quantity: 1 }];
      }

      return prevCart.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.product.price);

  const value = {
    cart,
    totalItems,
    totalPrice,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
