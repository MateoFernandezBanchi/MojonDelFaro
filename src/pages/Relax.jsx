import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import Footer from "../components/footer/Footer";
import { GreenButton } from "../components/button/WhatsappButton";
import CardNormas from "../components/card/CardNormas";
import ScrollToTop from "../helpers/ScrollToTop";

const Relax = () => {
  ScrollToTop();
  return (
    <>
      <Box sx={{ margin: "15vh auto" }}>
        <CardAcordeon
          imagen={"/assets/SaunaSeco.png"}
          titulo={"Sauna Seco"}
          subtitulo={"Sesión:30min"}
          texto1={""}
          precio={"$1500"}
          texto={
            "Es una cabina diseñada para 4 a 6 personas, con bancos para descansar. Se utilizan hidrolatos naturales elaborados en la zona (romero, menta y eucalipto) para actuar como expectorantes. La acción del calor purifica la piel, libera toxinas, y reduce arrugas. La combinación con una ducha fría estimula el sistema linfático para disolver bloqueos circulatorios y relaja la musculatura."
          }
        />
        <CardAcordeon
          imagen={"/assets/Pileta.png"}
          titulo={"Hidromasaje y sauna"}
          subtitulo={"Sesión: 1.30h"}
          texto1={""}
          precio={"$2500"}
          texto={
            "Potenciá la experiencia del sauna combinandola con nuestra pileta. En ella vas a encontrar  hidromasajes  y espacio para nadar. Esta combinación no solo contribuye a mejorar la postura y liberar tensiones profundas, sino que también disuelve esas antiguas contracturas. Sumergirse en este entorno acuático brinda una tranquilidad profunda a nivel mental y emocional. Tu bienestar integral es nuestra prioridad, y esta combinación de elementos está diseñada para ofrecerte un rejuvenecimiento completo."
          }
        />

        <Box
          sx={{
            backgroundImage: `url(/assets/RegalaExperiencia.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundPositionX: "right",
            padding: "15px",
          }}
        >
          <Typography variant="h3" color={"white"} fontSize={"16px"}>
            Regala una experiencia
          </Typography>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "white",
              margin: "5px 0",
              width: "30%",
              height: "2px",
              marginBottom: "15px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              color={"white"}
              fontSize={"12px"}
              sx={{ width: "50%" }}
            >
              Ofrecé relajación y serenidad con un voucher de acceso al
              hidromasaje y sauna, brindando un momento de calma y reconexión.
            </Typography>
            <GreenButton text="Quiero un voucher" />
          </Box>
        </Box>
        <CardNormas />
      </Box>
    </>
  );
};

export default Relax;
