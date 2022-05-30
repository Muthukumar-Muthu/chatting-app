import "./style.css";
import Message from "../message/Message";
import { useEffect, useState } from "react";
import { getChat } from "../../firebase/functions/getChat";
const ChatArea = ({ showChat }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (showChat.chatId) {
      getChat(showChat.chatId, setMessages);
    }
  }, [showChat]);
  console.log("showchat", showChat);

  return (
    <section className="chat-area">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </section>
  );
};
export default ChatArea;
