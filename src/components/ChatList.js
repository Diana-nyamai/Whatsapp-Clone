import React from "react";
import "../styles/components/chatlist.css";
import Avatars from "./Avatars";
import profile from "../assets/profile.jpg";
// import p2 from "../assets/p2.jpg";
// import p3 from "../assets/p3.jpg";
// import p4 from "../assets/p4.jpg";
// import p5 from "../assets/p5.jpg";
// import p6 from "../assets/p6.jpg";

function ChatList() {
  const chatLists = [
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "john doe",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "John Duncan",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "Chloe Thompson",
      message: "Bye.",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "Joey Jones",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "Abraham Stewart",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={55} aheight={55} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
  ];
  return (
    <div>
      {chatLists.map((chatlist) => (
        <div className="chatlist-container">
          <div className="chat-list">
            <div className="chatlist-avatar">{chatlist.avatar}</div>
            {/* <div className="underline"> */}
              <div className="c-text">
                <p className="name">{chatlist.userName}</p>
                <p className="message">{chatlist.message}</p>
              </div>
              <div className="c-time">{chatlist.time}</div>
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
