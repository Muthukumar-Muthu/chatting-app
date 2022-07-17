import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";
import useChat from "../../hooks/useChat";

const RightBar = () => {
  const { chat } = useChat();
  return (
    <section className="rightbar">
      {chat && (
        <>
          <ChatHeader />
          <ChatArea />
          <TypeArea />
        </>
      )}
    </section>
  );
};
export default RightBar;
