// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

let firebaseConfig = {
  apiKey: "AIzaSyBO63lMof5qupvUyhygkB8L4ZU64tQyUWc",
  authDomain: "chatting-app-dd1a5.firebaseapp.com",
  projectId: "chatting-app-dd1a5",
  storageBucket: "chatting-app-dd1a5.appspot.com",
  messagingSenderId: "11386538336",
  appId: "1:11386538336:web:62dba42c743314b4a63605",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
