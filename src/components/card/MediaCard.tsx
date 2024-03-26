import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { ModalCard } from "./ModalCard";
import Sale from "../Sale";
import SalePrice from "../SalePrice";
type dataType = {
  id: string;
  sale: number;
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
};

export const MediaCard = ({ food }: { food: dataType }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <Box position={"relative"}>
          <CardMedia
            sx={{ height: 140 }}
            image={food.image}
            title="green iguana"
          />
          {food.sale > 0 ? <Sale sale={food.sale} /> : <Stack></Stack>}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food.ingeredient}
          </Typography>
        </CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
        >
          {food.sale > 0 ? (
            <SalePrice sale={food.sale} price={food.price} />
          ) : (
            <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
              {food.price + "₮"}
            </Typography>
          )}
          <ModalCard food={food} />
        </Stack>
      </Card>
    </Box>
  );
};
