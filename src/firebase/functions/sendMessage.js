import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/services/firestore";
export default async function sendMessage(userId, chatObj, chatId, text) {
  try {
    await updateChatObjWithRecentMsg(chatId, text, chatObj);
    const response = await addDoc(collection(db, `chats/${chatId}/chats`), {
      senderId: userId,
      messageContent: text,
      time: serverTimestamp(),
    });
  } catch (error) {
    console.warn(error);
  }
}

async function updateChatObjWithRecentMsg(chatId, text, chatObj) {
  try {
    await updateDoc(doc(db, `chats/${chatId}/`), {
      ...chatObj,
      lastUpdateTime: serverTimestamp(),
      recentMsg: text,
    });
  } catch (error) {
    console.warn(error);
  }
}
