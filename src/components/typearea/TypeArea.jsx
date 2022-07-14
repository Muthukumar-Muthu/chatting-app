import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { sendMessage } from "../../firebase/functions";
import "./style.css";
const TypeArea = ({ chat }) => {
  const { chatId } = chat;
  const [typedMessage, setTypedMessage] = useState("");
  useEffect(() => {
    setTypedMessage("");
  }, [chat]);

  function formSubmit(e) {
    e.preventDefault();
    sendMessage(chatId, typedMessage);
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
