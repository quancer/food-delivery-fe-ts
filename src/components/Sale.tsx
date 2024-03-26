import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Sale = ({ sale }: { sale: number }) => {
  return (
    <Box
      p="4px 16px"
      borderRadius={"16px"}
      bgcolor={"#18BA51"}
      position={"absolute"}
      top={"10px"}
      right={"10px"}
    >
      <Typography
        fontFamily={"Poppins"}
        fontSize={"18px"}
        fontWeight={600}
        color={"#fff"}
      >
        {sale + "%"}
      </Typography>
    </Box>
  );
};

export default Sale;
