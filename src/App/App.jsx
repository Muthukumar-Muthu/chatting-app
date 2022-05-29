import React, { useEffect, useRef, useContext } from "react";

import startEmulator from "../firebase/services/localEmulator";
import "./App.css";
import "./global.css";
import LeftBar from "../components/left-bar/LeftBar";
import RightBar from "../components/right-bar/RightBar";
import { UserContext } from "../context/UserContext";
import LoginButton from "../components/login-button/LoginButton";
function App() {
  const runEmulator = useRef({ run: true });
  const { user } = useContext(UserContext);
  useEffect(() => {
    startEmulator(runEmulator);
  }, []);

  return (
    <div className="App-container">
      <div className="App">
        {user ? (
          <>
            <LeftBar />
            <RightBar />
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
