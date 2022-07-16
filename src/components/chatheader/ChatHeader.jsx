import "./style.css";

import useChat from "../../hooks/useChat";
const ChatHeader = () => {
  const { chat } = useChat();

  if (!chat) {
    return null;
  }
  const { name, about, lastUpdate, imgUrl } = chat;

  return (
    <div className="chat-header">
      <div className="chat-image profile-picture">
        <img src={imgUrl} alt="" />
      </div>
      <div className="chat-words">
        <span className="chat-title">{name}</span>
        <p className="chat-about">{about}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
