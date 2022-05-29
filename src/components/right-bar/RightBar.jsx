import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";
const RightBar = () => {
  return (
    <section className="rightbar">
      <ChatHeader />
      <ChatArea />
      <TypeArea />
    </section>
  );
};
export default RightBar;
