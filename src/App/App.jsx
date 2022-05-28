import React, { useEffect, useRef } from "react";

import startEmulator from "../firebase/services/localEmulator";
import "./App.css";
import LeftBar from "../components/left-bar/LeftBar";
import RightBar from "../components/right-bar/RightBar";
function App() {
  const runEmulator = useRef({ run: true });

  useEffect(() => {
    startEmulator(runEmulator);
  }, []);

  return (
    <div className="App-container">
      <div className="App">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
