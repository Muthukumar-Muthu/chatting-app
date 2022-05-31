import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firestore";
import { getChatImgUrl } from "./getChatImgUrl";
export default async function getChatDetail(chatId, setChat) {
  console.log("getting chat details", chatId);

  const unSubcribe = onSnapshot(doc(db, `chats/${chatId}`), (snapshot) => {
    const { chatImg } = snapshot.data();

    getChatImgUrl(chatImg).then((url) =>
      setChat({ ...snapshot.data(), chatImg: url })
    );
  });
  return unSubcribe;
}
