import React, { useEffect, useRef, useContext, useState } from "react";

import startEmulator from "../firebase/services/localEmulator";
import "./App.css";
import "./global.css";
import LeftBar from "../components/left-bar/LeftBar";
import RightBar from "../components/right-bar/RightBar";
import { UserContext } from "../context/UserContext";
import LoginButton from "../components/login-button/LoginButton";
import getChatList from "../firebase/functions/getChatList";

import getUserDetailsFromDb from "../firebase/functions/getUserDetailsFromDb";
import { getUserId } from "../firebase/functions/getUserDetailsFromAuth";
import Modal from "../components/modal/Modal";

function App() {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const runEmulator = useRef({ run: true });
  const { user } = useContext(UserContext);

  useEffect(() => {
    startEmulator(runEmulator);
    getUserDetailsFromDb(getUserId())
      .then((response) => {
        console.log(response);

        setUserDetails(response);
      })
      .catch((err) => console.warn(err));
    getChatList(setChatList);
  }, []);

  return (
    <div className="App-container">
      <div className="App">
        {user ? (
          <>
            <LeftBar setShowChat={setShowChat} chatList={chatList} />
            <RightBar showChat={showChat} />
            <Modal />
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
    </div>
  );
}

export default App;
