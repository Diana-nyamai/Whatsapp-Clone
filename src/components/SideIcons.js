import React, { useEffect, useRef, useState } from "react";
import "../styles/components/sideicons.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import Menus from "./Menus";

function SideIcons() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = () => setisMenuVisible((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setisMenuVisible(false);
      }
    };
      document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="sideicons">
      <AiOutlineUsergroupAdd title="communities" />
      <AiFillMessage title="start chat" />
      <AiOutlineMore title="menu" onClick={handleMenu} />
      {isMenuVisible ? <Menus forwardedRef={menuRef} /> : null}
    </div>
  );
}

export default SideIcons;
