import Search from '../search';
import Sort from '../sort';
import './filter_bar.scss';

const FilterBar = ({ filters, onChange, children }) => {
  return (
    <section className="filter-bar">
      <Search
        value={filters.search}
        onChange={onChange}
      />

      {children}

      <Sort
        value={filters.sort}
        onChange={onChange}
      />
    </section>
  );
};

export default FilterBar;
