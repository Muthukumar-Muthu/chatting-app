import { useState, useEffect } from "react";
import { getChatImgUrl } from "../../firebase/functions/getChatImgUrl";
import { getUserPhotoUrl } from "../../firebase/functions/getUserDetailsFromAuth";
import getUserDetailsFromDb from "../../firebase/functions/getUserDetailsFromDb";
import "./style.css";
const Participant = ({ id }) => {
  console.log(id);
  const [userDetails, setUserDetails] = useState({});
  const [userImg, setUserImg] = useState(null);

  useEffect(() => {
    getUserDetailsFromDb(id, setUserDetails)
      .then(
        getChatImgUrl(userDetails.userImg).then((url) => {
          console.log(url);

          setUserImg(url);
        })
      )
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="participant">
      <div className="user-image">
        <img src={userImg} alt="" />
      </div>
      <div className="name_and_about">
        <span className="name">{userDetails?.name}</span>
        <p className="about">{userDetails?.about}</p>
      </div>
    </div>
  );
};
export default Participant;
