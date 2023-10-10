import { Box, Typography } from '@mui/material'
import React from 'react'

const CardServicios = ({image, text}) => {
  return (
    <Box sx={{
        backgroundImage:`url(${image})`,
        width:"30vw",
        maxWidth:"150px",
        height:"15vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"end"
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
        color: "white"
        }}>
        {text}
    </Typography>
        </Box>
    </Box>
  )
}

export default CardServicios