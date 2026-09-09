import { useState, useEffect } from 'react';
import { getProducts } from '../services/products.service';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
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

export { useProducts };
