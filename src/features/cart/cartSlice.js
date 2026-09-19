import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) existingItem.quantity++;
      else state.items.push({ product, quantity: 1 });
    },

    decrementItem(state, action) {
      const productId = action.payload;
      const item = state.items.find((item) => item.product.id === productId);
      if (!item) return;
      if (item.quantity > 1) item.quantity--;
      else state.items = state.items.filter((item) => item.product.id !== productId);
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
