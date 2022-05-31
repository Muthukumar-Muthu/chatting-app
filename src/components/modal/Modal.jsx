import "./style.css";

import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
// import * as React from "react";
// import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Copyable from "../copyable/Copyable";
// import { Link } from "react-router-dom";
// import NewChatForm from "../newChatForm/NewChatForm";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal({ setOpenModal }) {
//   const [open, setOpen] = React.useState(true);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpenModal(false);
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography
//             style={{
//               marginInline: "auto",
//             }}
//             id="modal-modal-title"
//             variant="h6"
//             component="h2"
//           >
//             New Chat Form
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <NewChatForm handleClose={handleClose} />
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

export default function BasicModal({ openModal, component, setOpenModal }) {
  console.log(openModal);

  return (
    <div
      className="modal-wrapper"
      style={{
        display: !openModal && "none",
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
