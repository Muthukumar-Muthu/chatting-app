import "./style.css";

import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import UserSettings from "../user-settings/UserSettings";
const Header = () => {
  return (
    <div className="header">
      <div className="profile-picture">
        <img src={getUserPhotoUrl()} alt="" />
      </div>

      <button className="settings">
        <UserSettings />
      </button>
    </div>
  );
};
export default Header;
