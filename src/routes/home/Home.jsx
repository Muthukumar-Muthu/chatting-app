import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";

import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";

import Preloader from "../../components/preloader/preloader";
import useListen from "../../hooks/useListen";

const Home = () => {
  const [showChat, setShowChat] = useState(null);
  const {
    data: chatList,
    error,
    loading,
  } = useListen({
    path: `users/${getUserId()}/chats/`,
  });
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
        className="login-wrapper"
      >
        <LoginButton />
      </div>
    );
  }

  return (
    <div className="App">
      <LeftBar
        showChat={showChat}
        setShowChat={setShowChat}
        chatList={chatList}
      />
      <RightBar showChat={showChat} />
    </div>
  );
};
export default Home;
