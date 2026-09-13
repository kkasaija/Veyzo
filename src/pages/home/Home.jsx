import { useState } from 'react';
import { Link } from 'react-router-dom';

import useProductFilters from '../../hooks/useProductFilters';
import useProducts from '../../hooks/useProducts';

import ProductCard from '../../components/product';
import Loader from '../../components/loader';

import FilterBar from '../../components/filterBar';
import Hero from '../../components/hero';

import './home.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const { error, loading, products } = useProducts();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSort(e) {
    setSort(e.target.value);
  }

  //search
  const filteredProducts = useProductFilters(products, { search, sort });

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <main className="home">
      <Hero />
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-products__controls">
          <FilterBar
            search={search}
            sort={sort}
            onSearchChange={handleSearch}
            onSortChange={handleSort}
          />
        </div>

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
