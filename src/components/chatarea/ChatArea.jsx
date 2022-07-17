import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import "./style.css";
import Message from "../message/Message";
import useChat from "../../hooks/useChat";
import Preloader from "../preloader/preloader";
import { db } from "../../firebase/config";
const ChatArea = () => {
  const { chat } = useChat();
  const chatId = chat?.chatId;
  const [messages, setMessages] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    function listenMessages() {
      let q = query(
        collection(db, `chats/${chatId}/chats`),
        orderBy("time", "asc")
      );
      onSnapshot(
        q,
        (snapshot) => {
          const data = [];
          snapshot.forEach((doc) => {
            data.push({ ...doc.data(), docId: doc.id });
          });
          setMessages((p) => ({
            ...p,
            data: data,
            loading: false,
          }));
        },
        (error) => {
          console.error(error);
          setMessages((p) => ({ ...p, error, loading: false }));
        }
      );
    }
    listenMessages();
  }, [chatId]);
  return (
    <section className="chat-area">
      {messages.loading ? (
        <Preloader />
      ) : (
        messages.data.map((message) => (
          <Message key={message.docId} {...message} />
        ))
      )}
    </section>
  );
};
export default ChatArea;
