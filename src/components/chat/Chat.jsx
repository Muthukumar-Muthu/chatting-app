import "./style.css";
import trimMsg from "../../functions/trimMsg";
import { useEffect, useState } from "react";
import getChatDetail from "../../firebase/functions/getChatDetail";
import timeStampToDate from "../../firebase/functions/timeStampToDate";

const Chat = ({ chatDetail, setShowChat }) => {
  const { chatId } = chatDetail;
  const lastMessageTime = timeStampToDate(chatDetail.lastUpdateTime);
  console.log(chatId, "in chat component");
  const [chat, setChat] = useState({});
  useEffect(() => {
    getChatDetail(chatId)
      .then((response) => setChat(response))
      .catch((err) => console.warn(err));
  }, []);

  function clickHandler() {
    setShowChat({ ...chat, chatId });
  }
  return (
    <div className="chat" onClick={clickHandler}>
      <div className="chat-image">
        <img src={chat.chatImg} alt="" />
      </div>
      <div className="chat-details">
        <h2 className="chat-heading">{chat.chatName}</h2>
        <p className="chat-msg">{trimMsg(chat.recentMsg, 30)}</p>
      </div>
      <div className="time">{lastMessageTime}</div>
    </div>
  );
};
export default Chat;
