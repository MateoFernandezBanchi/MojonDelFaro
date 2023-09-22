import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

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
  profesor,
  horario,
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
          width: "80vw",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={imagen}
          alt="Imagen Clases"
          sx={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin:"10px"
          }}
        >
          <Box sx={{ maxWidth: "70%" }}>
            <Typography variant="h2" sx={{ fontSize: "18px" }}>
              {titulo}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "14px" }}>
              {profesor}
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "14px" }}>
              {horario}
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            {precio}
          </Typography>
        </Box>
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
            <Typography paragraph sx={{fontSize:"14px"}}>{texto}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
