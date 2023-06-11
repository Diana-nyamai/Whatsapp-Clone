import React from "react";
import "../styles/components/menu.css";

const Menus = React.forwardRef((props, ref) => {
  return (
    <div className="menu" ref={ref}>
      <p>New group</p>
      <p>New community</p>
      <p>Archived</p>
      <p>Starred messages</p>
      <p>Select chats</p>
      <p>Settings</p>
      <p>Logout</p>
    </div>
  );
});

export default Menus;
