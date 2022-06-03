import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import getChatList from "../../firebase/functions/getChatList";
import { isUserProfileCompleted } from "../../firebase/functions/isUserProfileCompleted";
const Home = () => {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState({});
  const [userProfileCompleted, setUserProfileCompleted] = useState(false);
  const [chatListLoaded, setChatListLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const { user } = useContext(UserContext);
  console.log(user, "user");

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
            userDetails={userDetails}
            userProfileCompleted={userProfileCompleted}
            chatListLoaded={chatListLoaded}
            showChat={showChat}
            setShowChat={setShowChat}
            chatList={chatList}
          />
          <RightBar showChat={showChat} />
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
