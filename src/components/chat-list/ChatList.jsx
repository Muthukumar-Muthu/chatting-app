import { useEffect } from "react";
import "./style.css";
import Chat from "../chat/Chat";
import getChat from "../../firebase/functions/getChat";
const ChatList = ({ chatList }) => {
  useEffect(() => {
    if (chatList.length > 0) {
      getChat(chatList[0].withtestuser1);
    }
  }, [chatList]);
  const array = [
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      chatName: "Important",
      recentMsg: " 123456789101121222222222222222222222222222",
    },
  ];
  const testMap = array.map((chatObj, index) => (
    <Chat
      key={index}
      chatImg={chatObj.chatImg}
      chatName={chatObj.chatName}
      recentMsg={chatObj.recentMsg}
    />
  ));

  return <div className="chat-list">{testMap}</div>;
};
export default ChatList;
