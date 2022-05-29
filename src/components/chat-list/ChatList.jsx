import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList, setShowChat }) => {
  return (
    <div className="chat-list">
      {chatList.map((chatObj, index) => (
        <Chat
          setShowChat={setShowChat}
          key={index}
          path={chatObj.withtestuser1}
        />
      ))}
    </div>
  );
};
export default ChatList;
