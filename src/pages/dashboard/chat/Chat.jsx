import React from "react";

import "./chat.css";

import SidebarChat from "./sidebar-chat/SidebarChat";
import MainChat from "./main-chat/MainChat";

const Chat = () => {
  return (
    <div className="chat-wrapper">
      <div className="chat container">
        <SidebarChat />
        <MainChat />
      </div>
    </div>
  );
};

export default Chat;
