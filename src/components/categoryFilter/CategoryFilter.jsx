import './category_filter.scss';

const CategoryFilter = ({ categories, value, onChange }) => {
  return (
    <div className="category-filter">
      <label htmlFor="category">Category</label>

      <select
        id="category"
        value={value}
        name='category'
        onChange={onChange}
        className="category-filter__select"
      >
        <option value="">All Categories</option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
