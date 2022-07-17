import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList }) => {
  return (
    <div className="chat-list">
      {chatList.length !== 0 ? (
        chatList.map((chat) => <Chat key={chat.docId} chatId={chat.chatId} />)
      ) : (
        <h2 style={{ textAlign: "center" }}>Get started</h2>
      )}
    </div>
  );
};
export default ChatList;
