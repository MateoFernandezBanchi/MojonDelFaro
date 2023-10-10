import React, { useEffect } from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import { Box } from "@mui/material";
import CardNormas from "../components/card/CardNormas";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import Footer from "../components/footer/Footer";

const PiletaLibre = () => {
  ScrollToTop();
  return (
    <>
      <Box sx={{ margin: "15vh auto" }}>
        <CardAcordeon
          imagen={"/assets/NatacionAdultos.png"}
          titulo={"Entrena a tu ritmo"}
          subtitulo={"2 veces por semana."}
          texto1={""}
          precio={"$8000"}
          texto={
            "Reservá turnos mensuales fijos para venir a nadar en el horario que más se acomode a tu rutina. Tendrás a disposición nuestros elementos y el uso de la pileta."
          }
        />
        <CardAcordeon
          imagen={"/assets/Disfruta.png"}
          titulo={"Disfruta cuando quieras"}
          subtitulo={"Turno particular"}
          texto1={""}
          precio={"$1500"}
          texto={
            "Potenciá la experiencia del sauna combinandola con nuestra pileta. En ella, vas a encontrar hidromasajes  y espacio para nadar. Esta combinación no solo contribuye a mejorar la postura y liberar tensiones profundas, sino que también disuelve antiguas contracturas. Sumergirse en este entorno acuático brinda una tranquilidad profunda a nivel mental y emocional. Tu bienestar integral es nuestra prioridad, y esta combinación de elementos está diseñada para ofrecerte un rejuvenecimiento completo."
          }
        />
      </Box>
      <CardNormas />
    </>
  );
};

export default PiletaLibre;
