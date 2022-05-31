import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function setNewChat(
  uid,
  chatName = "Defualt chat name",
  chatImg = null
) {
  const response = await addDoc(collection(db, `chats`), {
    chatImg: chatImg,
    chatName: chatName,
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
