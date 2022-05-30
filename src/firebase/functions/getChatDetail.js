import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firestore";
export async function getChatDetail(path) {
  const response = await getDoc(doc(db, `chats/${path}/`));
  console.log(response.data());
  return response.data();
}
