import { useMemo } from 'react';

const useProductFilters = (products, search) => {
  return useMemo(() => {
    const query = search?.trim().toLowerCase();

    return products.filter(
      (product) =>
        product.title?.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
    );
  }, [products, search]);
};

export default useProductFilters;
