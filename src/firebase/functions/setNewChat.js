import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firestore";
import uploadChatPhotoToDb from "./uploadChatPhotoToDb";
import updateChatDetail from "./UpdateChatDetail";
export default async function setNewChat(
  uid,
  chatName = "",
  chatAbout = "",
  chatImg = null
) {
  if (!uid) throw new Error("uid not avaiable");
  const response = await addDoc(collection(db, `chats`), {
    chatImg: null,
    chatName: chatName,
    recentMsg: "",
    chatAbout: chatAbout,
    createdAt: serverTimestamp(),
    createdBy: uid,
    lastUpdateTime: serverTimestamp(),
    membersId: [uid],
  });
  const { id: chatId } = response;
  const chatImgUrl = await uploadChatPhotoToDb(
    chatImg,
    `chats/${chatId}/chatImg`
  );
  await updateChatDetail(chatId, chatImgUrl);
  return chatId;
}
