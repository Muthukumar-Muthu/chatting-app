import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/services/firestore";
export default async function sendMessage(userId, chatId, text) {
  try {
    const response = await addDoc(collection(db, `chats/${chatId}/chats`), {
      senderId: userId,
      messageContent: text,
      time: serverTimestamp(),
    });
  } catch (error) {
    console.warn(error);
  }
}
