import { useState } from "react";
import "./style.css";
import copyToClipBoard from "../../functions/copyToClipBoard";
const Copyable = ({ content, copyContent }) => {
  const [copied, setCopied] = useState(false);
  console.log(copyContent);

  return (
    <span className="copy-element">
      {content}
      <span
        onClick={() => {
          copyToClipBoard(copyContent).then((response) => setCopied(response));
        }}
      >
        {copied ? "copied" : "copy"}
      </span>
    </span>
  );
};
export default Copyable;
