import ProductCard from '../../components/product';
import Loader from '../../components/loader';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import Search from '../../components/search/Search';
import { useState } from 'react';
import Hero from '../../components/hero';
import './home.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const { error, loading, products } = useProducts();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  //search
  const query = search.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.title?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    );
  });

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

        {filteredProducts.length === 0 ? (
          <p className="featured-products__notfound">No products found</p>
        ) : (
          <div className="featured-products__grid">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="featured-products__card link"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
