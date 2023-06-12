import React from "react";
import "../styles/components/avatars.css";

function Avatars({ image, awidth, aheight, onClick }) {
  return (
    <>
      <div
        style={{ width: `${awidth}px`, height: `${aheight}` }}
        className="avatar" onClick={onClick}
      >
        <img style={{ width: `${awidth}px` }} src={image} alt="profile" />
      </div>
    </>
  );
}

export default Avatars;
