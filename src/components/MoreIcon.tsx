import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import CatergoryEdit from "./categoryCRUD/CatergoryEdit";
interface categoryType {
  _id?: string;
  categoryName?: string;
}
export default function MoreIcon({ data }: { data: categoryType }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  console.log("moreDta", data);
  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <MoreVertIcon />
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <CatergoryEdit data={data} />
          <Button onClick={handleClick}>Delete</Button>
        </Box>
      </Popper>
    </div>
  );
}
