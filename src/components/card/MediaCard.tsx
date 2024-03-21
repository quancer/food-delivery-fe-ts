import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type dataType = {
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
};
type propsType = {
  food: dataType;
};

export default function MediaCard(props: propsType) {
  const food = props.food;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={food.image} title="green iguana" />
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
      </CardActions>
    </Card>
  );
}
