import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList, showChat, setShowChat }) => {
  //get from chats
  console.log(chatList);

  return (
    <div className="chat-list">
      {chatList.map((chatDetail) => (
        <Chat
          key={chatDetail.docId}
          showChat={showChat}
          setShowChat={setShowChat}
          chatDetail={chatDetail}
        />
      ))}
    </div>
  );
};
export default ChatList;
