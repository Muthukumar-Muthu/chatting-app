import "./style.css";

const Message = ({ type, time, text }) => {
  return (
    <div
      className={(type === "s" ? "left-message" : "right-message") + " message"}
    >
      <span className="text">{text}</span>
      <span className="time">{"12:32pm"}</span>
    </div>
  );
};
export default Message;
