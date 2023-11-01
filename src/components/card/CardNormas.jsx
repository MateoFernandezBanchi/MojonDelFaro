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
          Normas para disfrutar de la pileta
        </Typography>
        <List sx={{ listStyle: "circle", color: "white" }} className="listNormas">
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Limpieza: </span>Mantené tu cuerpo limpio y sin cremas ni maquillaje antes de ingresar.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Gorro de natación: </span>
              Utilizá gorro; tenemos disponibles si no lo tenés.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Calzado adecuado: </span>{" "}
              Usá calzado de goma antideslizante y evitá traer polvo o arena.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Duchas rápidas: </span>Las duchas en el vestuario están pensadas solo para enjuagues breves.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Ropa de natación: </span>Llevá una malla limpia, de lycra, que quede pegada al cuerpo para ingresar a la piscina.
            </Typography>
          </ListItem>
        </List>
        <Typography color={"white"}>
          Estas normas esta crear un espacio agradable y seguro.<br/> ¡Esperamos que
          disfrutes de nuestros servicios! Si tenés alguna pregunta, no dudes en preguntarnos.
        </Typography>
      </CardBlue>
    </div>
  );
};

export default CardNormas;
