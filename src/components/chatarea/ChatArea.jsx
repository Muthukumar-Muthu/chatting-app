import "./style.css";
import Message from "../message/Message";
const ChatArea = ({ setShowChat }) => {
  const array = [
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
  ];
  const messages = array.map((message, index) => (
    <Message key={index} {...message} />
  ));
  return <section className="chat-area">{messages}</section>;
};
export default ChatArea;
