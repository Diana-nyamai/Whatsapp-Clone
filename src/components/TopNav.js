import React from "react";
import "../styles/components/topnav.css";
import Avatars from "./Avatars";
import SideIcons from "./SideIcons";
import profile from "../assets/profile.jpg";

function TopNav() {
  return (
    <>
      <div className="topnav">
        <Avatars image={profile} awidth={40} aheight={40} />
        <SideIcons />
      </div>
    </>
  );
}

export default TopNav;
