import { connectFirestoreEmulator } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";

import { auth } from "./auth";
import { db } from "./firestore";

export default function startEmulator(runEmulator) {
    const host = window.location.hostname;
    if (runEmulator.current.run === true && host === "localhost") {
        runEmulator.current.run = false;
        console.log("Starting Local Emulator");
        connectFirestoreEmulator(db, "localhost", 8080);
    }
    connectAuthEmulator(auth, "http://localhost:9099", {
        disableWarnings: true,
    });
}