import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firestore";
import setNewChat from "./setNewChat";

async function generateNewChat(uid) {
  console.log(`creating new chat for uid ${uid}`);
  const chatId = await setNewChat(uid);
  await addDoc(collection(db, `users/${uid}/chats`), { chatId });
  return chatId;
}

export default generateNewChat;
