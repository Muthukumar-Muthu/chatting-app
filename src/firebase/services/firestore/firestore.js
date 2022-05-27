import { getFirestore } from "firebase/firestore";
import app from "../../config/config";

export const db = getFirestore(app);
