import React from "react";
import CardBlue from "./CardBlue";
import { List, ListItem, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import "./styles.css";

const CardNormas = () => {
  return (
    <div>
      <CardBlue>
        <Typography variant="h3" color={"white"} fontSize={"20px"}>
          <VolunteerActivismIcon sx={{ margin: "0 20px" }} />
          Normas para disfrutar de nuestras instalaciones
        </Typography>
        <List sx={{ listStyle: "circle", color: "white" }} className="listNormas">
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Limpieza: </span>Mantén tu
              cuerpo limpio y sin cremas ni maquillaje antes de ingresar.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Gorro de natación: </span>
              Debes usar gorro; tenemos disponibles si no lo tienes.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Calzado adecuado: </span>{" "}
              Utiliza calzado de goma antideslizante y evitar traer polvo o
              arena.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Duchas rápidas: </span>Usa las
              duchas en el vestuario solo para enjuagues breves.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Ropa de natación: </span>Debes
              llevar una malla de lycra ajustada y limpia para ingresar a la
              piscina.
            </Typography>
          </ListItem>
        </List>
        <Typography color={"white"}>
          Estas normas esta crear un espacio agradable y seguro. ¡Esperamos que
          disfrutes de nuestros servicios! Si tienes alguna pregunta, no dudes
          en preguntarnos.
        </Typography>
      </CardBlue>
    </div>
  );
};

export default CardNormas;
