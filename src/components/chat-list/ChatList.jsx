import { useEffect, useState } from "react";
import "./style.css";
import Chat from "../chat/Chat";
import getChat from "../../firebase/functions/getChat";
const ChatList = ({ chatList }) => {
  const testMap = chatList.map((chatObj, index) => (
    <Chat
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
