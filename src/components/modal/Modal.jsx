import "./style.css";

import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export default function BasicModal({ openModal, component, setOpenModal }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        display: !openModal && "  none",
      }}
    >
      <div className="modal">
        {component}
        <div className="close-button" onClick={() => setOpenModal(false)}>
          <CancelPresentationIcon />
        </div>
      </div>
    </div>
  );
}
