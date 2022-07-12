import "./style.css";

import timeStampToDate from "../../firebase/functions/timeStampToDate";
import useListen from "../../hooks/useListen";
import useChat from "../../hooks/useChat";

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

  const { chat: showChat, setChat: setShowChat } = useChat();

  const chatName = chat.chatDetails?.name;
  const lastUpdate = chat.chatDetails?.lastUpdate;
  const chatAbout = chat.chatDetails?.about;
  const [date, time] = timeStampToDate(lastUpdate);
  console.log(chatName, date, time);

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
        <img src={""} alt="chat" />
      </div>
      <div className="chat-details">
        <h2
          className="chat-heading"
          style={{ height: "1.5em", overflow: "hidden", display: "grid" }}
        >
          {chatName}
        </h2>
        <p className="chat-msg">{chatAbout}</p>
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
