import foods from "@/utils/dummyFood";
import { Grid, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
const Cards = ({ category }: { category: string }) => {
  const categoryFoods = foods.filter(
    (item, index) => item.category == category
  );
  console.log("cards", categoryFoods, foods, category);
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {categoryFoods.map((item, index) => (
        <Grid item xs={3}>
          <MediaCard food={item} key={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Cards;
