import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import useProduct from '../../hooks/useProduct';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import './product_details.scss';

function Product() {
  const { id } = useParams();

  const { product, loading, error } = useProduct(Number(id));

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main className="product-details">
      <Link
        to="/"
        className="product-details__back"
      >
        ← Back to Products
      </Link>
      <section className="product-details__content">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </section>
      <RelatedProducts product={product} />
    </main>
  );
}

export default Product;
