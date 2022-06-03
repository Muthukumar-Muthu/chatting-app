import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect, useState, useRef } from "react";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import { getUserId } from "../../firebase/functions/getUserDetailsFromAuth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/services/firestore";
const UserComponent = ({ setShowUser }) => {
  const [imgHover, setImgHover] = useState(false);
  const [aboutEditing, setAboutEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const nameRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const unsub = getUserDetailsFromDb(getUserId(), setUserDetails);
    return unsub;
  }, []);
  console.log(aboutEditing);

  useEffect(() => {
    if (nameEditing) {
      setName(userDetails.name);
      nameRef.current?.focus();
    } else setName("");
  }, [nameEditing]);
  useEffect(() => {
    if (aboutEditing) {
      setAbout(userDetails.about);
      aboutRef.current.focus();
    }
  }, [aboutEditing]);
  async function updateUserProfile(key, value) {
    await updateDoc(doc(db, `users/${getUserId()}/`), { [key]: value });
  }
  return (
    <div className="user-component">
      <header>
        <span
          className="back-arrow"
          onClick={() => {
            setShowUser(false);
          }}
        >
          <ArrowBackIcon />
        </span>
        <span>Profile</span>
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
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GgW5GVmkcberrrJG1lDmiA8hWS3x-LA8YW_7ts5=s96-c"
            alt=""
          />
          <span
            className="img-cover"
            style={{
              display: !imgHover && "none",
            }}
            title={"Photo Picker"}
          >
            <span>
              <PhotoCameraIcon />
            </span>
            <span>change profile picture</span>
          </span>
        </div>
      </div>
      <div className="inputs">
        <label htmlFor="name">Your Name</label>
        <div className="values">
          <input
            ref={nameRef}
            type="text"
            id="name"
            onChange={(e) => {
              nameEditing && setName(e.target.value);
            }}
            value={nameEditing ? name : userDetails.name}
            spellCheck="false"
            disabled={!nameEditing ? true : false}
          />
          <span className="edit-button">
            {nameEditing ? (
              <DoneIcon
                onClick={() => {
                  updateUserProfile("name", name);
                  setNameEditing(false);
                }}
              />
            ) : (
              <EditIcon onClick={() => setNameEditing(true)} />
            )}
          </span>
        </div>
      </div>
      <p>
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts.
      </p>
      <div className="inputs">
        <label htmlFor="about">About</label>
        <div className="values">
          <input
            ref={aboutRef}
            type="text"
            id="about"
            value={aboutEditing ? about : userDetails.about}
            onChange={(e) => {
              aboutEditing && setAbout(e.target.value);
            }}
            disabled={!aboutEditing ? true : false}
          />
          <span className="edit-button">
            {aboutEditing ? (
              <DoneIcon
                onClick={() => {
                  updateUserProfile("about", about);
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
  );
};
export default UserComponent;
