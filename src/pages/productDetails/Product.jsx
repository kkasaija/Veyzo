import { Link, useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Loader from '../../components/loader';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

import './productDetails.scss';

const Product = () => {
  const { id } = useParams();
  const { product, error, loading } = useProduct(Number(id));

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main className="product-details">
      <Link to="/">← Back to Products</Link>

      <div className="product-details__content">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
    </main>
  );
};

export default Product;
