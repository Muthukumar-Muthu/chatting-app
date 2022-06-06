import { useEffect, useState } from "react";
import "./style.css";
import Header from "../header/Header";
import SearchBar from "../search-bar/SearchBar";
import ChatList from "../chat-list/ChatList";
import getChatListHeight from "../../functions/getChatListHeight";
import NewChat from "../newChat/NewChat";
import UserComponent from "../user-component/UserComponent";

const LeftBar = ({
  setShowChat,
  chatList,
  showChat,
  chatListLoaded,
  userProfileCompleted,
  userDetails,
  setShowChatDetials,
}) => {
  const [chatListHeight, setChatListHeight] = useState(0);
  const [showUser, setShowUser] = useState(false);
  useEffect(() => {
    setChatListHeight(getChatListHeight());
  }, []);
  console.log(
    "for showing user com",
    showUser,
    userProfileCompleted,
    showUser || userProfileCompleted
  );

  return (
    <section className="leftbar">
      {showUser || !userProfileCompleted ? (
        <UserComponent setShowUser={setShowUser} />
      ) : (
        <>
          <Header
            setShowChatDetials={setShowChatDetials}
            userDetails={userDetails}
            setShowUser={setShowUser}
          />
          <NewChat />
          <SearchBar />
          <div
            style={{
              height: chatListHeight,
            }}
            className="chatlist-wrapper"
          >
            {chatListLoaded ? (
              <ChatList
                showChat={showChat}
                chatList={chatList}
                setShowChat={setShowChat}
              />
            ) : (
              <h2>Loading </h2>
            )}
          </div>
        </>
      )}
    </section>
  );
};
export default LeftBar;
