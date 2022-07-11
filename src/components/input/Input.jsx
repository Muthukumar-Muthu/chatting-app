import { useState, useRef, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import "./style.css";
const Input = ({ onDone, initalValue, label }) => {
  const [value, setValue] = useState(initalValue);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

  return (
    <div className="input">
      <label htmlFor="name">{label}</label>
      <div className="values">
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          spellCheck="false"
          disabled={!edit ? true : false}
          autoComplete="off"
        />
        <span className="edit-button">
          {edit ? (
            <DoneIcon
              onClick={() => {
                onDone();
                setEdit(false);
              }}
            />
          ) : (
            <EditIcon onClick={() => setEdit(true)} />
          )}
        </span>
      </div>
    </div>
  );
};
export default Input;
