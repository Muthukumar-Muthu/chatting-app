import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext";
import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import getChatList from "../../firebase/functions/getChatList";
const Home = () => {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      // getUserDetailsFromDb(getUserId())
      //   .then((response) => {
      //     console.log(response);
      //     setUserDetails(response);
      //   })
      //   .catch((err) => console.warn(err));
      getChatList(getUserId(), setChatList);
    }
  }, []);
  return (
    <div className="App">
      {user ? (
        <>
          <LeftBar setShowChat={setShowChat} chatList={chatList} />
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
