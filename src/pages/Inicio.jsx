import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import CardBlue from "../components/card/CardBlue";
import { WhatsappButton } from "../components/button/WhatsappButton";
import Banner from "../../public/assets/ExperienciaBanner.png";
import CardServicios from "../components/card/CardServicios";
import { Link } from "react-router-dom";
import { MobileDiv } from "../components/MediaQuery/ResponsiveDiv";
import "./styles.css"

export const Inicio = () => {
  return (
    <Box sx={{ boxSizing: "border-box", marginTop: "10vh" }}>
      <MobileDiv>
        <Box
          component="img"
          sx={{
            height: 233,
            width: "100vw",
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: "100vw", md: 250 },
          }}
          alt="Imagen agua pileta"
          src="/assets/PiletaMobile.png"
        />
      </MobileDiv>
      <List
        sx={{ width: "90vw", margin: "0 auto 6vh auto" }}
        className="listaInicio"
      >
        <ListItem sx={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "20px",
            }}
          >
            <Box component="img" src="/assets/PiletaClimatizada.svg" sx={{width:"40px", height:"50px"}}></Box>
            <h2>Pileta climatizada</h2>
          </div>
          <Typography sx={{ width: "100%" }}>
            Disfrutá con tranquilidad: agua siempre templada y ambiente cálido y
            reconfortante.
          </Typography>
        </ListItem>
        <ListItem sx={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "20px",
            }}
          >
            <Box component="img" src="/assets/SaunaSeco.svg" sx={{width:"40px", height:"50px"}}></Box>
            <h2>Sauna seco</h2>
          </div>
          <Typography sx={{ width: "100%" }}>
            Un espacio de calma y revitalización para liberar tensiones,
            mejorando la circulación y purificando toxinas gracias a la acción
            del calor y el efecto de las esencias naturales. Desconectá del
            ritmo cotidiano y viví un momento de serenidad física y mental.
          </Typography>
        </ListItem>
        <ListItem sx={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "20px",
            }}
          >
            <Box component="img" src="/assets/ClasesLogo.svg" sx={{width:"40px", height:"50px"}}></Box>
            <h2>Clases</h2>
          </div>
          <Typography sx={{ width: "100%" }}>
            Encontrá la actividad que se adapta a tu edad, las necesidades de tu
            cuerpo, tus objetivos y estilo de vida. Nuestros grupos son
            reducidos y diseñados para cada etapa, asegurandote una experiencia
            personalizada.
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "20px",
            }}
          >
            <Box component="img" src="/assets/PH.svg" sx={{width:"40px", height:"40px"}}></Box>
            <h2>Ph equilibrado</h2>
          </div>
          <Typography sx={{ width: "100%" }}>
            ¡Tu salud es lo más importante! Mantenemos el equilibrio del pH del
            agua para minimizar el uso de cloro, garantizando el cuidado de tu
            piel.
          </Typography>
        </ListItem>
      </List>

      <Box>
        <Box sx={{ width: "85vw", margin: "0 auto" }}>
          <Typography variant="h3" color={"black"} fontSize={"24px"}>
            Nuestros Servicios
          </Typography>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "black",
              margin: "5px",
              width: "30%",
              marginBottom: "25px",
            }}
          />
        </Box>
        <Box
          className="serviciosCardsContainer"
          sx={{
            display: "flex",
            // justifyContent: "center",
            gap: "15px",
            margin: "20px auto",
            marginLeft:"50px",
            width: "90vw",
            overflowX:"scroll",
            position:"relative",
            left:"-30px",
            // justifyContent:"center"
          }}
        >

          <Link to="/piletalibre">
            <CardServicios
              image={"/assets/PiletaLibre.png"}
              text={"Pileta libre"}
            />
          </Link>
          <Link to="/clases">
            <CardServicios image={"/assets/Clases.png"} text={"Clases"} />
          </Link>
          <Link to="/relax">
            <CardServicios image={"/assets/Relax.png"} text={"Relax"} />
          </Link>
          <Link to="/relax">
            <CardServicios image={"/assets/Relax.png"} text={"Relax"} />
          </Link>
          <Link to="/relax">
            <CardServicios image={"/assets/Relax.png"} text={"Relax"} />
          </Link>
        
          </Box>
      </Box>

      <Box className="inicioBoxFlexbox">
        <Box
          sx={{
            padding: "0 30px",
            textAlign: "center",
            marginTop:"5vh"
          }}
          className="horariosInicio"
        >
          <Typography variant="h3" color={"black"} fontSize={"24px"}>
            Pensamos en vos
          </Typography>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "black",
              margin: "5px auto",
              width: "30%",
              marginBottom: "25px",
            }}
          />
          <Typography variant="body1" color={"black"} sx={{ margin: "5px 0" }}>
            Coordinamos los turnos teniendo en cuenta tus necesidades y
            preferencias, por eso solo tomamos reservas a través de Whatsapp.
          </Typography>
        <Box sx={{display:"flex", justifyContent:"center", margin:"5vh auto"}}>
          <WhatsappButton  text="Quiero reservar" />
        </Box>
        </Box>
        <Box className="horariosInicio">
          <CardBlue>
            <Typography variant="h3" color={"white"} fontSize={"20px"}>
              Horarios
            </Typography>
            <Divider
              light
              variant="middle"
              sx={{ bgcolor: "white", margin: "5px 0" }}
            />
            <Typography
              variant="body1"
              color={"white"}
              sx={{ margin: "5px 0" }}
            >
              Martes a sábado de 15h a 20h.
            </Typography>
            <Typography
              variant="body1"
              color={"white"}
              sx={{ margin: "5px 0" }}
            >
              Horarios de atención por Whatsapp: de 8h a 21h.
            </Typography>
          </CardBlue>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionX: "right",
          padding: "30px",
          width:"100vw"
        }}
        className="regalaContainer"
      >
        <Typography variant="h3" color={"white"} fontSize={"20px"}>
          Regala una experiencia
        </Typography>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "white",
            margin: "5px 0",
            width: "30%",
            height: "2px",
            marginBottom: "25px",
          }}
        />
        <Typography variant="body1" color={"white"} sx={{ margin: "15px 0" }} className="regalaParrafo">
          Ofrecé relajación y serenidad con un voucher de acceso al hidromasaje
          y sauna, brindando un momento de calma y reconexión.
        </Typography>
        <WhatsappButton text="Quiero un voucher" />
      </Box>

      <Box sx={{ width: "85vw", margin: "20px auto", padding: "8px 16px" }}>
        <Typography variant="h3" color={"black"} fontSize={"24px"}>
          A metros del mar
        </Typography>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "black",
            margin: "5px 0",
            width: "30%",
            marginBottom: "25px",
          }}
        />
        <Typography variant="body1" color={"black"}>
        Nos ubicas en el balneario El Cóndor, a metros de la playa. La proximidad al mar permite fusionar naturalmente las actividades que ofrecemos en nuestras instalaciones con los beneficios curativos que brinda la presencia del óceano.
Tras una vista al Mojón te invitamos a culminar tu  experiencia con un paseo por la playa. . 
        </Typography>
      </Box>
      <Box sx={{ width: "90vw", margin: "20px auto", padding: "8px 16px" }}>
        <Typography
          variant="h3"
          color={"black"}
          fontSize={"24px"}
          sx={{ marginBottom: "20px" }}
        >
          ¿Como llegar al Mojón?
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12034.32445461527!2d-62.8354208!3d-41.0562886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95f68005016b6a3f%3A0xe5aaaa099869a74d!2sPileta%20Moj%C3%B3n%20del%20Faro!5e0!3m2!1ses-419!2sec!4v1695066329365!5m2!1ses-419!2sec"
          style={{ border: 0, height: "40vh", width: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};
