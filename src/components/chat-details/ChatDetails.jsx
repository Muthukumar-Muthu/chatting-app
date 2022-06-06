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
const ChatDetails = () => {
  const [imgHover, setImgHover] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [chatDetails, setChatDetails] = useState({});
  useEffect(() => {
    getChatImgUrl(chatDetails?.userImg)
      .then((url) => setProfilePicUrl(url))
      .catch((err) => console.log(err));
  }, [chatDetails]);

  async function changeHandler(e) {
    if (e.target.files[0]) {
      try {
        const location = await uploadChatPhotoToDb(
          e.target.files[0],
          `users/${getUserId()}`
        );
        //      await updateUserProfile("userImg", location);
      } catch (error) {
        console.warn(error);
      }
    }
  }
  return (
    <section className="chat-details-right">
      <header className="chat-details-header">
        <span className="cross-icon">
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
          <img src={profilePicUrl} alt="" />

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
              value={"Important"}
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
        <span>Group · {1} participant</span>
      </div>
      <div className="inputs-wrapper">
        <div className="inputs">
          <label htmlFor="name">About</label>
          <div className="values">
            <input
              type="text"
              value={"Important"}
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
        <span>Group created by you, on 09/11/2021 at 7:02 pm</span>
      </div>
      <div className="group-participants ">
        <span>1 participant</span>
        <ul>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
          <li>
            <Participant />
          </li>
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
