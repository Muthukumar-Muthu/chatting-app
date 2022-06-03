import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firestore";

export async function isUserProfileCompleted(
  uid,
  setUserProfileCompleted = () => {}
) {
  console.log(`checking for user ${uid}`);

  const unsub = onSnapshot(doc(db, `users/${uid}/`), (response) => {
    const userDetials = response.data();
    if (userDetials?.isCompleted) setUserProfileCompleted(true);
    else setUserProfileCompleted(false);
  });
  return unsub;
}
