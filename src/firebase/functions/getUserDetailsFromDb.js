import { doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function getUserDetailsFromDb(
  uid,
  setUserDetails = () => {}
) {
  console.log("Getting userDetails from db", `uid - ${uid}`);

  const unsub = onSnapshot(doc(db, `users/${uid}/`), (snapshot) => {
    setUserDetails(snapshot.data());
  });
  return unsub;
}
