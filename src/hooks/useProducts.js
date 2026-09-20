import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import productSelector from '../features/products/productSelectors';

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector.products);
  const loading = useSelector(productSelector.loading);
  const error = useSelector(productSelector.error);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [dispatch, products.length]);

  return {
    products,
    loading,
    error,
  };
};

export default useProducts;
