import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function getUserDetailsFromDb(uid) {
  console.log("Getting userDetails from db", `uid - ${uid}`);
  const response = await getDoc(doc(db, `users/${uid}/`));
  return response.data();
}
