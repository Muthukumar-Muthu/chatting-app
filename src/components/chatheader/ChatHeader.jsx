import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import trimMsg from "../../functions/trimMsg";
const ChatHeader = ({ showChat }) => {
  return (
    <div className="chat-header ">
      <div className="chat-image profile-picture">
        <img src={showChat.chatImg} alt="" />
      </div>
      <div className="chat-words">
        <span className="chat-title">{showChat.chatName}</span>
        <p className="chat-about">{trimMsg(showChat.chatAbout, 170)}</p>
      </div>
      <div className="search-button">
        <SearchIcon />
      </div>
      <div className="settings">
        <MoreVertIcon />
      </div>
    </div>
  );
};
export default ChatHeader;
