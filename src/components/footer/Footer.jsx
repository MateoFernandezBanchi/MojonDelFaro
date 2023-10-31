import { Box, List, ListItem } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./styles.css"

const Footer = () => {
  return (
    <Box
      className="footerContainer"
      sx={{
        width:"100vw",
        boxSizing:"border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: {
          xs: "row",
          sm: "row",
          md: "row",
          lg: "row-reverse",
          xl: "row-reverse",
        },
        backgroundColor: {
          xs: "#78b5cb", // Estilo para pantallas extra pequeñas
          sm: "#78b5cb", // Estilo para pantallas pequeñas
          md: "#78b5cb", // Estilo para pantallas medianas
          lg: "#f4f9fc", // Estilo para pantallas grandes
          xl: "#ffffff", // ,
        },
      }}
    >
      <Box
        component="img"
        sx={{
          width: "auto",
          height: "15vh",
        }}
        alt="Logo Mojo del Faro"
        src="/assets/Logo2.png"
        className="logoFooter"
      />
      <List className="footerList">
        <ListItem>
          <a target="_blank" href="https://wa.me/+542920222444">
            <WhatsAppIcon fontSize="large" /> (2920) 41-6145
          </a>
        </ListItem>
        <ListItem>
          <a target="_blank" href="https://www.instagram.com/_mojo_del_faro/">
            <InstagramIcon fontSize="large" />
            mojóndelfaro
          </a>
        </ListItem>
        <ListItem>
          <a
            href="<EMAIL>?subject=Contacto%20de%20la%20web&body=<NAME>%2C
        Me gustaría saber más sobre los servicios que ofrecemos."
          >
            <MailOutlineIcon fontSize="large" />
            mail.mojon@gmail.com
          </a>
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
