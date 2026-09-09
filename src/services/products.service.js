const baseUrl = 'https://dummyjson.com';

const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) throw new Error('Product fetch failed');
  return response.json();
};

export { getProducts };
