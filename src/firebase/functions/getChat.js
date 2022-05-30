import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firestore";

export async function getChat(chatId, setMessages) {
  console.log(chatId);
  console.log("GEtting chat messages");

  const messages = [];
  const chatQuery = query(collection(db, `chats/${chatId}/chat`));
  const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
    setMessages(messages);
  });
  return unsubscribe;
}
