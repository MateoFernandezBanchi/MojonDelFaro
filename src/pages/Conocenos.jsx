import { Avatar, Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";

const Conocenos = () => {
  return (
    <>
    <Box sx={{margin:"15vh auto 5vh auto"}}>
        <Box sx={{width:"90vw", margin:"0 auto"}}>
        <Typography variant="h1" fontSize="20px" fontWeight={500}>Sobre el proyecto</Typography>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "black",
            margin: "5px",
            width: "30%",
          }}
        />
        </Box>
      <List sx={{ color: "black" }}>
        <ListItem>
          Buscamos crear un espacio relajante y sanador cercano al mar, un
          retiro accesible a todas las edades donde cada persona pueda encontrar
          un espacio para renovarse, aprender y conectar con la serenidad.
        </ListItem>
        <ListItem>
          Ante la falta de opciones para las personas mayores, nos esmeramos en
          crear un espacio en el que se sientan cómodos y les brinde bienestar,
          donde puedan explorar todas las dimensiones de su cuerpo a través del
          contacto con el agua, sintiendo alivio, goce y movimiento.
        </ListItem>
        <ListItem>
          Otro objetivo es impulsar la natación y la familiarización con el
          agua, para disfrutar de manera segura en nuestro entorno natural
          rrodeado por ríos y mares.
        </ListItem>
        <ListItem>
          Creemos que el agua nos enlaza y establece conexiones, tanto internas
          como externas, creando una unión con nosotros mismos y el mundo que
          nos rodea.
        </ListItem>
      </List>
      </Box>
      <Box sx={{width:"90vw", margin:"0 auto"}}>
        <Typography variant="h1" fontSize="20px" fontWeight={500}>Nuestro equipo</Typography>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "black",
            margin: "5px",
            width: "30%",
          }}
        />
        <Box sx={{display:"flex", justifyContent:"space-around", margin:"3vh auto"}}>
        <Avatar src="/assets/Avatar1.png" sx={{width:"60px", height:"60px"}}></Avatar>
        <Avatar src="/assets/Avatar2.png" sx={{width:"60px", height:"60px"}}></Avatar>
        <Avatar src="/assets/Avatar3.png" sx={{width:"60px", height:"60px"}}></Avatar>
        </Box>
        </Box>
   
    <Footer/>
    </>

  );
};

export default Conocenos;
