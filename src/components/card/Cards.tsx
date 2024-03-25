import foods from "@/utils/DummyFood";
import { Grid } from "@mui/material";
import { MediaCard } from "./MediaCard";
const Cards = ({ category }: { category: string }) => {
  const categoryFoods = foods.filter((item) => item.category == category);
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {categoryFoods.map((item, index) => (
        <Grid item xs={3} key={index}>
          <MediaCard food={item} key={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Cards;
