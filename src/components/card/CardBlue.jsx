import { Box } from "@mui/material";
import React from "react";
import "./styles.css";

const CardBlue = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(235, 143, 0, 1)",
        borderRadius: "30px",
        color: "white",
        width: {
          xs: "88%",
          sm: "88%",
          md: "70%",
          lg: "60%",
          xl: "60%",
        
        },
        margin: "20px auto",
        padding: "25px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
      className="cardBlue"
    >
      {children}
    </Box>
  );
};

export default CardBlue;
