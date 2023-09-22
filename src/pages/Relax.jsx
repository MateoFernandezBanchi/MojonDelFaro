import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CardAcordeon from "../components/card/CardAcordeon";
import CardBlue from "../components/card/CardBlue";
import Footer from "../components/footer/Footer";
import { GreenButton, WhatsappButton } from "../components/button/WhatsappButton";

const Relax = () => {
  return (
    <>
      <Box sx={{ margin: "15vh auto" }}>
        <CardAcordeon
          imagen={"src/assets/SaunaSeco.png"}
          titulo={"Sauna Seco"}
          profesor={"Sesión:30min"}
          horario={""}
          precio={"$1500"}
          texto={
            "Es una cabina diseñada para 4 a 6 personas, con bancos para descansar. Se utilizan hidrolatos naturales elaborados en la zona (romero, menta y eucalipto) para actuar como expectorantes. La acción del calor purifica la piel, libera toxinas, y reduce arrugas. La combinación con una ducha fría estimula el sistema linfático para disolver bloqueos circulatorios y relaja la musculatura."
          }
        />
        <CardAcordeon
          imagen={"src/assets/Pileta.png"}
          titulo={"Hidromasaje y sauna"}
          profesor={"Sesión: 1.30h"}
          horario={""}
          precio={"$2500"}
          texto={
            "Potenciá la experiencia del sauna combinandola con nuestra pileta. En ella vas a encontrar  hidromasajes  y espacio para nadar. Esta combinación no solo contribuye a mejorar la postura y liberar tensiones profundas, sino que también disuelve esas antiguas contracturas. Sumergirse en este entorno acuático brinda una tranquilidad profunda a nivel mental y emocional. Tu bienestar integral es nuestra prioridad, y esta combinación de elementos está diseñada para ofrecerte un rejuvenecimiento completo."
          }
        />

        <Box
          sx={{
            backgroundImage: `url(src/assets/RegalaExperiencia.png)`,
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
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Typography variant="body1" color={"white"} fontSize={"12px"} sx={{ width:"50%" }}>
            Ofrecé relajación y serenidad con un voucher de acceso al
            hidromasaje y sauna, brindando un momento de calma y reconexión.
          </Typography>
          <GreenButton text="Quiero un voucher" />
          </Box>
        </Box>

        <CardBlue>
          <Typography variant="h3" color={"white"} fontSize={"20px"}>
            Normas para disfrutar de nuestras instalaciones
          </Typography>
          <List sx={{ listStyle: "circle", color: "white" }}>
            <ListItem>
              Limpieza y Frescura: Antes de ingresar, asegurate de tener el
              cuerpo limpio y sin cremas ni maquillaje para mantener la pileta
              en condiciones óptimas.
            </ListItem>
            <ListItem>
              Gorro de Natación: Te recomendamos usar un gorro de natación. Si
              tenés el tuyo, genial. Si no, no te preocupes, tenemos disponibles
              en el establecimiento para tu comodidad.
            </ListItem>
            <ListItem>
              Calzado Adecuado: Es importante usar calzado de goma
              antideslizante, evitando traer polvo o arena para mantener el área
              de la pileta limpia y segura.
            </ListItem>
            <ListItem>
              Duchas Rápidas: Las duchas en el vestuario están pensadas para un
              enjuague rápido. Por favor, procura no extender tu ducha más allá
              de 5 minutos, así todos pueden disfrutar de agua caliente.
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
      </Box>
      <Footer />
    </>
  );
};

export default Relax;
