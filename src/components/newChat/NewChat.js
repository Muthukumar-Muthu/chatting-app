import { useState } from "react";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import BasicModal from "../modal/Modal";
import "./style.css";
const NewChat = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalFunction = () => setOpenModal(true);
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
      <button onClick={openModalFunction}>Create a new Chat</button>
      {openModal && <BasicModal content={""} setOpenModal={setOpenModal} />}
    </div>
  );
};
export default NewChat;
