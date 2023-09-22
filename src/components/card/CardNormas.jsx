import React from 'react'
import CardBlue from './CardBlue'
import { List, ListItem, Typography } from '@mui/material'

const CardNormas = () => {
  return (
    <div>
         <CardBlue>
        <Typography variant="h3" color={"white"} fontSize={"20px"}>
          Normas para disfrutar de nuestras instalaciones
        </Typography>
        <List sx={{listStyle:"circle", color:"white"}}>
          <ListItem >
            Limpieza y Frescura: Antes de ingresar, asegurate de tener el cuerpo
            limpio y sin cremas ni maquillaje para mantener la pileta en
            condiciones óptimas.
          </ListItem>
          <ListItem>
            Gorro de Natación: Te recomendamos usar un gorro de natación. Si
            tenés el tuyo, genial. Si no, no te preocupes, tenemos disponibles
            en el establecimiento para tu comodidad.
          </ListItem>
          <ListItem>
            Calzado Adecuado: Es importante usar calzado de goma antideslizante,
            evitando traer polvo o arena para mantener el área de la pileta
            limpia y segura.
          </ListItem>
          <ListItem>
            Duchas Rápidas: Las duchas en el vestuario están pensadas para un
            enjuague rápido. Por favor, procura no extender tu ducha más allá de
            5 minutos, así todos pueden disfrutar de agua caliente.
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
    </div>
  )
}

export default CardNormas