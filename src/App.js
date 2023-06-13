import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import DefaultContent from "./components/DefaultContent";
import SideNav from "./components/SideNav";

export const chatContext = React.createContext({
  isChatOpen: false,
  setIsChatOpen: () => {},
});

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="App"> 
      <chatContext.Provider value={{isChatOpen, setIsChatOpen}}>
      <SideNav />
      <DefaultContent />
      {isChatOpen && <Chat />}
      </chatContext.Provider>
    </div>
  );
}
export default App;
