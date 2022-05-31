import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function updateChatDetail(
  chatId,
  chatName,
  chatImgUrl,
  chatAbout
) {
  try {
    await updateDoc(doc(db, `chats/${chatId}`), {
      chatName: chatName,
      chatAbout: chatAbout,
      chatImg: chatImgUrl,
    });
  } catch (error) {
    console.log(error);
  }
}
