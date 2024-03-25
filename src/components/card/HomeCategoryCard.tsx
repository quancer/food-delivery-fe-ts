import foods from "@/utils/DummyFood";
import { Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import CategorySvg from "../svg/CategorySvg";
import { MediaCard } from "./MediaCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const CategoryCards = ({ category }: { category: string }) => {
  const categoryFoods = foods.filter((item) => item.category == category);
  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        my={4}
        position={"relative"}
        zIndex={10}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <CategorySvg />
          <Typography>{category}</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <Link href="/foods">
            <Stack direction={"row"} alignItems={"center"}>
              {"Бүгдийг харах"}
              <ChevronRightIcon />
            </Stack>
          </Link>
        </Stack>
      </Stack>
      <Grid container columnSpacing={3} rowSpacing={6}>
        {categoryFoods.map((item, index) => {
          if (index < 4)
            return (
              <Grid item xs={3} key={item.title}>
                <MediaCard food={item} key={item.title} />
              </Grid>
            );
        })}
      </Grid>
    </Container>
  );
};
export default CategoryCards;
