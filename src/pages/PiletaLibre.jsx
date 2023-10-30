import React, { useEffect } from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import { Box, Divider, Typography } from "@mui/material";
import CardNormas from "../components/card/CardNormas";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import Footer from "../components/footer/Footer";
import { WhatsappButton } from "../components/button/WhatsappButton";

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
        >
          <Typography>
          Reservá <span>turnos mensuales fijos</span> para venir a nadar en el horario que más se acomode a tu rutina. Tendrás a disposición nuestros elementos y el uso de la pileta.
          </Typography>
        </CardAcordeon>
        <CardAcordeon
          imagen={"/assets/Disfruta.png"}
          titulo={"Disfruta cuando quieras"}
          subtitulo={"Turno particular"}
          texto1={""}
          precio={"$2500"}
        >
          <Box sx={{display:"flex", flexDirection:"column"}}>
          <Typography>
            Si estás planeando una salida familiar o un día para vos, podés
            reservar un turno particular para utilizar la pileta y los los
            elementos que necesites. Para salir de la rutina, conectar con las
            personas que querés y disfrutar de los beneficios del agua.
          </Typography>
          <Typography sx={{ fontStyle: "italic", fontWeight: "bold" }}>
            El precio del turno es por persona.
          </Typography>
          </Box>

        </CardAcordeon>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <WhatsappButton text="turnos" />
      </Box>
      <Box
        className="giftCardContainer"
        id="giftCard"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box className="giftTextContainer">
          <Box sx={{ marginLeft: "10px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "5px",
                flexDirection: "column",
              }}
            >
              <Typography variant="h3" fontSize={"24px"}>
                La Pileta
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{
                  bgcolor: "black",
                  margin: "5px 0",
                  width: "80%",
                  height: "2px",
                  marginBottom: "25px",
                }}
              />
            </Box>
            <Typography
              className="giftParrafo"
              sx={{ margin: "5vh 0 0 0", width: "80vw" }}
            >
              Dimensiones: Nuestra piscina, con medidas de 15x4 metros, presenta
              una profundidad que va de 1.10m a 1.20m, asegurando que la mayoría
              pueda estar de pie cómodamente, con excepción de los niños muy
              pequeños
            </Typography>
            <Typography
              className="giftParrafo"
              sx={{ margin: "0 0 5vh 0", width: "80vw" }}
            >
              Equipo: Ofrecemos flotaflotas y tablitas para ejercitarse y flotar
              con total tranquilidad.
            </Typography>
          </Box>
        </Box>
        <Box component="img" src="/assets/Clases2.png"></Box>
      </Box>
      <CardNormas />
    </>
  );
};

export default PiletaLibre;
