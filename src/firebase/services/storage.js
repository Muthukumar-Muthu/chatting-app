import { connectStorageEmulator, getStorage } from "firebase/storage";
import app from "../config/config";

export const storageDb = getStorage(app);
if (window.location.hostname.includes("localhost")) {
  console.log("connecting to local emulator");

  connectStorageEmulator(storageDb, "localhost", 9199);
}
