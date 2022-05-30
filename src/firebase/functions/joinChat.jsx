import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firestore";
import getChatDetail from "./getChatDetail";
export default async function joinChat(userId, chatId) {
  const chatDetail = await getChatDetail(chatId);
  await updateChatObj(userId, chatId, chatDetail);
  await addDoc(collection(db, `users/${userId}/chats`), {
    chatId: chatId,
  });
}

async function updateChatObj(userId, chatId, chatDetail) {
  const updatedMembersId = [...chatDetail.membersId, userId];
  await updateDoc(doc(db, `chats/${chatId}`), {
    ...chatDetail,
    membersId: updatedMembersId,
  });
}
