import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList }) => {
  console.log(chatList);

  return (
    <div className="chat-list">
      {chatList.length !== 0 ? (
        chatList.map((chatDetail) => (
          <Chat key={chatDetail.docId} chatId={chatDetail.chatId} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>Get started</h2>
      )}
    </div>
  );
};
export default ChatList;
