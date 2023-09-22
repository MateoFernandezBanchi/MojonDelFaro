import React from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import Footer from "../components/footer/Footer";
import { Box, List, ListItem, Typography } from "@mui/material";
import { WhatsappButton } from "../components/button/WhatsappButton";
import CardBlue from "../components/card/CardBlue";

export const Clases = () => {
  return (
    <>
      <Box
        sx={{
          margin: "15vh auto",
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
        }}
      >
        <CardAcordeon
          imagen={"src/assets/NatacionAdultos.png"}
          titulo={"Natación Adultos"}
          profesor={"Profe: Lucas Suarez"}
          horario={"Martes y miércoles 17.30 a 18.30"}
          precio={"$6000"}
          texto={
            "La natación es una forma relajante de hacer ejercicio para todo el cuerpo. Es una actividad que tonifica los músculos, protege las articulaciones, mejora la circulación, favorece el sistema cardiovascular, recompone la postura y reduce la presión arterial, al mismo tiempo que proporciona calma mental, concentración y conexión con nuestro cuerpo."
          }
        />
        <CardAcordeon
          imagen={"src/assets/NatacionNiños.png"}
          titulo={"Natación Niños"}
          profesor={"Profes: Mónica Millapi y Lucas Suarez. De 8 a 12 años"}
          horario={"Miércoles 18h | Sábado 11h"}
          precio={"$9000"}
          texto={
            "La natación desarrolla confianza y habilidades acuáticas indispensables para disfrutar del agua de manera segura A través de actividades interactivas y juegos trabajamos desde la flotación básica hasta las técnicas avanzadas de natación promoviendo la autoestima, concentración y resistencia física."
          }
        />
        <CardAcordeon
          imagen={"src/assets/GimnasiaAcuatica.png"}
          titulo={"Gimnasia Acuática"}
          profesor={"Profe: Lucas Suarez"}
          horario={"Martes y miércoles 17.30 a 18.30hs"}
          precio={"$8500"}
          texto={
            "Son ejercicios acuáticos que tonifican los músculos aprovechando la falta de gravedad en el agua, lo que los hace ideales para personas que buscan actividad suave. Mejoran la condición física al trabajar grupos musculares específicos y también ayudan en la recuperación de lesiones."
          }
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <WhatsappButton text={"inscripciones"} />
      </Box>
      <CardBlue>
        <Typography variant="h3" color={"white"} fontSize={"20px"}>
          Normas para disfrutar de nuestras instalaciones
        </Typography>
        <List sx={{listStyle:"circle", color:"white"}}>
          <ListItem >
            Limpieza y Frescura: Antes de ingresar, asegurate de tener el cuerpo
            limpio y sin cremas ni maquillaje para mantener la pileta en
            condiciones óptimas.
          </ListItem>
          <ListItem>
            Gorro de Natación: Te recomendamos usar un gorro de natación. Si
            tenés el tuyo, genial. Si no, no te preocupes, tenemos disponibles
            en el establecimiento para tu comodidad.
          </ListItem>
          <ListItem>
            Calzado Adecuado: Es importante usar calzado de goma antideslizante,
            evitando traer polvo o arena para mantener el área de la pileta
            limpia y segura.
          </ListItem>
          <ListItem>
            Duchas Rápidas: Las duchas en el vestuario están pensadas para un
            enjuague rápido. Por favor, procura no extender tu ducha más allá de
            5 minutos, así todos pueden disfrutar de agua caliente.
          </ListItem>
          <ListItem>
            Atuendo de Natación: Para ingresar a la pileta, asegurate de usar
            una malla de lycra que se ajuste al cuerpo y esté limpia. Esto
            garantiza un ambiente cómodo y saludable para todos.
          </ListItem>
        </List>
        <Typography color={"white"}>
          Estas normas buscan crear un espacio agradable y seguro. ¡Esperamos
          que disfrutes de nuestros servicios! Si tienes alguna pregunta, no
          dudes en preguntarnos.
        </Typography>
      </CardBlue>
      <Footer />
    </>
  );
};
