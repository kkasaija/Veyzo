import { useSelector } from 'react-redux';
import productSelector from '../features/products/productSelectors';

function useProduct(id) {
  const product = useSelector(productSelector.product(id));
  const loading = useSelector(productSelector.loading);
  const error = useSelector(productSelector.error);
  return { product, loading, error };
}

export default useProduct;
