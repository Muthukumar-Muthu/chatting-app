import { useState } from "react";

import NewChatForm from "../newChatForm/NewChatForm";
import BasicModal from "../modal/Modal";
import "./style.css";
const NewChat = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div className="new-chat">
      <button onClick={openModal}>Create a new Chat</button>
      {modal && (
        <BasicModal
          Component={NewChatForm}
          modal={modal}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default NewChat;
