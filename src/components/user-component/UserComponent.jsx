import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
const UserComponent = ({ setShowUser }) => {
  const [imgHover, setImgHover] = useState(false);
  console.log(imgHover);

  return (
    <div className="user-component">
      <header>
        <span
          className="back-arrow"
          onClick={() => {
            setShowUser(false);
          }}
        >
          <ArrowBackIcon />
        </span>
        <span>Profile</span>
      </header>
      <div className="user-photo">
        <div
          className="hover-purpose"
          onMouseOver={() => {
            setImgHover(true);
          }}
          onMouseOut={() => {
            setImgHover(false);
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GgW5GVmkcberrrJG1lDmiA8hWS3x-LA8YW_7ts5=s96-c"
            alt=""
          />
          <span
            className="img-cover"
            style={{
              display: !imgHover && "none",
            }}
            title={"Photo Picker"}
          >
            <span>
              <PhotoCameraIcon />
            </span>
            <span> change profile picture</span>
          </span>
        </div>
      </div>
      <div className="inputs">
        <label htmlFor="name">Your Name</label>
        <div className="values">
          <input type="text" id="name" readOnly value={"Muthu Kumar M"} />
          <span className="edit-button">
            <EditIcon />
          </span>
        </div>
      </div>
      <p>
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts.
      </p>
      <div className="inputs">
        <label htmlFor="about">About</label>
        <div className="values">
          <input
            type="text"
            id="about"
            readOnly
            value={"You get out ,what you put in🔥"}
          />
          <span className="edit-button">
            <EditIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default UserComponent;
