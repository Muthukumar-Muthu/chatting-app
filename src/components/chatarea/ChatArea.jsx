import "./style.css";
import Message from "../message/Message";
const ChatArea = () => {
  const array = [
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: "hi Muthu ❤",
    },
    {
      type: "s",
      time: new Date().getFullYear(),
      text: "hi Muthu send ❤",
    },
  ];
  const messages = array.map((message, index) => (
    <Message key={index} {...message} />
  ));
  return <section className="chat-area">{messages}</section>;
};
export default ChatArea;
