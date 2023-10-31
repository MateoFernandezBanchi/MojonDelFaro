import React from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import Footer from "../components/footer/Footer";
import { Box, Typography } from "@mui/material";
import { WhatsappButton } from "../components/button/WhatsappButton";
import CardNormas from "../components/card/CardNormas";
import ScrollToTop from "../helpers/ScrollToTop";

export const Clases = () => {
  ScrollToTop();
  return (
    <>
      <Box
        sx={{
          margin: "15vh auto",
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
width:"98vw",
overflow:"hidden"
        }}
      >
        <CardAcordeon
          imagen={"/assets/NatacionAdultos.png"}
          titulo={"Natación Adultos"}
          subtitulo={"Profe: Lucas Suarez"}
          texto1={"Martes y miércoles "}
          texto2={"17.30 a 18.30"}
          precio={"$6500"}
        >
          <Typography>
          La natación es una forma relajante de hacer ejercicio para todo el cuerpo. Es una actividad que tonifica los músculos, protege las articulaciones, mejora la circulación, favorece el sistema cardiovascular, recompone la postura y reduce la presión arterial, al mismo tiempo que proporciona <span>calma mental, concentración y conexión con nuestro cuerpo.</span>
          </Typography>
        </CardAcordeon>
        <CardAcordeon
          imagen={"/assets/NatacionNiños.png"}
          titulo={"Natación Niños"}
          subtitulo={"Profes: Mónica Millapi y Lucas Suarez."}
          texto1={"De 8 a 12 años"}
          texto2={"Miércoles 18h o Sábado 11h"}
          precio={"$5500"}
        >
          <Box sx={{display:"flex", flexDirection:"column"}}>
          <Typography>
          La natación <span>desarrolla confianza y habilidades acuáticas</span> para disfrutar del agua de manera segura A través de <span>actividades interactivas y juegos</span> trabajamos <span>desde la flotación básica hasta las técnicas avanzadas de natación</span> promoviendo la autoestima, concentración y resistencia física.
          </Typography>
          <Typography sx={{fontSize:"20px", fontWeight:"semi-bold"}}>Precio 2 veces por semana: $9500</Typography>
          </Box>
        </CardAcordeon>
        <CardAcordeon
          imagen={"/assets/GimnasiaAcuatica.jpg"}
          titulo={"Gimnasia Acuática"}
          subtitulo={"Profe: Lucas Suarez"}
          texto1={"Martes y miércoles"}
          texto2={"17.30 a 18.30hs"}
          precio={"$9000"}
        >
          <Typography>
          Son ejercicios acuáticos que <span>tonifican los músculos</span> aprovechando la falta de gravedad en el agua, lo que los hace <span>ideales para personas que buscan actividad suave.</span> Mejoran la condición física al trabajar grupos musculares específicos y también <span>ayudan en la recuperación de lesiones.</span>
          </Typography>
        </CardAcordeon>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <WhatsappButton text={"inscripciones"} />
      </Box>
      <CardNormas />
    </>
  );
};
