import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import productService from '../../services/products.service.js';

//This tells Redux Toolkit, every product is identified by id and, keep products sorted alphabetically by title
export const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = productsAdapter.getInitialState({
  loading: false,
  error: null,
});

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
  try {
    return await productService();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

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
        productsAdapter.setAll(state, action.payload); //automatically populates:id[] and entities{}
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default productSlice.reducer;

/* Entity Adapter Selectors */
export const productSelectors = productsAdapter.getSelectors((state) => state.products);
export const {
  selectAll: selectProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectTotal: selectTotalProducts,
} = productSelectors;

export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
