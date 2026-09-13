import { useMemo } from 'react';

const useProductFilters = (products, filters) => {
  const { search, sort, category } = filters;

  return useMemo(() => {
    const query = search?.trim().toLowerCase() || '';
    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        !query ||
        product.title?.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query);

      const matchesCategory = !category || category === product.category;
      return matchesCategory && matchesSearch;
    });

    const sortedProducts = [...filteredProducts];
    switch (sort) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;

      case 'title':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }
    return sortedProducts;
  }, [products, search, sort, category]);
};

export default useProductFilters;
