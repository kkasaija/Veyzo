import api from './api/axios';

const getProducts = async () => {
  const { data } = await api.get('/products');
  return data.products;
};

export default getProducts;
