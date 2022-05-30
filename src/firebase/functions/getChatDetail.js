import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firestore";
export default async function getChatDetail(chatId) {
  console.log("getting chat details", chatId);

  const response = await getDoc(doc(db, `chats/${chatId}`));
  console.log(response.data());
  return response.data();
}
