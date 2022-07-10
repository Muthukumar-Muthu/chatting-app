import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect, useState, useRef } from "react";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import {
  getUserId,
  getUserPhotoUrl,
} from "../../firebase/functions/getUserDetailsFromAuth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/services/firestore";
import uploadChatPhotoToDb from "../../firebase/functions/uploadChatPhotoToDb";
import { getChatImgUrl } from "../../firebase/functions/getChatImgUrl";
import UserPhoto from "../../assests/user-photo.jpeg";
import Image from "../image/Image";
import Input from "../input/Input";
const UserComponent = ({
  setShowUser,
  setShowUserComponent,
  userProfileCompleted,
}) => {
  /*
  const [imgHover, setImgHover] = useState(false);
  const [aboutEditing, setAboutEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    about: "",
    userImg: "",
  });
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  console.log(userDetails);
  useEffect(() => {
    let unsub = "";
    if (!userProfileCompleted) setShowUserComponent(true);
    getUserDetailsFromDb(getUserId(), setUserDetails).then(
      (re) => (unsub = re)
    );
    return () => {
      unsub();
      setShowUserComponent(false);
    };
  }, []);
  console.log(aboutEditing);

  useEffect(() => {
    getChatImgUrl(userDetails?.userImg)
      .then((url) => setProfilePicUrl(url))
      .catch((err) => console.log(err));
  }, [userDetails]);
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
    try {
      await updateDoc(doc(db, `users/${getUserId()}/`), { [key]: value });
    } catch (error) {
      console.warn("file not found", error);
      addUserProfile(key, value);
    }
  }
  async function addUserProfile(key, value) {
    console.log("trying to add doc");
    try {
      await setDoc(doc(db, `users/${getUserId()}/`), { [key]: value });
    } catch (error) {
      console.log(error);
    }
  }
  async function changeHandler(e) {
    console.log("uploading to db");
    if (e.target.files[0]) {
      try {
        const location = await uploadChatPhotoToDb(
          e.target.files[0],
          `users/${getUserId()}`
        );
        await updateUserProfile("userImg", location);
      } catch (error) {
        console.warn(error);
      }
    }
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
          <img src={profilePicUrl || getUserPhotoUrl()} alt="" />

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
              autoComplete="off"
            />
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
            autoComplete="off"
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

  */

  return (
    <div>
      <h2>UserComponent</h2>
      <Image />
      <Input onDone={() => {}} initalValue="inital Value" />
    </div>
  );
};
export default UserComponent;
