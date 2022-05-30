import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firestore";

export async function getChat(path, setMessages) {
  const messages = [];
  const chatQuery = query(collection(db, `chats/${path}/chat`));
  const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
    setMessages(messages);
  });
  return unsubscribe;
}
