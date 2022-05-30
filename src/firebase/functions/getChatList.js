import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function getChatList(setChatList) {
  const chatListQuery = query(collection(db, "users/{Muthukumar}/chats"));

  const unsubscribe = onSnapshot(chatListQuery, (querySnapshot) => {
    const chatList = [];
    querySnapshot.forEach((doc) => {
      chatList.push(doc.data());
    });
    setChatList(chatList);
  });
  return unsubscribe;
}
