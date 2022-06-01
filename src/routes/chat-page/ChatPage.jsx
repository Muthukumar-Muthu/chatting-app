import { useNavigate, useParams } from "react-router-dom";
import LoginButton from "../../components/login-button/LoginButton";
import joinChat from "../../firebase/functions/joinChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
const ChatPage = () => {
  const { chatId } = useParams();
  console.log("chat Page");
  const navigate = useNavigate();
  function callBack() {
    console.log(`joining chat`);

    joinChat(getUserId(), chatId).then(navigate("/"));
  }
  return (
    <div>
      <LoginButton callBack={callBack} />
    </div>
  );
};
export default ChatPage;
