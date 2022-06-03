import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../services/firestore";
import { getUserId } from "./getUserDetailsFromAuth";
export default async function getUserDetailsFromDb(
  uid,
  setUserDetails = () => {}
) {
  console.log("Getting userDetails from db", `uid - ${uid}`);
  let unsub = "";
  try {
    unsub = onSnapshot(doc(db, `users/${uid}`), (snapshot) => {
      const userDetails = snapshot.data();
      if (userDetails) setUserDetails(snapshot.data());
      else setUserDetails({});
      // setUserDetails(snapshot.data());
      console.log(snapshot.data());
      if (userDetails?.name && userDetails?.about) {
        updateUserProfile("isCompleted", true);
      } else updateUserProfile("isCompleted", false);
    });
  } catch (error) {
    console.warn(error);
  }

  return unsub;
}

async function updateUserProfile(key, value) {
  try {
    await updateDoc(doc(db, `users/${getUserId()}/`), { [key]: value });
  } catch (error) {
    console.warn("file not found", error);
    addUserProfile(key, value);
  }
}
async function addUserProfile(key, value) {
  console.log("trying to add doc");
  try {
    await setDoc(doc(db, `users/${getUserId()}/`), { [key]: value });
    // await addDoc(collection(db, `users`), { [key]: value });
  } catch (error) {
    console.log(error);
  }
}
