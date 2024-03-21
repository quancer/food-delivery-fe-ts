import * as React from "react";
import dummyCategory from "@/utils/dummyCategory";
import { bgcolor, Container, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import Cards from "./Cards";

const FoodList = () => {
  const [cat, setCat] = React.useState<string>("Breakfast");
  function handlerSubmit(item: string) {
    console.log("lol", item);
    setCat(item);
  }
  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <Stack
        direction={"row"}
        spacing={8}
        justifyContent="space-between"
        my={3}
      >
        {dummyCategory.map((item) =>
          item == cat ? (
            <Button
              variant="outlined"
              sx={{
                // ".css-1iiyj24-MuiButtonBase-root-MuiButton-root": {
                //   background: "#18BA51",
                // },
                width: "100%",
                border: "1px solid #D6D8DB",
                color: "#fff",
                background: "#18BA51",
              }}
              onClick={() => handlerSubmit(item)}
            >
              {item}
            </Button>
          ) : (
            <Button
              sx={{ width: "100%", border: "1px solid #D6D8DB", color: "#000" }}
              onClick={() => handlerSubmit(item)}
            >
              {item}
            </Button>
          )
        )}
      </Stack>
      <Cards category={cat} />
    </Container>
  );
};
export default FoodList;
