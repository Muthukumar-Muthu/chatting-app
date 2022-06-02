import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";

import Copyable from "../copyable/Copyable";
import "./style.css";
const NewChatForm = ({ setOpenModal, openModal }) => {
  const [chatName, setChatName] = useState("");
  const [chatAbout, setChatAbout] = useState("");
  const [chatImg, setChatImg] = useState(null);
  const [chatId, setChatId] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const chatNameRef = useRef(null);
  const chatImgRef = useRef(null);
  console.log(chatImg);
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 1000);
    }
  }, [error]);

  function changeHandlerForChatName(e) {
    setChatName(e.target.value);
  }
  function changeHandlerForChatAbout(e) {
    setChatAbout(e.target.value);
  }
  function changeHandlerForChatPhoto(e) {
    setChatImg(e.target.files[0]);
  }
  async function submitHandler(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    console.log("submitting chat Details");
    if (!(chatName && chatAbout && chatImg)) {
      setError(true);
      return;
    }
    const id = await generateNewChat(getUserId(), chatName, chatAbout, chatImg);
    setChatId(id);
    setLoading(false);
  }
  return (
    <>
      {chatId ? (
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
            <label htmlFor="chat-photo">Chat Photo</label>
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
            Submit {loading && <span>Loading...</span>}
          </button>
        </form>
      )}
    </>
  );
};
export default NewChatForm;
