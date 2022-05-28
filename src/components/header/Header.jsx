import "./style.css";
import userphoto from "../../assests/user-photo.jpeg";
import ThreeDots from "../ThreeDots";
const Header = () => {
  return (
    <div className="header">
      <div className="profile-picture">
        <img src={userphoto} alt="" />
      </div>

      <button className="settings">
        <ThreeDots />
      </button>
    </div>
  );
};
export default Header;
