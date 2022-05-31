import { getStorage } from "firebase/storage";
import app from "../config/config";

export const storageDb = getStorage(app);
