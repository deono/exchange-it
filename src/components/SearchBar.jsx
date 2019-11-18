import React from "react";

const SearchBar = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <select className="custom-select my-1 mr-sm-2">
        <option defaultValue>Categories...</option>
        <option value="1">Sports</option>
        <option value="2">Clothing</option>
        <option value="3">Music</option>
        <option value="4">Sound</option>
      </select>
      <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
