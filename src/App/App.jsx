import React, { useEffect, useRef } from "react";

import startEmulator from "../firebase/services/localEmulator";
import "./App.css";

function App() {
  const runEmulator = useRef({ run: true });

  useEffect(() => {
    startEmulator(runEmulator);
  }, []);

  console.log("app");

  return (
    <div className="App-container">
      <div className="App"></div>
    </div>
  );
}

export default App;
