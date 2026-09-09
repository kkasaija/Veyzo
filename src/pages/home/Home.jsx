import { useState, useEffect } from 'react';
import './home.scss';
import ProductCard from '../../components/product';
import Loader from '../../components/loader';
import { getProducts } from '../../services/products.service';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

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
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
