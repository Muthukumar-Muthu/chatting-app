import "./style.css";

import timeStampToDate from "../../firebase/functions/timeStampToDate";
import useListen from "../../hooks/useListen";
import useChat from "../../hooks/useChat";
import { getChatImgUrl } from "../../firebase/functions";
import { useState } from "react";
const Chat = ({ chatId }) => {
  const {
    data: chat,
    loading,
    error,
  } = useListen({
    path: `chats/${chatId}`,
    type: "doc",
    state: 1,
  });
  const [imgSrc, setImgSrc] = useState("");
  const { chat: showChat, setChat: setShowChat } = useChat();

  let { name, about, lastUpdate, imgUrl } = chat;

  getChatImgUrl(imgUrl).then((url) => {
    setImgSrc(url);
  });
  const [date, time] = timeStampToDate(lastUpdate);

  function clickHandler() {
    if (showChat?.chatId !== chatId) setShowChat({ chatId, ...chat });
  }
  return (
    <div
      className="chat"
      style={{
        backgroundColor: showChat?.chatId === chatId ? "#f0f2f5" : "",
      }}
      onClick={clickHandler}
    >
      <div className="chat-image">
        <img src={imgSrc} alt="chat" />
      </div>
      <div className="chat-details">
        <h2
          className="chat-heading"
          style={{ height: "1.5em", overflow: "hidden", display: "grid" }}
        >
          {name}
        </h2>
        <p className="chat-msg">{about}</p>
      </div>
      <div className="time">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
export default Chat;
//TODO:trimMsg(chat.recentMsg, 25)
