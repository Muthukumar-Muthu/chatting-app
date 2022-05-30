import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import "./style.css";
const NewChat = () => {
  return (
    <div className="new-chat">
      <button
        onClick={() => {
          generateNewChat(getUserId());
        }}
      >
        Create a new Chat
      </button>
    </div>
  );
};
export default NewChat;
