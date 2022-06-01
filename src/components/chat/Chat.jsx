import "./style.css";
import trimMsg from "../../functions/trimMsg";
import { useEffect, useState } from "react";
import getChatDetail from "../../firebase/functions/getChatDetail";
import timeStampToDate from "../../firebase/functions/timeStampToDate";

const Chat = ({ chatDetail, showChat, setShowChat }) => {
  const { chatId } = chatDetail;
  const [chat, setChat] = useState({});

  const lastMessageTime = timeStampToDate(chat.lastUpdateTime);
  console.log(chatId, "in chat component");
  useEffect(() => {
    getChatDetail(chatId, setChat);
  }, []);

  function clickHandler() {
    if (showChat.chatId !== chatId) setShowChat({ chatId, ...chat });
  }
  return (
    <>
      {chat.chatName && (
        <div
          className="chat"
          style={{
            backgroundColor: showChat.chatId === chatId ? "#f0f2f5" : "",
          }}
          onClick={clickHandler}
        >
          <div className="chat-image">
            <img src={chat.chatImg} alt="" />
          </div>
          <div className="chat-details">
            <h2 className="chat-heading">{chat.chatName}</h2>
            <p className="chat-msg">{trimMsg(chat.recentMsg, 25)}</p>
          </div>
          <div className="time">{lastMessageTime}</div>
        </div>
      )}
    </>
  );
};
export default Chat;
