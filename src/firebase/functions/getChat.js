import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../services/firestore";

export async function getChat(chatId, setMessages) {
  console.log(chatId);
  console.log("Getting chat messages");

  let messages = [];
  const chatQuery = query(
    collection(db, `chats/${chatId}/chats`),
    orderBy("time", "asc")
  );
  const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
    messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), messageId: doc.id });
    });
    setMessages(messages);
    console.log(messages);
  });
  return unsubscribe;
}
