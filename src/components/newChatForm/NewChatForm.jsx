import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import updateChatDetail from "../../firebase/functions/UpdateChatDetail";
import uploadChatPhotoToDb from "../../firebase/functions/uploadChatPhotoToDb";
import Copyable from "../copyable/Copyable";
import "./style.css";
const NewChatForm = ({ setOpenModal, openModal }) => {
  const [chatName, setChatName] = useState("");
  const [cleanState, setCleanState] = useState(false);
  const [chatId, setChatId] = useState("");
  const [newChatDone, setNewChatDone] = useState(false);
  const [imgUpload, setImgUpload] = useState(null);
  const [chatImgUrl, setChatImgUrl] = useState("");
  const chatImgRef = useRef();
  useEffect(() => {
    if (openModal) {
      console.log("running new chat");
      generateNewChat(getUserId())
        .then((id) => setChatId(id))
        .catch((err) => console.warn(err));
    }
  }, [openModal]);

  useEffect(() => {
    if (cleanState === true) {
      setChatName("");
      setChatId("");
      // chatImgRef.current.value = "";
      setCleanState(false);
    }
  }, [cleanState]);

  useEffect(() => {
    if (openModal) {
      setCleanState(true);
      setNewChatDone(false);
    }
  }, [openModal]);
  function changeHandlerForChatName(e) {
    setChatName(e.target.value);
  }
  function changeHandlerForChatPhoto(e) {
    // setChatPhoto(e.target.name);
    setImgUpload(true);
    uploadChatPhotoToDb(e.target.files[0], `chats/${chatId}/chatImg`).then(
      (imgUrl) => {
        console.log(imgUrl);
        setChatImgUrl(imgUrl);
        setImgUpload(false);
      }
    );
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(chatImgUrl);

    if (chatImgUrl) {
      updateChatDetail(chatId, chatName, chatImgUrl);
      setNewChatDone(true);
    }
  }

  return (
    <>
      {newChatDone ? (
        <Copyable
          content={
            <div>
              <h2> Copy this Link</h2>
              <Link target={"_blank"} to={`chat/${chatId}`}>
                {window.location.hostname + `/chat/${chatId}`}
              </Link>
            </div>
          }
          copyContent={window.location.hostname + `/chat/${chatId}`}
        />
      ) : (
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
            <label htmlFor="chat-photo">
              Chat Photo {imgUpload && <span>Uploading..</span>}
            </label>
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
      )}
    </>
  );
};
export default NewChatForm;
