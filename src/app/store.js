import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';
import { saveCart } from '../utils/storage';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

store.subscribe(() => {
  saveCart(store.getState().cart.items);
});

export default store;
