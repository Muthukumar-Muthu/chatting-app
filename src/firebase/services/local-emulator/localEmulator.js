import { auth } from "../auth/auth";
import { db } from "../firestore/firestore";

import { connectFirestoreEmulator } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";

connectFirestoreEmulator(db, "localhost", 8080);
// connectAuthEmulator(auth, "localhost");
console.log("local emulator on");
const a = "s";
export default a;
