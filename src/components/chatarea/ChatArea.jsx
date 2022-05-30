import "./style.css";
import Message from "../message/Message";
import { useEffect, useState } from "react";
import { getChat } from "../../firebase/functions/getChat";
const ChatArea = ({ showChat }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // if (showChat.chatPath) {
    //   getChat(showChat.chatPath, setMessages);
    // }
  }, [showChat]);

  return (
    <section className="chat-area">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </section>
  );
};
export default ChatArea;
