import { useEffect, useState } from "react";
import "./style.css";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import ChatList from "../chat-list/ChatList";
import getChatListHeight from "../../functions/getChatListHeight";

const LeftBar = ({ setShowChat, chatList }) => {
  const [chatListHeight, setChatListHeight] = useState(0);
  useEffect(() => {
    setChatListHeight(getChatListHeight());
  }, []);
  return (
    <section className="leftbar">
      <Header />
      <SearchBar />
      <div
        style={{
          height: chatListHeight,
        }}
        className="chatlist-wrapper"
      >
        <ChatList chatList={chatList} setShowChat={setShowChat} />
      </div>
    </section>
  );
};
export default LeftBar;
