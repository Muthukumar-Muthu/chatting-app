import "./style.css";

import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import UserSettings from "../user-settings/UserSettings";
import UserPhoto from "../../assests/user-photo.jpeg";
const Header = ({ setShowUser, userDetails }) => {
  return (
    <div className="header">
      <div
        onClick={() => {
          setShowUser((p) => !p);
        }}
        className="profile-picture"
      >
        <img
          src={userDetails?.userImg || getUserPhotoUrl() || UserPhoto}
          alt=""
        />
      </div>

      <button className="settings">
        <UserSettings />
      </button>
    </div>
  );
};
export default Header;
