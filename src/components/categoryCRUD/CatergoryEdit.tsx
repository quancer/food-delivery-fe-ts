import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface categoryType {
  _id?: string;
  categoryName?: string;
}
const CatergoryEdit = ({ data }: { data: categoryType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("ediCat", data);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target.editName.value);
    // e.target.editName.value = e.target.editName.value;
    e.target.editName.disabled = !e.target.editName.disabled;
    console.log(e.target.editName.disabled);
    // const res = await fetch("http://localhost:4000/api/category", {
    //   body: JSON.stringify(newCategory),
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     Accept: "application.json",
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // setCategoryData(data.categories);
    // handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onChange={handleSubmit}>
            <input type="text" name="editName" />
            <input type="submit" value="done" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CatergoryEdit;
