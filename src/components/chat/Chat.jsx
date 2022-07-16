import { useState } from "react";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import "./style.css";
import timeStampToDate from "../../firebase/functions/timeStampToDate";
import useChat from "../../hooks/useChat";
import { getChatImgUrl } from "../../firebase/functions";
import { db } from "../../firebase/config";
const Chat = ({ chatId }) => {
  const [chat, setChat] = useState({
    data: {},
    loading: true,
    error: false,
  });

  const { chat: showChat, setChat: setShowChat } = useChat();
  const { name, about, lastUpdate, imgUrl } = chat.data;
  const [date, time] = timeStampToDate(lastUpdate);

  useEffect(() => {
    function listenChat() {
      onSnapshot(
        doc(db, `chats/${chatId}`),
        (doc) => {
          const data = doc.data();

          setChat((p) => ({
            ...p,
            data: { ...data, docId: doc.id },
            loading: false,
          }));
        },
        (error) => {
          console.error(error);
          setChat((p) => ({ ...p, error, loading: false }));
        }
      );
    }
    listenChat().then(() => {
      getChatImgUrl(imgUrl).then((url) => {
        setChat((p) => ({
          ...p,
          data: { ...p.data, imgUrl },
        }));
      });
    });
    return () => {};
  }, [chatId]);

  function clickHandler() {
    if (showChat?.chatId !== chatId) setShowChat({ chatId, ...chat.data });
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
        <img src={imgUrl} alt="chat" />
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
