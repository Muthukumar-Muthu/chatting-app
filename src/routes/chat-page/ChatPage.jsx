import { useNavigate, useParams } from "react-router-dom";
import LoginButton from "../../components/login-button/LoginButton";
import joinChat from "../../firebase/functions/joinChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <LoginButton
        callBack={() => {
          joinChat(getUserId(), chatId).then(navigate("/"));
        }}
      />
    </div>
  );
};
export default ChatPage;
