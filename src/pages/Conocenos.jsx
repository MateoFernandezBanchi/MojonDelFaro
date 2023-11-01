import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Conocenos = () => {
  return (
    <>
      <Box
        className="conocenosContainer"
        sx={{ margin: "15vh auto 5vh auto", width: "90vw"}}
      >
        <Box sx={{ margin: "0 15px" }}>
          <Typography variant="h1" fontSize="20px" fontWeight={500}>
            Sobre el proyecto
          </Typography>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "black",
              margin: "5px",
              width: "30%",
            }}
          />
        </Box>
        <List sx={{ color: "black", width: "80vw" }}>
          <ListItem>
            <Typography>
              Buscamos crear un espacio{" "}
              <span>relajante y sanador cercano al mar</span>, un retiro
              accesible a todas las edades donde cada persona pueda encontrar un
              espacio para <span>renovarse, aprender y conectar</span> con la
              serenidad.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Queremos brindar un espacio que{" "}
              <span>incluya a todas la edades</span>, en la que se pueda
              explorar todas las dimensiones del cuerpo- a través del contacto
              con el agua.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Nuestro objetivo es impulsar la natación y la familiarización con
              el agua, para disfrutar de nuestro entorno natural de manera
              segura.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Creemos que <span>el agua nos enlaza</span> y establece
              conexiones, tanto internas como externas, creando una unión con
              nosotros mismos y el mundo que nos rodea.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Conocenos;
