import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Pinecone } from "../svg/PineconeLogo";
import { Stack } from "@mui/system";
import Link from "@mui/material/Link";

import { ShoppingDrawer } from "../shoppingDraw/ShoppingDrawer";

const linkTextStyle = {
  fontFamily: "SF Pro Text",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "16px",
  color: "#000",
  letterSpacing: "-0.2px",
  textTransform: "uppercase",
};

const Navbar = () => {
  return (
    <Stack>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ padding: "8px 24px" }}
        >
          <Stack direction={"row"} alignItems="center">
            <Box>
              <Pinecone />
            </Box>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              spacing={"8px"}
            >
              <Link
                href="/"
                underline="none"
                padding={"8px 16px"}
                sx={linkTextStyle}
              >
                {"НҮҮР"}
              </Link>
              <Link
                href="/foods"
                underline="none"
                padding={"8px 16px"}
                sx={linkTextStyle}
              >
                {"Хоолны цэс"}
              </Link>
              <Link
                href="/deliveryzone"
                underline="none"
                padding={"8px 16px"}
                sx={linkTextStyle}
              >
                {"Хүргэлтийн бүс"}
              </Link>
              <Link
                href="/create"
                underline="none"
                padding={"8px 16px"}
                sx={linkTextStyle}
              >
                {"Шинээр үүсгэх"}
              </Link>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={"8px"}>
            <ShoppingDrawer />
          </Stack>
          <Link href="/create">Create</Link>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Navbar;
