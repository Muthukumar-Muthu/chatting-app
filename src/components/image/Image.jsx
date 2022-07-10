import "./style.css";

import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Image = () => {
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
      <img src={"https://picsum.photos/200/300"} alt="" />

      <span
        className="img-cover"
        style={{
          display: !hover && "none",
        }}
        title={"Photo Picker"}
      >
        <span className="grp">
          <span className="">
            <PhotoCameraIcon />
            <span>change profile picture</span>
          </span>
          <input
            className="profile-pic"
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
