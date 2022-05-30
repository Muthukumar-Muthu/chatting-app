import "./style.css";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
const Message = ({ messageContent, senderId }) => {
  const loggedUserId = getUserId();
  return (
    <div
      className={
        (senderId === loggedUserId ? "right-message" : "left-message") +
        " message"
      }
    >
      <span className="text">{messageContent}</span>
      <span className="time">{"12:32pm"}</span>
    </div>
  );
};
export default Message;
