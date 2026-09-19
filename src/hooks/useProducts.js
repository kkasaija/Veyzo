import { useState, useEffect } from 'react';
import { productService } from '../services';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await productService.getProducts();
        if (!Array.isArray(data?.products)) {
          throw new Error('Invalid products response');
        }

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return { products, error, loading };
}

export default useProducts;
