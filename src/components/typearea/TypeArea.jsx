import SendIcon from "@mui/icons-material/Send";

import "./style.css";
const TypeArea = () => {
  return (
    <footer className="type-area">
      <input
        type="text"
        spellCheck="false"
        autoComplete=""
        placeholder="Type a message"
      />
      <button className="send-button">
        <SendIcon />
      </button>
    </footer>
  );
};
export default TypeArea;
