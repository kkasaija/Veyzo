import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) existingItem.quantity += quantity;
      else state.items.push({ product, quantity });
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity < 1) return;
      const item = state.items.find((item) => item.product.id === id);
      if (item) item.quantity = quantity;
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
