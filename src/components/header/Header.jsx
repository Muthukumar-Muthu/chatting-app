import "./style.css";

import ThreeDots from "../ThreeDots";
import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
const Header = () => {
  return (
    <div className="header">
      <div className="profile-picture">
        <img src={getUserPhotoUrl()} alt="" />
      </div>

      <button className="settings">
        <ThreeDots />
      </button>
    </div>
  );
};
export default Header;
