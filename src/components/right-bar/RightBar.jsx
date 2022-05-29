import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";
const RightBar = ({ showChat }) => {
  return (
    <section className="rightbar">
      <ChatHeader showChat={showChat} />
      <ChatArea showChat={showChat} />
      <TypeArea />
    </section>
  );
};
export default RightBar;
