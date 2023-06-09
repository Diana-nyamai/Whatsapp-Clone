import React, { useState } from "react";
import "../styles/components/searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineArrowLeft} from 'react-icons/ai'

function SearchBar() {
  const [isArrowVisible, setisArrowVisible] = useState(false)

  const  handleArrowChange = () => setisArrowVisible(true)
  const handleArrowClick = () => setisArrowVisible(false)
  return (
    <div className="searchbar">
      <div className="input-b">
        <input onClick={handleArrowChange} type="text" placeholder="Search or start a new chat" />
        <div className="search-icon" onClick={handleArrowClick}>
          {isArrowVisible? <AiOutlineArrowLeft/> : <AiOutlineSearch/>}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
