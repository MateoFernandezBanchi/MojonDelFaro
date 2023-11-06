import { Box, Typography } from '@mui/material';
import React from 'react';
import "./styles.css";

const CardServicios = ({image, text}) => {
  return (
    <Box 
    className="cardServicios"
    sx={{
        backgroundImage:`url(${image})`,
        backgroundSize:"cover",
        width:"35vw",
        maxWidth:"250px",
        height:"22vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"end",
        borderTopLeftRadius:"20px",
        borderTopRightRadius:"20px",
    }}>
        <Box sx={{
        backgroundColor:"rgba(97, 179, 238, 1)",
        borderTopLeftRadius:"35px",
        height:"8vh",
        display:"flex",
        justifyContent:"end",
        alignItems:"center",
        padding:"5px"
    }}>
    <Typography sx={{
        color: "white",
        textAlign:"right",
        padding:"10px"
        }}>
        {text}
    </Typography>
        </Box>
    </Box>
  )
}

export default CardServicios