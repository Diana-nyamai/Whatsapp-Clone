import React, { useState } from "react";
import "../styles/components/searchbar.css";
import { AiOutlineSearch, AiOutlineArrowLeft} from "react-icons/ai";
import {BsFilter} from 'react-icons/bs'

function SearchBar() {
  const [isArrowVisible, setisArrowVisible] = useState(false)

  const  handleArrowChange = () => setisArrowVisible(true)
  const handleArrowClick = () => setisArrowVisible(false)
  return (
    <div className="searchbar">
      <div className="input-b">
        <input title ="search input textbox" onClick={handleArrowChange} type="text" placeholder="Search or start a new chat" />
        <div className="search-icon" onClick={handleArrowClick}>
          {isArrowVisible? <AiOutlineArrowLeft/> : <AiOutlineSearch/>}
        </div>
      </div>
      <div className="filter"><BsFilter title="unread chat filter"/></div>
      
    </div>
  );
}

export default SearchBar;
