import { useState, useEffect } from 'react';
import { productService } from '../services';

function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError(null);
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (error) {
        setError(error.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  return { product, error, loading };
}

export default useProduct;
