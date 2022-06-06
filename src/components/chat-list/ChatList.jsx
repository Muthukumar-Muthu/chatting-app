import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList, showChat, setShowChat }) => {
  //get from chats
  console.log(chatList);

  return (
    <div className="chat-list">
      {chatList.length !== 0 ? (
        chatList.map((chatDetail) => (
          <Chat
            key={chatDetail.docId}
            showChat={showChat}
            setShowChat={setShowChat}
            chatDetail={chatDetail}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>Get started</h2>
      )}
    </div>
  );
};
export default ChatList;
