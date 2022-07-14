import { useNavigate, useParams } from "react-router-dom";
import LoginButton from "../../components/login-button/LoginButton";
import joinChat from "../../firebase/functions";

const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <LoginButton
        callBack={() => {
          joinChat(chatId).then(navigate("/"));
        }}
      />
    </div>
  );
};
export default ChatPage;
