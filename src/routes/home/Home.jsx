import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ChatContextProvider } from "../../context/ChatContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";
import { getUserId } from "../../firebase/functions";

import Preloader from "../../components/preloader/preloader";
import useListen from "../../hooks/useListen";

const Home = () => {
  const { user } = useContext(UserContext);
  const {
    data: chatList,
    error,
    loading,
  } = useListen({
    path: `users/${getUserId()}/chats`,
    state: user,
    type: "collection",
  });
  console.log(chatList);

  if (!user) {
    return <LoginButton />;
  }

  return (
    <ChatContextProvider>
      <div className="App">
        <LeftBar chatList={chatList} chatListLoading={loading} />
        <RightBar />
      </div>
    </ChatContextProvider>
  );
};
export default Home;
