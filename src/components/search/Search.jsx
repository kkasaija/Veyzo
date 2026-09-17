import './search.scss';
const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        name="search"
        type="search"
        value={value}
        onChange={onChange}
        className="search__input"
        placeholder="Search products...."
      />
    </div>
  );
};

export default Search;
