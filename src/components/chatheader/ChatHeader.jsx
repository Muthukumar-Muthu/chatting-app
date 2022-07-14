import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import trimMsg from "../../functions/trimMsg";
import { useState } from "react";
import { getChatImgUrl } from "../../firebase/functions";
const ChatHeader = ({ chat }) => {
  const [imgSrc, setImgSrc] = useState("");
  if (!chat.name) {
    return null;
  }
  const { name, about, lastUpdate, imgUrl } = chat;
  getChatImgUrl(imgUrl).then((url) => {
    setImgSrc(url);
  });
  return (
    <div className="chat-header">
      <div className="chat-image profile-picture">
        <img src={imgSrc} alt="" />
      </div>
      <div className="chat-words">
        <span className="chat-title">{name}</span>
        <p className="chat-about">{about}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
