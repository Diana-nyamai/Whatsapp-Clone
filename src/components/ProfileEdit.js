import React, { useState } from "react";
import "../styles/components/profileedit.css";
import { BiArrowBack } from "react-icons/bi";
import Avatars from "./Avatars";
import profile from "../assets/profile.jpg";
import { BiEditAlt } from "react-icons/bi";

function ProfileEdit({ onClose }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleCloseButton = () => {
    setIsHidden(true);
    onClose();
  };
  return (
    <div className={`profileEdit ${isHidden ? "hidden" : ""}`}>
      <div className="topTitle">
        <BiArrowBack className="closeButton" onClick={handleCloseButton} />
        <p>Profile</p>
      </div>
      <div className="profileDisplay">
        <Avatars image={profile} awidth={200} aheight={200} />
      </div>

      <div className="nameEdit">
        <p>Your name</p>
        <div className="editName">
          <p>Phyllis Nyamai</p>
          <BiEditAlt className="iconEdit" title="edit name"/>
        </div>
      </div>

      <div className="instructions">
        <p>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
      </div>

      <div className="nameEdit">
        <p>About</p>
        <div className="editName">
          <p>Busy</p>
          <BiEditAlt className="iconEdit" title="edit about"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
