//anything that communicates with backend, becomes a service
import api from './api/axios';

const getCategories = async () => {
  const { data } = await api.get('/products/categoies');
  return data;
};

export default { getCategories };
