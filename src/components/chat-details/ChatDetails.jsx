import "./style.css";
import { useState, useEffect } from "react";
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
const ChatDetails = ({ showChat, setShowChatDetails }) => {
  const [imgHover, setImgHover] = useState(false);
  // const [profilePicUrl, setProfilePicUrl] = useState("");
  const [chatOwner, setChatOwner] = useState({});
  const chatCreatedTime = timeStampToDate(showChat?.createdAt);
  const timeString = `on ${chatCreatedTime[0]} at ${chatCreatedTime[1]}`;
  const participant = showChat.membersId || [];
  useEffect(() => {
    getUserDetailsFromDb(showChat?.createdBy, setChatOwner).catch((err) =>
      console.warn(err)
    );
  }, [showChat]);

  async function changeHandler(e) {
    // if (e.target.files[0]) {
    //   try {
    //     const location = await uploadChatPhotoToDb(
    //       e.target.files[0],
    //       `users/${getUserId()}`
    //     );
    //     //      await updateUserProfile("userImg", location);
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // }
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
          <img src={showChat?.chatImg} alt="" />

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
              type="text"
              value={showChat?.chatName}
              id="name"
              spellCheck="false"
              readOnly
            />
            <span className="edit-button">
              <DoneIcon />
              <EditIcon />
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
              type="text"
              value={showChat?.chatAbout}
              id="name"
              spellCheck="false"
              readOnly
            />
            <span className="edit-button">
              <DoneIcon />
              <EditIcon />
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
