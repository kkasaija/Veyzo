import { productsAdapter } from './productSlice';

const adapterSelectors = productsAdapter.getSelectors((state) => state.products);
const productSelector = {
  products: adapterSelectors.selectAll,
  productById: (id) => (state) => adapterSelectors.selectById(state, Number(id)),
  productIds: adapterSelectors.selectIds,
  productEntities: adapterSelectors.selectEntities,
  totalProducts: adapterSelectors.selectTotal,
  loading: (state) => state.products.loading,
  error: (state) => state.products.error,
};

export default productSelector;
