import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";

import useChat from "../../hooks/useChat";
const RightBar = () => {
  const { chat } = useChat();
  return (
    <section className="rightbar">
      {
        <>
          <ChatHeader chat={chat} />
          {<ChatArea chat={chat} />}
          {<TypeArea chat={chat} />}
        </>
      }
    </section>
  );
};
export default RightBar;
