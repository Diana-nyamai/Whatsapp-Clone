import React from "react";
import "../styles/components/chatheader.css";
import Avatars from "./Avatars";
import profile from "../assets/profile.jpg";
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";

function ChatHeader() {
  return (
    <>
      <div className="chatHeader">
        <div className="chatProfile">
          <Avatars image={profile} awidth={40} aheight={40} />
          <div className="chatInfo">
            <p>John Doe</p>
            <p className="chatStatus">Online</p>
          </div>
        </div>
        <div className="chatIcons">
          <AiOutlineSearch className="chatSearch" title="search" />
          <AiOutlineMore title="menu" />
        </div>
      </div>
    </>
  );
}

export default ChatHeader;
