const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search monsters"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
