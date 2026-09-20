const productSelector = {
  products: (state) => state.products.list,
  loading: (state) => state.products.loading,
  error: (state) => state.products.error,
};

export default productSelector;
