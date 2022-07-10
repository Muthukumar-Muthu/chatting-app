import "./style.css";

import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import UserSettings from "../user-settings/UserSettings";
import UserPhoto from "../../assests/user-photo.jpeg";
import { useEffect, useState } from "react";
import { getChatImgUrl } from "../../firebase/functions/getChatImgUrl";
const Header = ({
  setShowUser,
  userDetails,
  setShowChatDetials,
  setShowUserComponent,
}) => {
  const [userProfile, setUserProfile] = useState("");
  // useEffect(() => {
  //   getChatImgUrl(userDetails.userImg).then(setUserProfile);
  // }, [userDetails]);
  return (
    <div className="header">
      <div
        onClick={() => {
          setShowUserComponent((p) => !p);
        }}
        className="profile-picture"
      >
        <img src={UserPhoto} alt="" />
      </div>
      {/* 
      <button className="settings">
        <UserSettings />
      </button> */}
    </div>
  );
};
export default Header;
