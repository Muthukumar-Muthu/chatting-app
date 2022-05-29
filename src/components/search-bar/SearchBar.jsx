import "./style.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search or start new chat"
        spellCheck="false"
      />
    </div>
  );
};
export default SearchBar;
