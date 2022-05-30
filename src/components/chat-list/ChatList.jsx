import "./style.css";
import Chat from "../chat/Chat";

const ChatList = ({ chatList, setShowChat }) => {
  //get from chats
  console.log(chatList);

  return (
    <div className="chat-list">
      {chatList.map((chatDetail) => (
        <Chat
          key={chatDetail.docId}
          setShowChat={setShowChat}
          chatDetail={chatDetail}
        />
      ))}
    </div>
  );
};
export default ChatList;
