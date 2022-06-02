import "./style.css";

import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import UserSettings from "../user-settings/UserSettings";
const Header = ({ setShowUser }) => {
  return (
    <div className="header">
      <div
        onClick={() => {
          setShowUser((p) => !p);
        }}
        className="profile-picture"
      >
        <img src={getUserPhotoUrl()} alt="" />
      </div>

      <button className="settings">
        <UserSettings />
      </button>
    </div>
  );
};
export default Header;
