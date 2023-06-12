import React, { useState } from "react";
import "../styles/components/topnav.css";
import Avatars from "./Avatars";
import SideIcons from "./SideIcons";
import profile from "../assets/profile.jpg";
import ProfileEdit from "./ProfileEdit";

function TopNav() {
  const [isprofileVisible, setisprofileVisible] = useState(false);

  const handleopenProfileSetting = () => {
    setisprofileVisible(true);
    console.log("button clicked!");
  };
  return (
    <>
      <div className="topnav">
        <Avatars
          image={profile}
          awidth={40}
          aheight={40}
          onClick={handleopenProfileSetting}
        />

        <SideIcons />
      </div>
      {isprofileVisible && (
        <ProfileEdit onClose={() => setisprofileVisible(false)} />
      )}
    </>
  );
}

export default TopNav;
