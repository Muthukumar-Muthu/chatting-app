import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

import app from "../config/config";

export const db = getFirestore(app);

if (window.location.hostname.includes("localhost")) {
  console.log("connecting to local emulator");

  connectFirestoreEmulator(db, "localhost", 8080);
}
