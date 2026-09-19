import api from './api/axios';

const getProducts = async () => {
  const { data } = await api.get('/products');
  return data.products;
};

const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export default { getProducts, getProductById };
