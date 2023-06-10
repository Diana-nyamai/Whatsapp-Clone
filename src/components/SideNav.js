import React from "react";
import "../styles/components/sidenav.css";
import TopNav from "./TopNav";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

function SideNav() {
  return (
    <d>
      <div className="sidepane">
        <TopNav />
        <SearchBar />
        <ChatList/>
      </div>
    </d>
  );
}

export default SideNav;
