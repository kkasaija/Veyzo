const productSelector = {
  products: (state) => state.products.list,
  loading: (state) => state.products.loading,
  error: (state) => state.products.error,
  product: (id) => (state) => state.products.list.find((product) => product.id === Number(id)),
};

export default productSelector;
