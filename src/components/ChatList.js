import React, { useContext } from "react";
import "../styles/components/chatlist.css";
import Avatars from "./Avatars";
import profile from "../assets/profile.jpg";
import { chatContext } from "../App";

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
      notify: "2",
      notclass: "notify",
      green: "green",
      black: "black",
    },
    {
      avatar: <Avatars image={profile} awidth={50} aheight={50} />,
      userName: "Jill Pope",
      message: "Hello there, how are you?",
      time: "Tuesday",
      notify: "1",
      notclass: "notify",
      green: "green",
      black: "black",
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
  const { isChatOpen, setIsChatOpen } = useContext(chatContext);
  return (
    <div className="chatlist-main">
      <div className="chatlist-main">
        {chatLists.map((chatlist, index) => (
          <div
            className="chatlist-container"
            key={index}
            onClick={() => {
              setIsChatOpen(true);
              console.log("chat is open", isChatOpen);
            }}
          >
            <div className="chat-list">
              <div className="chatlist-avatar">{chatlist.avatar}</div>
              <div className="c-underline">
                <div className="c-text">
                  <p className={`name ${chatlist.black}`}>
                    {chatlist.userName}
                  </p>
                  <p className="message">{chatlist.message}</p>
                </div>
                <div className={`c-time ${chatlist.green}`}>
                  <p>{chatlist.time}</p>
                  <p className={chatlist.notclass}>{chatlist.notify}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
