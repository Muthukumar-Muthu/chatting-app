import { useState } from "react";

import NewChatForm from "../newChatForm/NewChatForm";
import BasicModal from "../modal/Modal";
import "./style.css";
const NewChat = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="new-chat">
      <button onClick={() => setOpenModal(true)}>Create a new Chat</button>
      <BasicModal
        component={
          <NewChatForm openModal={openModal} setOpenModal={setOpenModal} />
        }
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
export default NewChat;
