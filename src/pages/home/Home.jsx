import './home.scss';
import ProductCard from '../../components/product';
import Loader from '../../components/loader';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Home = () => {
  const { error, loading, products } = useProducts();
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Discover Amazing Products</h1>
          <p className="hero__description">
            Shop the latest products from trusted brands at great prices.
          </p>
          <div className="hero__actions">
            <button className="button">Shop Now</button>
            <button className="button button--secondary">Explore Categories</button>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="featured-products__grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="featured-products__card link"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
