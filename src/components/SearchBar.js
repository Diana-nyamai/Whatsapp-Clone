import React from "react";
import "../styles/components/searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="input-b">
        <input type="text" placeholder="Search or start a new chat" />
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
