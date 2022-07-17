import { useState } from "react";
import { Link } from "react-router-dom";

import { generateNewChat } from "../../firebase/functions";
import "./style.css";
const NewChatForm = () => {
  const [newChat, setNewChat] = useState({
    data: {},
    error: null,
    loading: false,
  });
  const {
    data: { chatId },
    loading,
  } = newChat;
  const [formData, setFormData] = useState({
    error: "",
  });

  function changeHandler(e, type = "") {
    const value = e.target.value;
    const name = e.target.name;
    if (type.includes("file")) {
      const file = e.target.files[0];
      setFormData((p) => ({
        ...p,

        [name]: file,
      }));
    } else {
      if (value.length > 10) {
        return;
      } else {
        setFormData((p) => ({
          ...p,
          [name]: value,
        }));
      }
    }
  }

  if (formData.error) {
    setTimeout(() => {
      setFormData((p) => ({ ...p, error: false }));
    }, 1000);
  }
  async function submitHandler(e) {
    e.preventDefault();
    setNewChat((p) => ({ ...p, loading: true }));
    const result = validateField(formData);
    if (!result) {
      setFormData((p) => ({ ...p, error: result.field }));
      setNewChat((p) => ({ ...p, loading: false }));
    } else {
    }
    try {
      const { chatName, chatAbout, chatImage } = formData;
      console.log("Generating new chat");
      const id = await generateNewChat(chatName, chatAbout, chatImage);
      setNewChat((p) => ({ ...p, loading: false, data: { chatId: id } }));
    } catch (error) {
      console.error("error while submiting");
    }
  }
  return (
    <>
      {chatId ? (
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
      ) : (
        <form className="newChat">
          <Input
            data={formData}
            changeHandler={changeHandler}
            label="chat name"
            id="chatName"
          />
          <Input
            data={formData}
            changeHandler={changeHandler}
            label="chat about"
            id="chatAbout"
          />
          <div className="flex">
            <label htmlFor="chat-photo">Chat Photo</label>
            <input
              style={{
                border: formData.error ? "thin solid red" : "",
              }}
              type="file"
              id="chat-photo"
              accept="image/png, image/jpeg"
              name="chatImage"
              onChange={(e) => {
                changeHandler(e, "file");
              }}
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

function Input({ data, changeHandler, label, id }) {
  const { [label]: value, error } = data;

  return (
    <>
      <label htmlFor={id}>
        {label}
        <span
          style={{ marginLeft: "10px", fontSize: "smaller", color: "grey" }}
        >
          (only 10 characters)
        </span>
      </label>
      <input
        style={{
          border: error.field ? "thin solid red" : "",
        }}
        type="text"
        id={id}
        name={id}
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

function validateField(object) {
  for (const key of Object.keys(object)) {
    if (!object[key])
      return {
        field: key,
      };
  }
}
