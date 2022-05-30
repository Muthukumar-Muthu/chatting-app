import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function setNewChat(uid) {
  const response = await addDoc(collection(db, `chats`), {
    chatImg: null,
    chatName: "default chat name",
    recentMsg: "default recent message",
    createdAt: serverTimestamp(),
    createdBy: uid,
    lastUpdateTime: serverTimestamp(),
    membersId: [uid],
  });
  const { id } = response;
  console.log(`chat id ${id}`);
  return id;
}
