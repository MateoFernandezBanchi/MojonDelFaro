import React from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import Footer from "../components/footer/Footer";
import { Box, List, ListItem, Typography } from "@mui/material";
import { WhatsappButton } from "../components/button/WhatsappButton";
import CardBlue from "../components/card/CardBlue";
import CardNormas from "../components/card/CardNormas";

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
          imagen={"/assets/NatacionAdultos.png"}
          titulo={"Natación Adultos"}
          subtitulo={"Profe: Lucas Suarez"}
          texto1={"Martes y miércoles 17.30 a 18.30"}
          precio={"$6000"}
          texto={
            "La natación es una forma relajante de hacer ejercicio para todo el cuerpo. Es una actividad que tonifica los músculos, protege las articulaciones, mejora la circulación, favorece el sistema cardiovascular, recompone la postura y reduce la presión arterial, al mismo tiempo que proporciona calma mental, concentración y conexión con nuestro cuerpo."
          }
        />
        <CardAcordeon
          imagen={"/assets/NatacionNiños.png"}
          titulo={"Natación Niños"}
          subtitulo={"Profes: Mónica Millapi y Lucas Suarez."}
          texto1={"De 8 a 12 años"}
          texto2={"Miércoles 18h | Sábado 11h"}
          precio={"$9000"}
          texto={
            "La natación desarrolla confianza y habilidades acuáticas indispensables para disfrutar del agua de manera segura A través de actividades interactivas y juegos trabajamos desde la flotación básica hasta las técnicas avanzadas de natación promoviendo la autoestima, concentración y resistencia física."
          }
        />
        <CardAcordeon
          imagen={"/assets/GimnasiaAcuatica.png"}
          titulo={"Gimnasia Acuática"}
          subtitulo={"Profe: Lucas Suarez"}
          texto1={"Martes y miércoles 17.30 a 18.30hs"}
          precio={"$8500"}
          texto={
            "Son ejercicios acuáticos que tonifican los músculos aprovechando la falta de gravedad en el agua, lo que los hace ideales para personas que buscan actividad suave. Mejoran la condición física al trabajar grupos musculares específicos y también ayudan en la recuperación de lesiones."
          }
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <WhatsappButton text={"inscripciones"} />
      </Box>
     <CardNormas/>
      <Footer />
    </>
  );
};
