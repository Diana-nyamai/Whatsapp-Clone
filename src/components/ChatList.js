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
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "john doe",
      message: "Hello there, how are you?",
      time: "7:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "John Duncan",
      message: "hey?",
      time: "6:30 PM",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Chloe Thompson",
      message: "Bye.",
      time: "Yesterday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Joey Jones",
      message: "can i?",
      time: "Yesterday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Abraham Stewart",
      message: "Hello there, how are you?",
      time: "Tuesday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "Tuesday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "Tuesday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "Wednesday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "Wednesday",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "6/2/2023",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "6/2/2023",
    },
  ];
  return (
    <div className="chatlist-main">
      <div className="chatlist-main">
      {chatLists.map((chatlist) => (
        <div className="chatlist-container">
          <div className="chat-list">
            <div className="chatlist-avatar">{chatlist.avatar}</div>
            <div className="c-underline">
              <div className="c-text">
                <p className="name">{chatlist.userName}</p>
                <p className="message">{chatlist.message}</p>
              </div>
              <div className="c-time">{chatlist.time}</div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ChatList;
