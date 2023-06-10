import React from "react";
import "../styles/components/sideicons.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";


function SideIcons() {
  return (
    <div className="sideicons">
      <AiOutlineUsergroupAdd title="communities"/>
      <AiFillMessage title="start chat"/>
      <AiOutlineMore title="menu"/>
      {/* <Menu/> */}
    </div>
  );
}

export default SideIcons;
