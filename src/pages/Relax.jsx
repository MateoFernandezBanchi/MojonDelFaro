import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import { WhatsappButton } from "../components/button/WhatsappButton";
import CardNormas from "../components/card/CardNormas";
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
    
      <Box sx={{ marginTop: "15vh", width:"100vw", overflow:"hidden" }}>
        <CardAcordeon
          imagen={"/assets/SaunaSeco.png"}
          titulo={"Sauna Seco"}
          subtitulo={"Sesión:30min"}
          texto1={""}
          precio={"$1500"}
      >
        <Typography>
        Es una cabina diseñada para <span>4 a 6 personas</span>, con bancos para descansar. Se utilizan <span>hidrolatos naturales</span> elaborados en la zona (romero, menta y eucalipto) para actuar como expectorantes. La acción del calor <span>purifica la piel, libera toxinas, y reduce arrugas.</span> La combinación con una ducha fría estimula el sistema linfático para disolver bloqueos circulatorios y relaja la musculatura.
        </Typography>
      </CardAcordeon>
        <CardAcordeon
          imagen={"/assets/HidromasajeSauna.png"}
          titulo={"Hidromasaje y sauna"}
          subtitulo={"Sesión: 1.30h"}
          texto1={""}
          precio={"$3500"}
        >
          <Typography>
          <span>Potenciá la experiencia del sauna combinandolo con nuestra pileta.</span> En la pileta vas a encontrar hidromasajes  y espacio para nadar. Esta combinación contribuye a <span>mejorar la postura y liberar tensiones profundas.</span> Sumergirse en este entorno acuático brinda una tranquilidad profunda a nivel mental y emocional. Tu <span>bienestar integral</span> es nuestra prioridad, y esta combinación de elementos está diseñada para ofrecerte un <span>rejuvenecimiento completo.</span>
          </Typography>
        </CardAcordeon>
        <Box sx={{display:"flex", justifyContent:"flex-end", width:"90vw", marginTop:"5vh"}}>
        <WhatsappButton text="Reservá"  onClick={()=> whatsappMessage('¡Hola! Me gustaría reservar una sesión de relax. 🌿  ¿Hay fechas y horarios disponibles? ¡Agradezco tu ayuda!')}/>
        </Box>
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
            <WhatsappButton text="Quiero un voucher" onClick={()=> whatsappMessage('¡Hola! Me encantaría adquirir una Gift Card. 🎁 ¿Podrías brindarme más información? ¡Muchas gracias!')}/>
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
  );
};

export default Relax;
