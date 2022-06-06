import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../services/firestore";

export default async function joinChat(userId, chatId) {
  const chatDetail = await getChatDetail(chatId);
  const chatPresented = await checkChatList(userId, chatId);
  if (!chatPresented) {
    await addDoc(collection(db, `users/${userId}/chats`), {
      chatId: chatId,
    });
    await updateChatObj(userId, chatId, chatDetail);
  } else console.warn(`chat already presented`);
}

async function updateChatObj(userId, chatId, chatDetail) {
  try {
    const updatedMembersId = [...chatDetail.membersId, userId];
    console.log(updatedMembersId);

    await setDoc(doc(db, "chats", chatId), {
      ...chatDetail,
      membersId: updatedMembersId,
    });
  } catch (error) {
    console.log(error, "while updating the chtdetai");
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

async function checkChatList(userId, chatId) {
  console.log(`checking chat List`);
  let chatPresented = false;
  const q = query(
    collection(db, `users/${userId}/chats`),
    where("chatId", "==", chatId)
  );
  const snap = await getDocs(q);
  console.log("checking chatList");
  snap.forEach((doc) => {
    chatPresented = true;
    console.log(doc.data());
  });
  console.warn(chatPresented);
  return chatPresented;
}
