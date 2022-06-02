import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firestore";
import { getChatImgUrl } from "./getChatImgUrl";
export default async function getChatDetail(chatId, setChat) {
  let unSubcribe = {};
  try {
    unSubcribe = onSnapshot(doc(db, `chats/${chatId}`), (snapshot) => {
      try {
        const { chatImg } = snapshot.data();

        getChatImgUrl(chatImg).then((url) => {
          setChat({ ...snapshot.data(), chatImg: url });
        });
      } catch (error) {
        console.log(error, "error while getting chat details");
      }
    });
  } catch (error) {
    console.log(error, "error while getting chat details");
  }
  return unSubcribe;
}
