import * as React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider } from "@mui/material";

import { DesktopDiv, MobileDiv } from "../MediaQuery/ResponsiveDiv";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardAcordeon({
  imagen,
  titulo,
  subtitulo,
  texto1,
  texto2,
  precio,
  texto,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
      }}
    >
      <Card
        sx={{
          margin: "0 auto",
          width: "90vw",
          display: "flex",
          justifyContent:"center",
          flexDirection: {
            xs: "column", // Estilo para pantallas extra pequeñas
            sm: "column", // Estilo para pantallas pequeñas
            md: "column", // Estilo para pantallas medianas
            lg: "row", // Estilo para pantallas grandes
            xl: "row", // ,
          },
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={imagen}
          alt="Imagen Clases"
          className="imageCard"
          sx={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            width:{
              xs: "100%", // Estilo para pantallas extra pequeñas
              sm: "100%", // Estilo para pantallas pequeñas
              md: "100%", // Estilo para pantallas medianas
              lg: "30%", // Estilo para pantallas grandes
              xl: "30%", // ,
            }
          }}
        />
        <Box
          className="cardContent"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin:"10px",
          }}
        >
          <Box sx={{ maxWidth: "70%" }} className="cardMainContent">
            <Box>
              <Box className="cardFirstContent">
                <Typography className="cardTitle" variant="h2" sx={{ fontSize: "18px" }}>
                  {titulo}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: "14px" }}>
                  {subtitulo}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "14px" }}>
                  {texto1}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "14px" }}>
                  {texto2}
                </Typography>
              </Box>
              <Box className="boxPrice">
                <Typography variant="h5" sx={{ fontSize: "20px" }}>
                  {precio}
                </Typography>
              </Box>
            </Box>
          <Box>
            <DesktopDiv>
              <Box sx={{display:"flex", flexDirection:"column"}}>
              <Divider  
            sx={{
              bgcolor: "black",
              width: "100%",
              marginBottom: "25px",
            }}/>
              <Typography paragraph sx={{ fontSize: "16px" }}>
                {texto}
              </Typography>
              </Box>
            </DesktopDiv>
          </Box>
          </Box>
        </Box>
        <MobileDiv>
          <CardActions disableSpacing>
            <Typography>Saber mas</Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ width: "80vw" }}>
              <Typography paragraph sx={{ fontSize: "14px" }}>
                {texto}
              </Typography>
            </CardContent>
          </Collapse>
        </MobileDiv>
      </Card>
    </Box>
  );
}
