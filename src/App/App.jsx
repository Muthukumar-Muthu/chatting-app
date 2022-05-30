import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./global.css";

import ChatPage from "../routes/chat-page/ChatPage";
import Home from "../routes/home/Home";

function App() {
  const runEmulator = useRef({ run: true });
  useEffect(() => {
    //startEmulator(runEmulator);
  }, []);

  return (
    <div className="App-container">
      <Routes>
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
