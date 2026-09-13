import Search from '../search';
import Sort from '../sort';
import './filter_bar.scss';

const FilterBar = ({ search, sort, onSearchChange, onSortChange, children }) => {
  return (
    <section className="filter-bar">
      <Search
        value={search}
        onChange={onSearchChange}
      />

      {children}

      <Sort
        value={sort}
        onChange={onSortChange}
      />
    </section>
  );
};

export default FilterBar;
