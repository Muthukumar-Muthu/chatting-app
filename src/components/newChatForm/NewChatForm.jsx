import { useEffect, useState, useRef } from "react";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import updateChatDetail from "../../firebase/functions/UpdateChatDetail";
import uploadChatPhotoToDb from "../../firebase/functions/uploadChatPhotoToDb";
import "./style.css";
const NewChatForm = ({ setOpenModal }) => {
  const [chatName, setChatName] = useState("");
  const [cleanState, setCleanState] = useState(false);
  const [chatId, setChatId] = useState("");
  const chatImgRef = useRef();
  let chatImgUrl = "";
  useEffect(() => {
    generateNewChat(getUserId())
      .then((id) => setChatId(id))
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    if (cleanState === true) {
      setChatName("");
      setChatId("");
      chatImgRef.current.value = "";
      setCleanState(false);
    }
  }, [cleanState]);

  function changeHandlerForChatName(e) {
    setChatName(e.target.value);
  }
  function changeHandlerForChatPhoto(e) {
    // setChatPhoto(e.target.name);
    uploadChatPhotoToDb(e.target.files[0], `chats/${chatId}/chatImg`).then(
      (imgurl) => (chatImgUrl = imgurl)
    );
  }
  function submitHandler(e) {
    e.preventDefault();
    updateChatDetail(chatId, chatName, chatImgUrl);
    setOpenModal(false);
    setCleanState(true);
  }

  return (
    <form className="newChat">
      <span className="flex">
        <label htmlFor="chat-name">Chat name</label>
        <input
          type="text"
          name="Chat name"
          id="chat-name"
          placeholder="Chat name"
          value={chatName}
          onChange={changeHandlerForChatName}
          required
          autoComplete="off"
          autoCorrect="false"
        />
      </span>
      <span className="flex">
        <label htmlFor="chat-photo">Chat Photo</label>
        <input
          ref={chatImgRef}
          type="file"
          name="Chat Photo"
          id="chat-photo"
          accept="image/png, image/jpeg"
          //   value={chatPhoto}
          onChange={changeHandlerForChatPhoto}
          required
        />
      </span>
      <button className="submit-button" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};
export default NewChatForm;
