import { useMemo } from 'react';

function useCategories(products) {
  return useMemo(
    () => Array.from(new Set(products.map((product) => product.category.toLowerCase()))).sort(),
    [products]
  );
}

export default useCategories;
