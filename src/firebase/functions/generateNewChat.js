import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import setNewChat from "./setNewChat";
import { getUserId } from "../functions";
async function generateNewChat(chatName, chatAbout, chatPhoto) {
  const uid = getUserId();
  try {
    console.log(`creating new chat for uid ${uid}`);
    const chatId = await setNewChat(uid, chatName, chatAbout, chatPhoto);
    await addDoc(collection(db, `users/${uid}/chats`), { chatId });

    return chatId;
  } catch (error) {
    console.error(error);
  }
}

export default generateNewChat;
