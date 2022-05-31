import { useState } from "react";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import NewChatForm from "../newChatForm/NewChatForm";
import BasicModal from "../modal/Modal";
import "./style.css";
const NewChat = () => {
  const [openModal, setOpenModal] = useState(false);

  // const [chatId, setChatId] = useState(null);
  // function clickHandler() {
  //   generateNewChat(getUserId())
  //     .then((id) => {
  //       setChatId(id);
  //       console.log(id);
  //     })
  //     .catch((err) => console.warn(err));
  // }
  return (
    <div className="new-chat">
      <button onClick={() => setOpenModal(true)}>Create a new Chat</button>
      <BasicModal
        component={<NewChatForm setOpenModal={setOpenModal} />}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
export default NewChat;
