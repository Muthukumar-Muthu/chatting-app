import "./style.css";
import trimMsg from "../../functions/trimMsg";
const Chat = ({ chatImg, ChatName, RecentMsg }) => {
  return (
    <div className="chat">
      <div className="chat-image">
        <img src={chatImg} alt="" />
      </div>
      <div className="chat-details">
        <h2 className="chat-heading">{ChatName}</h2>
        <p className="chat-msg">{trimMsg(RecentMsg, 30)}</p>
      </div>
      <div className="time">12:35 pm</div>
    </div>
  );
};
export default Chat;
