import "./style.css";
import { useState, useEffect, useRef } from "react";
import { getChatImgUrl } from "../../firebase/functions/getChatImgUrl";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import uploadChatPhotoToDb from "../../firebase/functions/uploadChatPhotoToDb";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Participant from "../participant/Participant";
import timeStampToDate from "../../firebase/functions/timeStampToDate";
import trimMsg from "../../functions/trimMsg";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import {
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/services/firestore";
const ChatDetails = ({ showChat, setShowChatDetails }) => {
  const [imgHover, setImgHover] = useState(false);
  const [chatDetail, setChatDetail] = useState({});
  const [chatOwner, setChatOwner] = useState({});
  const [aboutEditing, setAboutEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const chatCreatedTime = timeStampToDate(showChat?.createdAt);
  const timeString = `on ${chatCreatedTime[0]} at ${chatCreatedTime[1]}`;
  const participant = showChat.membersId || [];
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    getUserDetailsFromDb(showChat?.createdBy, setChatOwner).catch((err) =>
      console.warn(err)
    );
    connectChatDetailToDb(showChat?.chatId);
  }, [showChat]);
  useEffect(() => {
    if (nameEditing) {
      setName(chatDetail?.chatName);
      nameRef.current?.focus();
    } else setName("");
  }, [nameEditing]);
  useEffect(() => {
    if (aboutEditing) {
      setAbout(chatDetail?.chatAbout);
      aboutRef.current.focus();
    }
  }, [aboutEditing]);

  async function updateChatDetail(key, value) {
    console.log(chatDetail?.chatId);
    try {
      await updateDoc(doc(db, `chats`, chatDetail?.chatId), { [key]: value });
    } catch (error) {
      console.warn("file not found", error);
      addUserProfile(key, value);
    }
  }
  async function addUserProfile(key, value) {
    console.log("trying to add doc");
    try {
      await setDoc(doc(db, `chats`, chatDetail?.chatId), { [key]: value });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(chatDetail);

  async function connectChatDetailToDb(chatId) {
    console.log(`in chat Details, ${chatId}`);
    let unSubcribe = {};
    try {
      unSubcribe = onSnapshot(doc(db, `chats/${chatId}`), (snapshot) => {
        console.log(`updated`);
        try {
          const { chatImg } = snapshot.data();
          const chatId = snapshot.id;
          getChatImgUrl(chatImg).then((url) => {
            setChatDetail({ ...snapshot.data(), chatImg: url, chatId });
          });
        } catch (error) {
          console.log(error, "error while getting chat details");
        }
      });
    } catch (error) {
      console.log(error, "error while getting chat details");
    }
  }
  async function changeHandler(e) {
    try {
      await uploadChatPhotoToDb(
        e.target.files[0],
        `chats/${showChat.chatId}/chatImg`
      );
      const docRef = doc(db, "chats", chatDetail.chatId);
      await updateDoc(docRef, {
        lastUpdateTime: serverTimestamp(),
      });
    } catch (error) {
      console.error("here", error);
    }
  }
  return (
    <section className="chat-details-right">
      <header className="chat-details-header">
        <span
          className="cross-icon"
          onClick={() => {
            setShowChatDetails(false);
          }}
        >
          <CloseIcon />
        </span>
        <span>Group info</span>
      </header>
      <div className="user-photo">
        <div
          className="hover-purpose"
          onMouseOver={() => {
            setImgHover(true);
          }}
          onMouseOut={() => {
            setImgHover(false);
          }}
        >
          <img src={chatDetail?.chatImg} alt="" />

          <span
            className="img-cover"
            style={{
              display: !imgHover && "none",
            }}
            title={"Photo Picker"}
          >
            <span className="hover-container">
              <PhotoCameraIcon />

              <span>change profile picture</span>
            </span>
            <input
              className="profile-pic"
              type="file"
              alt="profile-picture"
              title=""
              accept="image/*"
              onChange={changeHandler}
            />
          </span>
        </div>
      </div>
      <div className="inputs-wrapper">
        <div className="inputs">
          <label htmlFor="name">Chat Name</label>
          <div className="values">
            <input
              ref={nameRef}
              type="text"
              id="name"
              spellCheck="false"
              onChange={(e) => {
                nameEditing && setName(e.target.value);
              }}
              value={nameEditing ? name : chatDetail?.chatName}
              disabled={!nameEditing ? true : false}
              autoComplete="off"
            />
            <span className="edit-button">
              {nameEditing ? (
                <DoneIcon
                  onClick={() => {
                    updateChatDetail("chatName", name);
                    setNameEditing(false);
                  }}
                />
              ) : (
                <EditIcon onClick={() => setNameEditing(true)} />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="group-members center-content">
        <span>
          Group · 
          {`${showChat?.membersId?.length} ${
            showChat?.membersId?.length === 1 ? "participant" : "participants"
          }`}
        </span>
      </div>
      <div className="inputs-wrapper">
        <div className="inputs">
          <label htmlFor="name">About</label>
          <div className="values">
            <input
              ref={aboutRef}
              type="text"
              id="name"
              spellCheck="false"
              value={aboutEditing ? about : chatDetail?.chatAbout}
              onChange={(e) => {
                aboutEditing && setAbout(e.target.value);
              }}
              disabled={!aboutEditing ? true : false}
            />
            <span className="edit-button">
              {aboutEditing ? (
                <DoneIcon
                  onClick={() => {
                    updateChatDetail("chatAbout", about);
                    setAboutEditing(false);
                  }}
                />
              ) : (
                <EditIcon onClick={() => setAboutEditing(true)} />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="center-content create-time">
        <span>
          Group created by {chatOwner.name}, {timeString}
        </span>
      </div>
      <div className="group-participants ">
        <span>1 participant</span>
        <ul>
          {participant.map((id) => (
            <Participant key={id} id={id} />
          ))}
        </ul>
      </div>
      <div className="exit-group">
        <ExitToAppIcon />
        <span>Exit group</span>
      </div>
    </section>
  );
};
export default ChatDetails;
