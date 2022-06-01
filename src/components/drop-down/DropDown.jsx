import { useEffect, useState } from "react";
import "./style.css";
const DropDown = ({ parent, child }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const appWrapper = document.querySelector(".App-container");
    appWrapper.addEventListener("click", (e) => {
      console.log(e.target);

      setShow(false);
    });
  }, []);
  console.log(show);
  return (
    <div className="drop-down-wrapper">
      <span className="parent" onClick={() => setShow(true)}>
        {parent}
      </span>
      <div
        className="drop-down"
        style={{
          display: !show && "none",
        }}
      >
        {child}
      </div>
    </div>
  );
};
export default DropDown;
