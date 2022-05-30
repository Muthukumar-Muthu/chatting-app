import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Copyable from "../copyable/Copyable";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ content }) {
  console.log("content", content);
  const [open, setOpen] = React.useState(!!content);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (content) handleOpen();
  }, [content]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share the Link at the bottom with your firend to start chat
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Copyable
              content={
                <Link target={"_blank"} to={`chat/${content}`}>
                  {window.location.hostname + `/chat/${content}`}
                </Link>
              }
              copyContent={window.location.hostname + `/chat/${content}`}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
