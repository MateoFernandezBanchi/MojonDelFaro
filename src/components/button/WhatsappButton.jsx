import { Button, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsappButton = ({ text }) => {
  return (
    <Button
      sx={{
        backgroundColor: "rgba(56, 161, 105, 1)",
        color: "white",
        padding: "8px 25px",
        textTransform:"none"
      }}
    >
      <WhatsAppIcon fontSize="large" />
      <Typography fontSize="14px" color="white">{text}</Typography>
    </Button>
  );
};

const GreenButton = ({ text }) => {
  return (
    <Button
      sx={{
        backgroundColor: "rgba(56, 161, 105, 1)",
        color: "white",
        padding: "8px 15px",
        textTransform:"none",
        margin:"0 5px"
      }}
    >
      <Typography fontSize="14px" color="white">{text}</Typography>
    </Button>
  );
};

export { WhatsappButton, GreenButton };
