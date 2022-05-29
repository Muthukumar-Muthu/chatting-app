import { useEffect, useState } from "react";
import "./style.css";
import Chat from "../chat/Chat";
import getChat from "../../firebase/functions/getChat";
const ChatList = ({ chatList, setShowChat }) => {
  const testMap = chatList.map((chatObj, index) => (
    <Chat
      setShowChat={setShowChat}
      key={index}
      path={chatObj.withtestuser1}
      // chatImg={chatObj.chatImg}
      // chatName={chatObj.chatName}
      // recentMsg={chatObj.recentMsg}
    />
  ));

  return <div className="chat-list">{testMap}</div>;
};
export default ChatList;
