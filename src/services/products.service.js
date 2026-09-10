const baseUrl = 'https://dummyjson.com';

const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) throw new Error('Products fetch failed');
  return response.json();
};

const getProduct = async (id) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  if (!response.ok) throw new Error('Product fetch failed');
  return response.json();
};

export { getProducts, getProduct };
