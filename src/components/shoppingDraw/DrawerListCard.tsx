import Box from "@mui/material/Box";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import { Button, CardMedia, Typography } from "@mui/material";
import { CustomContext } from "@/context/ShoppingCard";
import React, { Dispatch, SetStateAction } from "react";
export const DrawerListCard = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { foodId, setFoodId } = React.useContext(CustomContext);
  const removeHandle = (prop: number) => {
    const newFood = foodId.filter((data, item) => item != prop);
    setOpen(true);
    setFoodId(newFood);
  };
  return (
    <Stack>
      {foodId.map((food, index) => {
        return (
          <Stack direction={"row"} key={index}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"nowrap"}
              spacing="33px"
              sx={{ padding: "16px" }}
              position="relative"
              width={"100%"}
            >
              <CardMedia
                sx={{ height: "100%", width: "50%" }}
                image={food.image}
                title="green iguana"
              />
              <Stack width={"50%"} spacing={"8px"} alignItems="flex-start">
                <Stack>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {food.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#18BA51",
                    }}
                  >
                    {food.price + "₮"}
                  </Typography>
                </Stack>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "SF Pro",
                      color: "#767676",
                      fontSize: "16px",
                    }}
                  >
                    {food.ingeredient}
                  </Typography>
                </Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems="center"
                  spacing={"8px"}
                  flexWrap="nowrap"
                >
                  <Button
                    variant="outlined"
                    // onClick={subFood}
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "#18BA51",
                      width: "45px",
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
              </Stack>
              <Box
                onClick={() => removeHandle(index)}
                sx={{ position: "absolute", right: "32px", top: "32px" }}
              >
                <CloseIcon />
              </Box>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
