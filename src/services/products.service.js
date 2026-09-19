import api from './api/axios';

const getProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export default { getProducts, getProductById };
