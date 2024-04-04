import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import UploadImg from "./Upload";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CustomContext } from "@/context/ShoppingCard";

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
  const [age, setAge] = React.useState("");
  const { categoryData, setCategoryData } = React.useContext(CustomContext);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.userName.value, e.target.cat.value);
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
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  name="cat"
                >
                  {categoryData.map((data, index) => {
                    return (
                      <MenuItem key={index} value={data._id}>
                        {data.categoryName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <input type="submit" value="click" />
            <UploadImg imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CreateFood;
