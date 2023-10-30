import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const MenuDesktop = () => {
  return (
    <Box>
      <List
        sx={{ display: "flex", flexDirection: "row" }}
        className="listMenuDesktop"
      >
        <ListItem>
          <Link to="/clases">
            <Typography fontSize={"23px"}>Clases</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/relax">
            <Typography fontSize={"23px"}>Relax</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/piletalibre">
            <Typography fontSize={"23px"}>Pileta Libre</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/conocenos">
            <Typography fontSize={"23px"}>Conocenos</Typography>
          </Link>
        </ListItem>
        <ListItem sx={{ padding: "12px 16px", display: "block" }}>
          <Link to="/relax#giftCard">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography color="white" fontSize={"23px"}>
                Gift Card
              </Typography>
              <CardGiftcardIcon sx={{ color: "rgba(198, 166, 100, 1)" }} />
            </Box>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuDesktop;
