import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firestore";
export default async function getChatDetail(chatId, setChat) {
  console.log("getting chat details", chatId);

  const unSubcribe = onSnapshot(doc(db, `chats/${chatId}`), (snapshot) => {
    setChat(snapshot.data());
  });

  const response = await getDoc(doc(db, `chats/${chatId}`));
  console.log(response.data());
  return response.data();
}
