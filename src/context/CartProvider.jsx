import { useEffect, useState } from 'react';
import CartContext from './CartContext.js';
import {
  STORAGE_KEYS,
  getStorageItem,
  setStorageItem,
  removeStoredItem,
} from '../utils/storage.js';

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => getStorageItem(STORAGE_KEYS.cart, []));
  useEffect(() => setStorageItem(STORAGE_KEYS.cart, cart));

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productId);
      if (!existingItem) return prevCart;
      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return prevCart.filter((item) => item.product.id !== productId);
    });
  }

  function removeItem(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  }

  function clearCart() {
    removeItem();
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.product.price, 0);

  const value = {
    cart,
    totalItems,
    totalPrice,
    removeFromCart,
    removeItem,
    addToCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
