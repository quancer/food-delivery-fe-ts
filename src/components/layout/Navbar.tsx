import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Pinecone } from "../svg/PineconeLogo";
import { Stack } from "@mui/system";
import Link from "@mui/material/Link";

import { ShoppingDrawer } from "../shoppingDraw/ShoppingDrawer";

const pages = ["Нүүр", "Хоолны цэс", "Хүргэлтийн бүс"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const linkTextStyle = {
  fontFamily: "SF Pro Text",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "16px",
  color: "#000",
  letterSpacing: "-0.2px",
  textTransform: "uppercase",
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
                href="#"
                underline="none"
                padding={"8px 16px"}
                sx={linkTextStyle}
              >
                {"Хүргэлтийн бүс"}
              </Link>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={"8px"}>
            <ShoppingDrawer />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

// <AppBar position="static" sx={{ background: "#fff", color: "#333" }}>
//   <Container maxWidth="xl">
//     <Toolbar disableGutters sx={{ gap: "5px" }}>
//       <IconButton aria-label="cart">
//         <StyledBadge badgeContent={foodId.length} color="secondary">
//           <ShoppingCartIcon />
//         </StyledBadge>
//       </IconButton>
//       <Button variant={"text"} sx={{ color: "#333" }}>
//         <Typography>{"Сагс"}</Typography>
//       </Button>
//       <Button
//         variant="text"
//         startIcon={<PersonIcon />}
//         sx={{ color: "#333" }}
//         href="/login"
//       >
//         Нэвтрэх
//       </Button>
//     </Toolbar>
//   </Container>
// </AppBar>
