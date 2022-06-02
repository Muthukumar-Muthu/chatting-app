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
  function formSubmit(e) {
    e.preventDefault();
    sendMessage(getUserId(), showChat, chatId, typedMessage);
    setTypedMessage("");
  }
  return (
    <footer className="type-area">
      <form>
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
        <button className="send-button" onClick={formSubmit}>
          <SendIcon />
        </button>
      </form>
    </footer>
  );
};
export default TypeArea;
