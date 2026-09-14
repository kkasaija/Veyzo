import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';

import useProductFilters from '../../hooks/useProductFilters';
import useProducts from '../../hooks/useProducts';
import usePagination from '../../hooks/usePagination';

import ProductCard from '../../components/product';
import Loader from '../../components/loader';

import FilterBar from '../../components/filterBar';
import Hero from '../../components/hero';
import CategoryFilter from '../../components/categoryFilter';
import Pagination from '../../components/pagination';

import './home.scss';

const Home = () => {
  const [filters, setFilters] = useState({ search: '', sort: '', category: '' });
  const { error, loading, products } = useProducts();
  const categories = useCategories(products);
  //search
  const filteredProducts = useProductFilters(products, filters);
  const {
    currentPage,
    visiblePages,
    hasPreviousPage,
    hasNextPage,
    paginatedItems,
    setCurrentPage,
  } = usePagination(filteredProducts);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.search, filters.category, filters.sort]);

  function handleFilterChange(e) {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <main className="home">
      <Hero />
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-products__controls">
          <FilterBar
            filters={filters}
            onChange={handleFilterChange}
          >
            <CategoryFilter
              categories={categories}
              value={filters.category}
              onChange={handleFilterChange}
            />
          </FilterBar>
        </div>

        {paginatedItems.length === 0 ? (
          <p className="featured-products__notfound">No products found</p>
        ) : (
          <div className="featured-products__grid">
            {paginatedItems.map((product) => (
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
        <Pagination
          currentPage={currentPage}
          visiblePages={visiblePages}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  );
};

export default Home;
