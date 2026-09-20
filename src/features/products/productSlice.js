import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../../services/products.service';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

//create a product fetch thunk
const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => await productService.getProducts()
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; //clear the error from previous values
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
