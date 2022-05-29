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
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora vel aliquam id blanditiis veritatis odit accusantium fuga minus quibusdam beatae voluptatibus, voluptatem animi itaque, laudantium eveniet temporibus laboriosam ipsa!",
    },
    {
      type: "r",
      time: new Date().getFullYear(),
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora vel aliquam id blanditiis veritatis odit accusantium fuga minus quibusdam beatae voluptatibus, voluptatem animi itaque, laudantium eveniet temporibus laboriosam ipsa!",
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
      text: "hi Muthu  lorem  loremlorem lorem lorem lorem❤loremlorem lorem lorem lorem❤loremlorem lorem lorem lorem❤ vloremlorem lorem lorem lorem❤",
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
