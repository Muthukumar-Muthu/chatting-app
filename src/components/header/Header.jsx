import "./style.css";
import NewChat from "../newChat/NewChat";
import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";

const Header = () => {
  return (
    <div className="header">
      <img src={getUserPhotoUrl()} alt="" />
    </div>
  );
};
export default Header;
