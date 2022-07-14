import "./style.css";
import Message from "../message/Message";
import { useEffect, useState } from "react";
import { getChat } from "../../firebase/functions/getChat";
import useListen from "../../hooks/useListen";
import { orderBy, query } from "firebase/firestore";
const ChatArea = ({ chat }) => {
  const { chatId } = chat;
  const {
    data: messages,
    loading,
    error,
  } = useListen({
    path: `chats/${chatId}/chats`,
    state: chat,
    type: "collection",
    condition: [orderBy("time", "asc")],
  });

  console.log("chat", messages);

  return (
    <section className="chat-area">
      {messages.map((message) => (
        <Message key={message.docId} {...message} />
      ))}
    </section>
  );
};
export default ChatArea;
