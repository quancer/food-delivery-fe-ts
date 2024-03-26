import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CustomContext } from "@/context/ShoppingCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { DrawerListCard } from "./DrawerListCard";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ShoppingDrawer = () => {
  const { foodId } = React.useContext(CustomContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  let sum = 0;
  foodId.forEach((num) => {
    sum += num.price * num.count;
  });

  console.log("sum", sum);
  const DrawerList = (
    <Stack
      sx={{ width: "600px" }}
      role="presentation"
      p="26px"
      spacing={"20px"}
    >
      <Stack
        direction={"row"}
        spacing="171px"
        justifyContent={"flex-start"}
        alignItems="center"
      >
        <Button onClick={toggleDrawer(false)}>
          <ChevronLeftIcon />
        </Button>
        <Typography fontSize={"20px"} fontFamily="Poppins" fontWeight={"900"}>
          {"Таны сагс"}
        </Typography>
      </Stack>
      <Divider />
      <DrawerListCard setOpen={setOpen} />
      <Stack
        height={"172px"}
        direction="row"
        p="10px 32px 30px"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Stack width={"50%"}>
          <Typography fontFamily={"Poppins"} color="#5E6166" fontSize={"18px"}>
            {"Нийт төлөх дүн"}
          </Typography>
          <Typography fontFamily={"Poppins"} fontWeight="700" fontSize={"18px"}>
            {sum}
            {"₮"}
          </Typography>
        </Stack>
        <Stack width={"50%"}>
          <Button
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
      </Stack>
    </Stack>
  );

  return (
    <div>
      <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={foodId.length} color="secondary">
          <Typography>Сагс</Typography>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export { ShoppingDrawer };
