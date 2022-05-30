import "./style.css";
import trimMsg from "../../functions/trimMsg";
import { useEffect, useState } from "react";
import getChatDetail from "../../firebase/functions/getChatDetail";

const Chat = ({ chatDetail: { chatId } }) => {
  console.log(chatId, "in chat component");
  const [chat, setChat] = useState({});
  useEffect(() => {
    getChatDetail(chatId)
      .then((response) => setChat(response))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="chat">
      <div className="chat-image">
        <img src={chat.chatImg} alt="" />
      </div>
      <div className="chat-details">
        <h2 className="chat-heading">{chat.chatName}</h2>
        <p className="chat-msg">{trimMsg(chat.recentMsg, 30)}</p>
      </div>
      <div className="time">12:35 pm</div>
    </div>
  );
};
export default Chat;
