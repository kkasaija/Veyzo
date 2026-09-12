import './home.scss';
import ProductCard from '../../components/product';
import Loader from '../../components/loader';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import Search from '../../components/search/Search';
import { useState } from 'react';
import Hero from '../../components/hero';

const Home = () => {
  const [search, setSearch] = useState('');
  const { error, loading, products } = useProducts();

  function handleSearch({ target }) {
    setSearch(target.value);
  }
  
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <main className="home">
      <Hero />
      <section className="featured-products">
        <h2>Featured Products</h2>
        <Search
          value={search}
          onChange={handleSearch}
        />

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
