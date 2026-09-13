import './sort.scss';

const Sort = ({ value, onChange }) => {
  return (
    <div className="sort">
      <label htmlFor="sort">sort by</label>
      <select
        id="sort"
        name="sort"
        value={value}
        onChange={onChange}
        className="sort__select"
      >
        <option value="">default</option>
        <option value="price-asc">price: low → high</option>
        <option value="price-desc">price: high → low</option>
        <option value="rating">highest rated</option>
        <option value="title">nam: (A-Z)</option>
      </select>
    </div>
  );
};

export default Sort;
