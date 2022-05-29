import "./style.css";
import trimMsg from "../../functions/trimMsg";
const Chat = ({ chatImg, chatName, recentMsg }) => {
  return (
    <div className="chat">
      <div className="chat-image">
        <img src={chatImg} alt="" />
      </div>
      <div className="chat-details">
        <h2 className="chat-heading">{chatName}</h2>
        <p className="chat-msg">{trimMsg(recentMsg, 30)}</p>
      </div>
      <div className="time">12:35 pm</div>
    </div>
  );
};
export default Chat;
