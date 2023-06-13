import React from "react";
import "../styles/components/chat.css";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

function Chat() {
  return (
    <div className="chatContent">
      <ChatHeader/>
      <ChatBody/>
    </div>
  );
}

export default Chat;
