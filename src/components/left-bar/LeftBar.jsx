import "./style.css";
import Header from "../header/Header";

import ChatList from "../chat-list/ChatList";

import NewChat from "../newChat/NewChat";
import Preloader from "../preloader/preloader";

const LeftBar = ({ chatListLoading, chatList }) => {
  console.log(chatListLoading, chatList);
  return (
    <section className="leftbar">
      <Header />
      <NewChat />
      <div className="chatlist-wrapper">
        {chatListLoading ? <Preloader /> : <ChatList chatList={chatList} />}
      </div>
    </section>
  );
};
export default LeftBar;
