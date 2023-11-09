import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./styles.css"
const WhatsappButton = ({ text, onClick }) => {

  return (
    <Button
    className="greenButton"
      sx={{
        backgroundColor: "rgba(56, 161, 105, 1)",
        color: "white",
        // padding: "8px 25px",
        textTransform:"none",
        height:"50px",
        width:"200px",
        borderRadius:"6px"
      }}
      onClick={onClick}
    >
      <WhatsAppIcon fontSize="large" sx={{marginRight:"1px"}}/>
      <Typography fontSize="18px" color="white">{text}</Typography>
    </Button>
  );
};

const GreenButton = ({ img, children, onClick }) => {
  return (
    <Button
    className="greenButton"
      sx={{
        backgroundColor: "rgba(56, 161, 105, 1)",
        color: "white",
        // padding: "8px 15px",
        textTransform:"none",
        margin:"0 5px",
        height:"50px",
        width:"200px",
        borderRadius:"6px"
      }}
      onClick={onClick}
    >
      <Avatar
                src={img}
                sx={{ width: "30px", height: "30px", padding: "5px" }}
              />
      <Typography fontSize="18px" color="white" sx={{display:"flex", alignItems:"center", gap:"5px"}}>{children}</Typography>
    </Button>
  );
};

export { WhatsappButton, GreenButton };
