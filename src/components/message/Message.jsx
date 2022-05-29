import "./style.css";

const Message = ({ senderId, time, text }) => {
  const loggedUserName = "Muthukumar";
  return (
    <div
      className={
        (senderId === loggedUserName ? "right-message" : "left-message") +
        " message"
      }
    >
      <span className="text">{text}</span>
      <span className="time">{"12:32pm"}</span>
    </div>
  );
};
export default Message;
