import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firestore";

async function generateNewChat(uid) {
  console.log(`creating new chat for uid ${uid}`);

  const chatId = await addDoc(collection(db, `users/${uid}/chats`), {
    chatImg: null,
    chatName: "default chat name",
    recentMsg: "default recent message",
    createdAt: serverTimestamp(),
    createdBy: uid,
    lastUpdateTime: serverTimestamp(),
    membersId: [uid],
  });
  console.log(chatId.id);

  return chatId.id;
}

export default generateNewChat;
