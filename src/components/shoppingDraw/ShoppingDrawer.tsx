import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { CardMedia, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CustomContext } from "@/context/ShoppingCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import { Stack } from "@mui/system";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const style = {
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

const ShoppingDrawer = () => {
  const { foodId, setFoodId } = React.useContext(CustomContext);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Stack
      sx={{ width: "600px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {foodId.map((food, index) => {
        return (
          <div key={index}>
            <Box sx={style}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"nowrap"}
                spacing="33px"
              >
                <CardMedia
                  sx={{ height: "150px", width: "150px" }}
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
                      // onClick={subFood}
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
                      {food.count}
                    </Typography>
                    <Button
                      variant="outlined"
                      // onClick={addFood}
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
                    // onClick={handleHold}
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
                  // onClick={handleClose}
                  sx={{ position: "absolute", right: "32px", top: "32px" }}
                >
                  <CloseIcon />
                </Box>
              </Stack>
            </Box>
          </div>
        );
      })}
    </Stack>
  );

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={foodId.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Button onClick={toggleDrawer(true)}>Sags</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export { ShoppingDrawer };
