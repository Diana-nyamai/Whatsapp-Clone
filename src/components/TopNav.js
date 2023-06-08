import React from "react";
import "../styles/components/topnav.css";
import Avatars from "./Avatars";
import SideIcons from "./SideIcons";

function TopNav() {
  return (
    <>
      <div className="topnav">
        <Avatars />
        <SideIcons />
      </div>
    </>
  );
}

export default TopNav;
