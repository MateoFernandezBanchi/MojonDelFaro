import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export const MenuDrawer = () => {
  return (
    <div className="menuMobileContainer">
      <List className="menuMobile" sx={{ borderRadius: "10px" }}>
        <ListItem sx={{ padding: "12px 16px" }}>
          <Link
            to="/"
            style={{ color: "black", fontSize: "18px", fontWeight: 400 }}
          >
            Inicio
          </Link>
        </ListItem>
        <ListItem sx={{ padding: "12px 16px" }}>
          <Link
            to="/clases"
            style={{ color: "black", fontSize: "18px", fontWeight: 400 }}
          >
            Clases
          </Link>
        </ListItem>
        <ListItem sx={{ padding: "12px 16px" }}>
          <Link
            to="/relax"
            style={{ color: "black", fontSize: "18px", fontWeight: 400 }}
          >
            Relax
          </Link>
        </ListItem>
        <ListItem sx={{ padding: "12px 16px" }}>
          <Link
            to="/piletalibre"
            style={{ color: "black", fontSize: "18px", fontWeight: 400 }}
          >
            Pileta Libre
          </Link>
        </ListItem>
        <ListItem sx={{ padding: "12px 16px" }}>
          <Link
            to="/conocenos"
            style={{ color: "black", fontSize: "18px", fontWeight: 400 }}
          >
            Conocenos
          </Link>
        </ListItem>
        <Divider sx={{ bgColor: "blue" }}></Divider>
        <ListItem sx={{ padding: "12px 16px", display:"block" }}>
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography
                color="rgba(97, 179, 238, 1)"
                fontSize={"18px"}
                fontWeight={400}
              >
                Gift Card
              </Typography>
              <CardGiftcardIcon sx={{ color: "rgba(198, 166, 100, 1)" }} />
            </Box>
          </Link>
        </ListItem>
      </List>
    </div>
  );
};
