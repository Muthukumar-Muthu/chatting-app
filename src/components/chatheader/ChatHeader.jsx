import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import trimMsg from "../../functions/trimMsg";
const ChatHeader = () => {
  return (
    <div className="chat-header ">
      <div className="chat-image profile-picture">
        <img
          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="chat-words">
        <span className="chat-title">Important</span>
        <p className="chat-about">
          {trimMsg(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eos at iusto assumenda unde eveniet, obcaecati harum sequi, vero
          deserunt accusamus eligendi porro, rerum repellendus! Quisquam est et
          quibusdam. Molestias?`,
            170
          )}
        </p>
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
