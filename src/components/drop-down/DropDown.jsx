import { useEffect, useState } from "react";
import "./style.css";
const DropDown = ({ parent, child }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const appWrapper = document.querySelector(".App-container");
    const clickListner = (e) => {
      console.log(e.target);
      setShow(false);
    };
    appWrapper.addEventListener("click", clickListner);
    return () => {
      appWrapper.removeEventListener("click", clickListner);
    };
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
