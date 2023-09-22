import {useState} from "react";
import { Avatar, Box, Button, Drawer } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MenuDrawer } from "./MenuDrawer";


export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  };
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MenuDrawer/>
    </Box>
  );

  return (
    <>
      <header>
        <Avatar src="src/assets/Logo.png"></Avatar>
        {/* <Button onClick={()=> setOpen(!open)} sx={{border:"none"}}>
          {open? <CloseIcon sx={{ fontSize: 40, color: "white" }}/> : <MenuIcon sx={{ fontSize: 40, color: "white" }}/>}
        </Button> */}
        <Button onClick={toggleDrawer(true)}>{drawer? <CloseIcon sx={{ fontSize: 40, color: "white" }}/> : <MenuIcon sx={{ fontSize: 40, color: "white" }}/>}</Button>
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                color: "red",
                height:"auto",
                width:"45vw",
                marginRight:"2rem",
                top:"70px"
              }}}
          >
            {list()}
          </Drawer>
      </header>
      {/* {open? <MenuDrawer/> : null} */}
    </>
  )

}
