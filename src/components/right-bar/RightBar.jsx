import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";
const RightBar = ({ showChat, setShowChatDetails }) => {
  return (
    <section className="rightbar">
      {showChat && (
        <>
          <ChatHeader
            setShowChatDetails={setShowChatDetails}
            showChat={showChat}
          />
          <ChatArea showChat={showChat} />
          <TypeArea showChat={showChat} />
        </>
      )}
    </section>
  );
};
export default RightBar;
