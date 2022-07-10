import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firestore";

export default async function listenChatList(uid, setChatList) {
  const chatListQuery = query(collection(db, `users/${uid}/chats/`));
  let chatList = [];
  const unsubscribe = onSnapshot(chatListQuery, (querySnapshot) => {
    chatList = [];
    querySnapshot.forEach((doc) => {
      chatList.push({ ...doc.data(), docId: doc.id });
    });
    setChatList(chatList);
  });

  return unsubscribe;
}
