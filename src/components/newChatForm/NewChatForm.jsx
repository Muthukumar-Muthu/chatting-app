import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import generateNewChat from "../../firebase/functions/generateNewChat";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import checkCharacters from "../../functions/checkCharacter";
import Copyable from "../copyable/Copyable";
import "./style.css";
const NewChatForm = ({ setOpenModal, openModal }) => {
  const [chatName, setChatName] = useState("");
  const [chatAbout, setChatAbout] = useState("");
  const [chatImg, setChatImg] = useState(null);
  const [chatId, setChatId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function changeHandlerForChatPhoto(e) {
    setChatImg(e.target.files[0]);
  }

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    if (error) {
      setLoading(false);
      console.log(error);
      return;
    }
    console.log("submitting chat Details");
    if (!(chatName && chatAbout && chatImg)) {
      setError(true);
      return;
    }
    try {
      const id = await generateNewChat(
        getUserId(),
        chatName,
        chatAbout,
        chatImg
      );
      setChatId(id);
    } catch (error) {
      console.error("error while submiting");

      setLoading(false);
    }
  }
  return (
    <>
      {chatId ? (
        <Copyable
          content={
            <div>
              <h2
                style={{
                  textAlign: "center",
                  marginBlock: "0.25em",
                  paddingBlock: "0.5em",
                  border: "1px solid lightgrey",
                }}
              >
                Share this Link with your Friends🤞
              </h2>
              <Link
                style={{
                  fontSize: "medium",
                }}
                target={"_blank"}
                to={`chat/${chatId}`}
              >
                {window.location.hostname + `/chat/${chatId}`}
              </Link>
            </div>
          }
          copyContent={window.location.hostname + `/chat/${chatId}`}
        />
      ) : (
        <form className="newChat">
          <Input
            value={chatName}
            setValue={setChatName}
            error={error}
            setError={setError}
            label="chat name"
          />
          <Input
            value={chatAbout}
            setValue={setChatAbout}
            error={error}
            setError={setError}
            label="chat about"
          />
          <div className="flex">
            <label htmlFor="chat-photo">Chat Photo</label>
            <input
              style={{
                border: error ? "thin solid red" : "",
              }}
              type="file"
              name="Chat Photo"
              id="chat-photo"
              accept="image/png, image/jpeg"
              onChange={changeHandlerForChatPhoto}
              required
            />
          </div>
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

function Input({ value, setValue, error, setError, label }) {
  function changeHandler(e) {
    setValue(e.target.value);
    if (!checkCharacters(e.target.value, 10)) {
      setError(true);
    } else setError(false);
  }
  return (
    <>
      <label htmlFor={label}>
        {label}
        <span
          style={{ marginLeft: "10px", fontSize: "smaller", color: "grey" }}
        >
          (only 10 characters)
        </span>
      </label>
      <input
        style={{
          border: error ? "thin solid red" : "",
        }}
        type="text"
        name={label}
        id={label}
        value={value}
        placeholder={label}
        onChange={changeHandler}
        required
        autoComplete="off"
        autoCorrect="false"
      />
    </>
  );
}
