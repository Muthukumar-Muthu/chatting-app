import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import "./style.css";

export default function BasicModal({ Component, modal, closeModal }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        display: !modal && "none",
      }}
    >
      <div className="modal">
        <Component />
        <div className="close-button" onClick={closeModal}>
          <CancelPresentationIcon />
        </div>
      </div>
    </div>
  );
}
