import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function joinChat(userId, chatId) {
  const chatDetail = await getChatDetail(chatId);
  await updateChatObj(userId, chatId, chatDetail);
  await addDoc(collection(db, `users/${userId}/chats`), {
    chatId: chatId,
  });
}

async function updateChatObj(userId, chatId, chatDetail) {
  try {
    const updatedMembersId = [...chatDetail.membersId, userId];
    await addDoc(doc(db, `chats/${chatId}`), {
      ...chatDetail,
      membersId: updatedMembersId,
    });
  } catch (error) {
    console.log("while updating the chtdetai");
  }
}

async function getChatDetail(chatId) {
  try {
    const snapshot = await getDoc(doc(db, `chats/${chatId}`));
    return snapshot.data();
  } catch (error) {
    console.log("while getting chatDetail");
    console.warn(error);
  }
}
