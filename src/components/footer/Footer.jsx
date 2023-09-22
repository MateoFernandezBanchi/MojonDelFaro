import { Box, List, ListItem } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#78b5cb",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "35vw",
          height: "15vh",
        }}
        alt="Logo Mojo del Faro"
        src="/assets/LogoFooter.png"
      />
      <List className="footerList">
        <ListItem>
          <a target="_blank" href="https://wa.me/+542920222444">
            <WhatsAppIcon fontSize="large" /> (2920) 222 444
          </a>
        </ListItem>
        <ListItem >
          <a target="_blank" href="https://www.instagram.com/_mojo_del_faro/">
            <InstagramIcon fontSize="large" />
            mojóndelfaro
          </a>
        </ListItem>
        <ListItem>
          <a  href="<EMAIL>?subject=Contacto%20de%20la%20web&body=<NAME>%2C
        Me gustaría saber más sobre los servicios que ofrecemos.">
            <MailOutlineIcon fontSize="large" />
            mail.mojon@gmail.com
          </a>
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
