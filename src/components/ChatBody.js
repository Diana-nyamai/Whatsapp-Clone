import React from "react";
import "../styles/components/chatbody.css";

function ChatBody() {
  const chatThreads = [
    {
      chatPosition: "left",
      chatPosition2: "left2",
      message: "Heey",
      chatTime: "06:15 pm",
    },
    {
      chatPosition: "left",
      chatPosition2: "left2",
      message: "How are you?",
      chatTime: "06:15 pm",
    },
    {
      chatPosition: "right",
      chatPosition2: "right2",
      message: "Hey John, how have you been? Long time no see!",
      chatTime: "06:15 pm",
    },
    {
      chatPosition: "left",
      chatPosition2: "left2",
      message: "There is an important campaign next week which is keeping me busy otherwise rest is going good in my life. How about you?",
      chatTime: "06:15 pm",
    },
    {
      chatPosition: "right",
      chatPosition2: "right2",
      message: "Oh! I just finished a meeting with a very important client of mine and now I finally have some free time. I feel relieved that I’m done with it.",
      chatTime: "06:15 pm",
    },
    {
      chatPosition: "left",
      chatPosition2: "left2",
      message: "Sure, then. Bye, take care.",
      chatTime: "06:15 pm",
    }
  ];
  return (
    <div>
      {chatThreads.map((chatThread) => (
        <div className="chatContainer">
            <div className="chatContainer2">
                 <div className={chatThread.chatPosition}>
                    <div className={chatThread.chatPosition2}>
                        <p>{chatThread.message}</p>
                    <p className="chatTime">{chatThread.chatTime}</p>
                    </div>
                
            </div>
            </div>
           
        </div>
      ))}
    </div>
  );
}

export default ChatBody;
