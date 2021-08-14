const Search = ({ countryName, handleChange }) => {
  return (
    <div>
      search: <input value={countryName} onChange={handleChange} />
    </div>
  );
};

export default Search;
