import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import sendMessage from "../../firebase/functions/sendMessage";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import "./style.css";
const TypeArea = ({ showChat }) => {
  const { chatId } = showChat;
  const [typedMessage, setTypedMessage] = useState("");
  useEffect(() => {
    setTypedMessage("");
  }, [showChat]);
  return (
    <footer className="type-area">
      <input
        type="text"
        spellCheck="false"
        autoComplete=""
        value={typedMessage}
        onChange={(e) => {
          setTypedMessage(e.target.value);
        }}
        placeholder="Type a message"
      />
      <button
        className="send-button"
        onClick={() => {
          sendMessage(getUserId(), showChat, chatId, typedMessage);
          setTypedMessage("");
        }}
      >
        <SendIcon />
      </button>
    </footer>
  );
};
export default TypeArea;
