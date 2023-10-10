import { styled } from "@mui/material";


const MobileDiv = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }));

  const DesktopDiv = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  }));

  export {MobileDiv, DesktopDiv};