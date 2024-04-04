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
  TextField,
} from "@mui/material";
import { CustomContext } from "@/context/ShoppingCard";
import { Stack } from "@mui/system";

// const foodSchema = new Schema({
//   foodName: String,
//   foodImage: String,
//   ingeredient: String,
//   price: Number,
//   sale: Number,
//   categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
// });
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
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
  const { categoryData, setCategoryData } = React.useContext(CustomContext);
  const [age, setAge] = React.useState("Hool");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    const newFood = {
      foodName: e.target.username.value,
      foodImage: imageUrl,
      ingeredient: e.target.ingeredient.value,
      price: e.target.price.value,
      sale: e.target.sale.value,
      categoryId: e.target.cat.value,
    };
    const res = await fetch("http://localhost:4000/api/createfood", {
      body: JSON.stringify(newFood),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data", data.categories);
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
            <Stack spacing={5}>
              <TextField
                id="outlined-basic"
                label="Хоолны нэр"
                variant="outlined"
                name="username"
              />
              <TextField
                id="outlined-basic"
                label="Хоолны орц"
                variant="outlined"
                name="ingeredient"
              />
              <TextField
                id="outlined-basic"
                label="Хоолны үнэ"
                variant="outlined"
                name="price"
                type={"number"}
              />
              <TextField
                id="outlined-basic"
                label="Хямдарсан хувь"
                variant="outlined"
                name="sale"
                type={"number"}
              />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Ангилал</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Ангилал"
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
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CreateFood;
