import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Loader from '../../components/loader';

import './productDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, error, loading } = useProduct(Number(id));
  if (loading) return <Loader />;
  if(error)throw new Error('product loading failed')
  console.log(product);
  console.log(id);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
