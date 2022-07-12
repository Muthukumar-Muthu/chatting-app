import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";

export default async function updateChatDetail(chatId, chatImgUrl) {
  try {
    await updateDoc(doc(db, `chats/${chatId}`), {
      chatImg: chatImgUrl,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
