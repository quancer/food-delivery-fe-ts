import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UploadImg from "./Upload";
import { FormGroup, TextField } from "@mui/material";
import { FormControl, Input } from "@mui/base";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateFood = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log("imgUrl", imageUrl);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handlerSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="userName" id="username" />
            <input type="submit" value="click" />
            <UploadImg imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CreateFood;
