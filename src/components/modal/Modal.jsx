import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import "./style.css";

export default function BasicModal({ component, modal, closeModal }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        display: !modal && "none",
      }}
    >
      <div className="modal">
        <component />
        <div className="close-button" onClick={closeModal}>
          <CancelPresentationIcon />
        </div>
      </div>
    </div>
  );
}
