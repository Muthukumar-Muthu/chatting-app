import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import getChatList from "../../firebase/functions/getChatList";
import { isUserProfileCompleted } from "../../firebase/functions/isUserProfileCompleted";
import ChatDetails from "../../components/chat-details/ChatDetails";
const Home = () => {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState(null);
  const [userProfileCompleted, setUserProfileCompleted] = useState(false);
  const [chatListLoaded, setChatListLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [showChatDetails, setShowChatDetails] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user, "user");

  useEffect(() => {
    if (!(chatList.length > 1)) setShowChat(null);
  }, [chatList]);
  useEffect(() => {
    if (user) {
      getUserDetailsFromDb(getUserId(), setUserDetails);
      isUserProfileCompleted(getUserId(), setUserProfileCompleted);
      getChatList(getUserId(), setChatList).then(() => setChatListLoaded(true));
    }
  }, [user]);

  console.log(userProfileCompleted);

  return (
    <div className="App">
      {user ? (
        <>
          <LeftBar
            setShowChatDetails={setShowChatDetails}
            userDetails={userDetails}
            userProfileCompleted={userProfileCompleted}
            chatListLoaded={chatListLoaded}
            showChat={showChat}
            setShowChat={setShowChat}
            chatList={chatList}
          />
          <RightBar
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
      ) : (
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
      )}
    </div>
  );
};
export default Home;
