import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import "./style.css";
const Participant = () => {
  return (
    <div className="participant">
      <div className="user-image">
        <img src={getUserPhotoUrl()} alt="" />
      </div>
      <div className="name_and_about">
        <span className="name">MuthuKumar M</span>
        <p className="about">You get out,what you put in💖</p>
      </div>
    </div>
  );
};
export default Participant;
