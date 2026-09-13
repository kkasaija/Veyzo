import './search.scss';
const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search products...."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
