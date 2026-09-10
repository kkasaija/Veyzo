import { useState, useEffect } from 'react';
import { getProduct } from '../services/products.service';

function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  return { product, error, loading };
}

export default useProduct;
