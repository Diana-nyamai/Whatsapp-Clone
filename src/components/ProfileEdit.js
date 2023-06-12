import React, { useState } from "react";
import "../styles/components/profileedit.css";
import { BiArrowBack } from "react-icons/bi";

function ProfileEdit({ onClose }) {
    const [isHidden, setIsHidden] = useState(false)

    const handleCloseButton = () =>{
        setIsHidden(true);
        onClose()
    }
  return (
    <div className={`profileEdit ${isHidden ? "hidden" : ""}`}>
      <div className="topTitle">
        <BiArrowBack className="closeButton" onClick={handleCloseButton} />
        <p>Profile</p>
      </div>
    </div>
  );
}

export default ProfileEdit;
