import "./style.css";

import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Image = ({ src }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="img-container"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <img src={src} alt="" />

      <span
        className="img-cover"
        style={{
          display: !hover && "none",
        }}
        title={"Photo Picker"}
      >
        <span className="grp">
          <span>
            <PhotoCameraIcon />
            <span>change profile picture</span>
          </span>
          <input
            type="file"
            alt="profile-picture"
            title=""
            accept="image/*"
            autoComplete="off"
          />
        </span>
      </span>
    </div>
  );
};
export default Image;
