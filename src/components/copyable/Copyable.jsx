import { useState } from "react";
import "./style.css";
import copyToClipBoard from "../../functions/copyToClipBoard";
const Copyable = ({ content, copyContent }) => {
  const [copied, setCopied] = useState(false);

  return (
    <span style={{ height: "100%", width: "100%" }} className="copy-element">
      {content}
      <button
        className="copy-button"
        onClick={() => {
          copyToClipBoard(copyContent).then((response) => setCopied(response));
        }}
      >
        {copied ? "copied" : "copy"}
      </button>
    </span>
  );
};
export default Copyable;
