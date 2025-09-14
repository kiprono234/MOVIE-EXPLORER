import React from "react";
const SearchBar = ({ search, setSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);
export default SearchBar;