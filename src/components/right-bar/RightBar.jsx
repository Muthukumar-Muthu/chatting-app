import "./style.css";
import TypeArea from "../typearea/TypeArea";
import ChatArea from "../chatarea/ChatArea";
import ChatHeader from "../chatheader/ChatHeader";
import SetupProfile from "../setup-profile/SetupProfile";
const RightBar = ({ showChat, setShowChatDetails, showUserComponent }) => {
  return (
    <section className="rightbar">
      {showUserComponent ? (
        <SetupProfile />
      ) : (
        showChat && (
          <>
            <ChatHeader
              setShowChatDetails={setShowChatDetails}
              showChat={showChat}
            />
            <ChatArea showChat={showChat} />
            <TypeArea showChat={showChat} />
          </>
        )
      )}
    </section>
  );
};
export default RightBar;
