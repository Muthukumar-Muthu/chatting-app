import "./style.css";
import trimMsg from "../../functions/trimMsg";
import { useEffect, useState } from "react";
import getChat, { getChatDetail } from "../../firebase/functions/getChat";
const Chat = ({ path }) => {
  const [chat, setChat] = useState({});
  useEffect(() => {
    getChatDetail(path)
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
