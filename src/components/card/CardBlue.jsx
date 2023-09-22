import { Box } from '@mui/material'
import React from 'react'

const CardBlue = ({children}) => {
  return (
    <Box sx={{
        backgroundColor: 'rgba(61, 116, 156, 0.9)',
        borderRadius:"30px",
        color:"white",
        width:"88%",
        margin:"20px auto",
        padding:"25px",
        boxSizing:"border-box",
        textAlign:"center"
    }}>
        {children}
    </Box>
  )
}

export default CardBlue