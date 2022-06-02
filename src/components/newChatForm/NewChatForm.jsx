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
  const [chatAbout, setChatAbout] = useState("");
  const [chatImg, setChatImg] = useState(null);
  const [chatImgUrl, setChatImgUrl] = useState("");
  const [chatId, setChatId] = useState("");
  const [imgUploading, setImgUploading] = useState(false);
  const [newChatDone, setNewChatDone] = useState(false);
  const [error, setError] = useState(false);
  const chatNameRef = useRef(null);
  const chatImgRef = useRef(null);
  console.log(chatImg);

  useEffect(() => {
    if (openModal) {
      chatNameRef.current?.focus();
      console.log("running new chat");
      generateNewChat(getUserId())
        .then((id) => setChatId(id))
        .catch((err) => console.warn(err));
    }
  }, [openModal]);
  useEffect(() => {
    console.log(chatImgUrl);
    if (chatImgUrl) {
      setError(true);
      console.log(`while submitting chatImgUrl ${chatImgUrl}`);
      updateChatDetail(chatId, chatName, chatImgUrl, chatAbout).then(
        setNewChatDone(true)
      );
    }
  }, [chatImgUrl]);
  function changeHandlerForChatName(e) {
    setChatName(e.target.value);
  }
  function changeHandlerForChatAbout(e) {
    setChatAbout(e.target.value);
  }
  function changeHandlerForChatPhoto(e) {
    setChatImg(e.target.files[0]);
  }
  function submitHandler(e) {
    setError(false);
    console.log("submitting chat Details");
    e.preventDefault();
    if (!(chatId && chatImg && chatAbout)) {
      console.log("not submitting");
      setError(true);
      return;
    }
    setImgUploading(true);
    uploadChatPhotoToDb(chatImg, `chats/${chatId}/chatImg`).then((imgUrl) => {
      console.log(imgUrl);
      setChatImgUrl(imgUrl);
      setImgUploading(false);
    });
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
              style={{
                border: error ? "thin solid red" : "",
              }}
              ref={chatNameRef}
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
            <label htmlFor="chat-name">Chat About</label>
            <input
              style={{
                border: error ? "thin solid red" : "",
              }}
              type="text"
              name="Chat about"
              id="chat-about"
              placeholder="This chat is about..."
              value={chatAbout}
              onChange={changeHandlerForChatAbout}
              required
              autoComplete="off"
              autoCorrect="false"
            />
          </span>
          <span className="flex">
            <label htmlFor="chat-photo">
              Chat Photo
              {imgUploading && (
                <span
                  style={{
                    backgroundColor: "red",
                    fontSize: "medium",
                    color: "black",
                    padding: "0.2em",
                  }}
                >
                  Uploading...
                </span>
              )}
            </label>
            <input
              style={{
                border: error ? "thin solid red" : "",
              }}
              ref={chatImgRef}
              type="file"
              name="Chat Photo"
              id="chat-photo"
              accept="image/png, image/jpeg"
              onChange={changeHandlerForChatPhoto}
              required
            />
          </span>

          <button
            type="submit"
            className="submit-button"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};
export default NewChatForm;
