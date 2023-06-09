import React from "react";
import "../styles/components/avatars.css";

function Avatars({ image, awidth, aheight }) {
  return (
    <>
      <div
        style={{ width: `${awidth}px`, height: `${aheight}` }}
        className="avatar"
      >
        <img style={{ width: `${awidth}px` }} src={image} alt="profile" />
      </div>
    </>
  );
}

export default Avatars;
