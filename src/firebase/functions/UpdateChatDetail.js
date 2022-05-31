import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function updateChatDetail(chatId, chatName, chatImgUrl) {
  try {
    await updateDoc(doc(db, `chats/${chatId}`), {
      chatName: chatName,
      chatImg: chatImgUrl,
    });
  } catch (error) {
    console.log(error);
  }
}
