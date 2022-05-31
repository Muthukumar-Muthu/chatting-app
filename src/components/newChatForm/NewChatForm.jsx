import { useEffect, useState } from "react";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import updateChatDetail from "../../firebase/functions/UpdateChatDetail";
import uploadChatPhotoToDb from "../../firebase/functions/uploadChatPhotoToDb";
import "./style.css";
const NewChatForm = ({ handleClose }) => {
  const [chatName, setChatName] = useState("");
  const [chatId, setChatId] = useState("");
  const [chatPhoto, setChatPhoto] = useState("");

  let chatImgUrl = "";
  useEffect(() => {
    generateNewChat(getUserId())
      .then((id) => setChatId(id))
      .catch((err) => console.warn(err));
  }, []);

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
    console.log(chatImgUrl);

    updateChatDetail(chatId, chatName, chatImgUrl);
    handleClose();
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
          type="file"
          name="Chat Photo"
          id="chat-photo"
          accept="image/png, image/jpeg"
          //   value={chatPhoto}
          onChange={changeHandlerForChatPhoto}
          required
        />
      </span>
      <span className="button" onClick={submitHandler}>
        Submit
      </span>
    </form>
  );
};
export default NewChatForm;
