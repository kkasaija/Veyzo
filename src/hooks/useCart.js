import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateQuantity, removeItem, clearCart } from '../features/cart/cartSlice';

import cartSelector from '../features/cart/cartSelector';

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector.cartItems);
  const totalItems = useSelector(cartSelector.totalItems);
  const totalPrice = useSelector(cartSelector.totalPrice);

  return {
    cart,
    totalItems,
    totalPrice,
    addToCart: ({ product, quantity = 1 }) => dispatch(addItem({ product, quantity })),
    removeFromCart: (id) => dispatch(removeItem(id)),
    clearCart: () => dispatch(clearCart()),
    updateQuantity: (payload) => dispatch(updateQuantity(payload)),
  };
};

export default useCart;
