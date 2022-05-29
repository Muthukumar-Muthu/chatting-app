import React, { useEffect, useRef, useContext, useState } from "react";

import startEmulator from "../firebase/services/localEmulator";
import "./App.css";
import "./global.css";
import LeftBar from "../components/left-bar/LeftBar";
import RightBar from "../components/right-bar/RightBar";
import { UserContext } from "../context/UserContext";
import LoginButton from "../components/login-button/LoginButton";
import getChatList from "../firebase/functions/getChatList";
function App() {
  const [chatList, setChatList] = useState([]);
  const [showChat, setShowChat] = useState({});
  const runEmulator = useRef({ run: true });
  const { user } = useContext(UserContext);
  useEffect(() => {
    startEmulator(runEmulator);
    getChatList(setChatList);
  }, []);

  return (
    <div className="App-container">
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
    </div>
  );
}

export default App;
