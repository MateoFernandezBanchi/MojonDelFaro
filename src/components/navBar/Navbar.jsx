import { useState } from "react";
import { Avatar, Box, Button, Drawer, Typography, styled } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MenuDrawer } from "./MenuDrawer";
import { DesktopDiv, MobileDiv } from "../MediaQuery/ResponsiveDiv";
import MenuDesktop from "./MenuDesktop";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
      <MenuDrawer />
    </Box>
  );

  return (
    <>
      <header>
        <Link to="/">        
        <Box  component="img" src="/assets/LogoPrincipal.svg" className="logoNavbar"></Box>
        </Link>
        <MobileDiv>
          <Button onClick={toggleDrawer(true)}>
            {drawer ? (
              <CloseIcon sx={{ fontSize: 40, color: "white" }} />
            ) : (
              <MenuIcon sx={{ fontSize: 40, color: "white" }} />
            )}
          </Button>
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                color: "red",
                height: "auto",
                width: "55vw",
                marginRight: "2rem",
                top: "70px",
              },
            }}
          >
            {list()}
          </Drawer>
        </MobileDiv>
        <DesktopDiv>
          <MenuDesktop/>
        </DesktopDiv>
      </header>
    </>
  );
}
