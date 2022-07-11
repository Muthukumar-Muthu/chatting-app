import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect, useState, useRef } from "react";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import {
  getUserId,
  getUserName,
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
  const [userDetails, setUserDetails] = useState({
    name: "",
    about: "",
    userImg: "",
  });
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const nameRef = useRef(null);
  const aboutRef = useRef(null);

  // useEffect(() => {
  //   let unsub = "";
  //   if (!userProfileCompleted) setShowUserComponent(true);
  //   getUserDetailsFromDb(getUserId(), setUserDetails).then(
  //     (re) => (unsub = re)
  //   );
  //   return () => {
  //     unsub();
  //     setShowUserComponent(false);
  //   };
  // }, []);

  useEffect(() => {
    getChatImgUrl(userDetails?.userImg)
      .then((url) => setProfilePicUrl(url))
      .catch((err) => console.log(err));
  }, [userDetails]);

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
            setShowUserComponent(false);
          }}
        >
          <ArrowBackIcon />
        </span>
        <span>Profile</span>
      </header>
      <div className="bottom">
        <Image src={getUserPhotoUrl()} />
        <Input
          label="Your Name"
          onDone={() => {}}
          initalValue={getUserName()}
        />
        <Input label="About" onDone={() => {}} initalValue="Busy" />
        <p>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
      </div>
      {/* <div className="inputs">
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
      </div> */}
    </div>
  );

  // return (
  //   <div>
  //     <h2>UserComponent</h2>
  //     <Image />
  //     <Input onDone={() => {}} initalValue="inital Value" />
  //   </div>
  // );
};
export default UserComponent;
