import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/base";
import { Box, display, Stack } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { DoorFront } from "@mui/icons-material";
import { CustomContext } from "@/context/ShoppingCard";
type dataType = {
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  border: "2px solid #000",
  borderRadius: "16px",
  boxShadow: 100,
  p: 4,
};
type handleHold = {
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
  count: number;
};
const subTitle = {
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: "600",
};
const ingeredientStyle = {
  fontSize: "16px",
  color: "#767676",
  bgColor: "red",
};
export default function MediaCard({ food }: { food: dataType }) {
  const [open, setOpen] = React.useState(false);
  const [buyCount, setBuyCount] = React.useState(1);
  const { foodId, setFoodId } = React.useContext(CustomContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addFood = () => setBuyCount(buyCount + 1);
  const subFood = () => {
    const newCount = buyCount - 1;
    newCount < 1 ? setBuyCount(1) : setBuyCount(newCount);
  };
  const handleHold = () => {
    const hold = {
      title: food.title,
      image: food.image,
      ingeredient: food.ingeredient,
      category: food.category,
      price: food.price,
      count: buyCount,
    };
    const newFood = {
      foodName: food.title,
      count: buyCount,
    };
    setFoodId([...foodId, newFood]);
    handleClose();
  };
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={food.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food.ingeredient}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{food.price}</Button>
          <Button onClick={handleOpen}>{"Сагслах"}</Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
            spacing="33px"
          >
            <CardMedia
              sx={{ height: "500px", width: "500px" }}
              image={food.image}
              title="green iguana"
            />
            <Stack width={"384px"} spacing={"32px"}>
              <Stack>
                <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
                  {food.title}
                </Typography>
                <Typography sx={{ ...subTitle, color: "#18BA51" }}>
                  {food.price + "₮"}
                </Typography>
              </Stack>
              <Stack spacing={"12px"}>
                <Typography sx={subTitle}>{"Орц:"}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    padding: "8px",
                    borderRadius: "8px",
                    bgcolor: "#F6F6F6",
                  }}
                >
                  <Typography sx={ingeredientStyle}>
                    {food.ingeredient}
                  </Typography>
                </Box>
              </Stack>
              <Typography sx={subTitle}>{"Тоо"}</Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems="center"
                spacing={"20px"}
                // flexWrap="nowrap"
              >
                <Button
                  variant="outlined"
                  onClick={subFood}
                  sx={{
                    width: "45px",
                    borderRadius: "10px",
                    bgcolor: "#18BA51",
                    height: "45px",
                    display: "flex",
                    padding: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    flexShrink: "1",
                  }}
                >
                  <RemoveIcon />
                </Button>

                <Typography
                  sx={{
                    // padding: " 4px 30px",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  {buyCount}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={addFood}
                  sx={{
                    width: "45px",
                    borderRadius: "10px",
                    bgcolor: "#18BA51",
                    height: "45px",
                    display: "flex",
                    padding: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  <AddIcon />
                </Button>
              </Stack>
              <Button
                onClick={handleHold}
                sx={{
                  borderRadius: "4px",
                  bgcolor: "#18BA51",
                  display: "flex",
                  padding: "8px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                {"Сагслах"}
              </Button>
            </Stack>
            <Box
              onClick={handleClose}
              sx={{ position: "absolute", right: "32px", top: "32px" }}
            >
              <CloseIcon />
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
