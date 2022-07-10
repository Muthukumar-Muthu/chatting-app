import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";

import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import listenChatList from "../../firebase/functions/listenChatList";

import ChatDetails from "../../components/chat-details/ChatDetails";
import Preloader from "../../components/preloader/preloader";

const Home = () => {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState(null);

  const [showChatDetails, setShowChatDetails] = useState(false);
  const [showUserComponent, setShowUserComponent] = useState(false);

  const [chatListLoaded, setChatListLoaded] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    let unsubsribe = () => {};
    if (user) {
      // isUserProfileCompleted(getUserId(), setProfileCompleted);
      listenChatList(getUserId(), setChatList).then((unsub) => {
        unsubsribe = unsub;
        setChatListLoaded(true);
      });
    }
    return () => unsubsribe();
  }, [user]);

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
      {
        <>
          <LeftBar
            setShowChatDetails={setShowChatDetails}
            chatListLoaded={chatListLoaded}
            showChat={showChat}
            setShowChat={setShowChat}
            chatList={chatList}
            setShowUserComponent={setShowUserComponent}
            showUserComponent={showUserComponent}
          />
          <RightBar
            showUserComponent={showUserComponent}
            setShowChatDetails={setShowChatDetails}
            showChat={showChat}
          />
          {showChatDetails && showChat && (
            <ChatDetails
              setShowChatDetails={setShowChatDetails}
              showChat={showChat}
            />
          )}
        </>
      }
    </div>
  );
};
export default Home;
