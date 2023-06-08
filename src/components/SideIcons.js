import React from "react";
import "../styles/components/sideicons.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";

function SideIcons() {
  return (
    <div className="sideicons">
      <AiOutlineUsergroupAdd value={{ className: "icon" }} />
      <AiFillMessage value={{ className: "icon" }} />
      <AiOutlineMore value={{ className: "icon" }} />
    </div>
  );
}

export default SideIcons;
