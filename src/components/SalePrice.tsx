import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const SalePrice = ({ sale, price }: { sale: number; price: number }) => {
  const salePrice = price - (price * sale) / 100;
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
        {salePrice + "₮"}
      </Typography>
      <Typography fontSize={"18px"} sx={{ textDecoration: "line-through" }}>
        {price + "₮"}
      </Typography>
    </Stack>
  );
};
export default SalePrice;
