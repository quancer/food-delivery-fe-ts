import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { ModalCard } from "./ModalCard";
type dataType = {
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
          <ModalCard food={food} />
        </CardActions>
      </Card>
    </Box>
  );
};
