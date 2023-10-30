import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import { GreenButton } from "../components/button/WhatsappButton";
import CardNormas from "../components/card/CardNormas";
import ScrollToTop from "../helpers/ScrollToTop";
import "./styles.css";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useLocation } from "react-router-dom";

const Relax = () => {
  const giftCard = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      scrollToTopInner();
    } else {
      scrollToForm();
    }
  }, [location.hash]);

  function scrollToForm() {
    if (giftCard.current) {
      giftCard.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToTopInner () {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Box sx={{ margin: "15vh 0", width:"100vw", overflow:"hidden" }}>
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
          imagen={"/assets/HidromasajeSauna.png"}
          titulo={"Hidromasaje y sauna"}
          subtitulo={"Sesión: 1.30h"}
          texto1={""}
          precio={"$2500"}
          texto={
            "Potenciá la experiencia del sauna combinandola con nuestra pileta. En ella vas a encontrar  hidromasajes  y espacio para nadar. Esta combinación no solo contribuye a mejorar la postura y liberar tensiones profundas, sino que también disuelve esas antiguas contracturas. Sumergirse en este entorno acuático brinda una tranquilidad profunda a nivel mental y emocional. Tu bienestar integral es nuestra prioridad, y esta combinación de elementos está diseñada para ofrecerte un rejuvenecimiento completo."
          }
        />
        <Box className="giftCardContainer" id="giftCard" ref={giftCard}>
          <Box className="giftTextContainer">
            <Box sx={{marginLeft:"10px"}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px"}}>
              <Typography variant="h3" fontSize={"24px"}>
                Gift Card
              </Typography>
              <CardGiftcardIcon
                sx={{ color: "rgba(198, 166, 100, 1)", fontSize: "35px" }}
              />
            </Box>
            <Typography className="giftParrafo" sx={{margin:"5vh 0 0 0", width:"80vw"}}>
              Podés reservar una sesión de hidromasaje y sauna como regalo. Cada
              turno tiene una duración de 1:30hs. 
            </Typography>
            <Typography className="giftParrafo" sx={{margin:"0 0 5vh 0", width:"80vw"}}>
            Simplemente contactanos para
              realizar la reserva, nosotros nos encargaremos de coordinar el
              horario y de brindar a esa persona especial la calma y relajación
              que se merece.
            </Typography>
            </Box>
            <GreenButton>
              <Avatar
                src="/assets/reactIcon.svg"
                sx={{ width: "30px", height: "30px", padding: "5px" }}
              />
              Quiero un voucher
            </GreenButton>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(/assets/RegalaExperiencia.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "15px",
              margin:"5vh auto",
              width:"100%",
              height:"20vh",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              gap:"20px"
            }}
            className="giftImageContainer"
          >
            <Typography variant="h3" color={"white"} fontSize={"16px"}>
              Regala una experiencia
            </Typography>
            <Box  component="img" src="/assets/LogoBlanco.svg" className="logoNavbar"></Box>
          </Box>
        </Box>
        <CardNormas />
      </Box>
    </>
  );
};

export default Relax;
