import React from "react";
import startEmulator from "./firebase/services/localEmulator";
import "./App.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase/services/firestore";
import { useEffect, useRef } from "react/";

function App() {
  const runEmulator = useRef({ run: true });

  useEffect(() => {
    startEmulator(runEmulator);
    setCollection();
  });

  console.log("app");

  return <div className="App"></div>;
}

export default App;
async function setCollection() {
  const res = await addDoc(collection(db, "users/"), {
    name: "muthu",
  });
}
