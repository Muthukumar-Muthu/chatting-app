import "./style.css";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import timeStampToDate from "../../firebase/functions/timeStampToDate";
const Message = ({ messageContent, senderId, time }) => {
  const chatTime = timeStampToDate(time);
  const loggedUserId = getUserId();
  return (
    <div
      className={
        (senderId === loggedUserId ? "right-message" : "left-message") +
        " message"
      }
    >
      <span className="text">{messageContent}</span>
      <span className="time">{chatTime.join(" ")}</span>
    </div>
  );
};
export default Message;
