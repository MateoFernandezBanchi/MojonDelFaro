import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export const MenuDrawer = () => {
  return (
    <div className='menuMobileContainer'>
        <List className='menuMobile' sx={{borderRadius:"15px"}}>
            <ListItem>
                <Link to="/" style={{color:"black"}}>Inicio</Link> 
            </ListItem>
            <ListItem>
            <Link to="/clases" style={{color:"black"}}>Clases</Link> 
            </ListItem>
            <ListItem>
            <Link to="/relax" style={{color:"black"}}>Relax</Link> 
            </ListItem>
            <ListItem>
            <Link to="/piletalibre" style={{color:"black"}}>Pileta Libre</Link> 
            </ListItem>
            <ListItem>
            <Link to="/conocenos" style={{color:"black"}}>Conocenos</Link> 
            </ListItem>
            <Divider sx={{bgColor:"blue"}}></Divider>
            <ListItem >
            <Link to="/" >
                <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
                <Typography color="rgba(97, 179, 238, 1)">
                Gift Card 
                </Typography>
                <CardGiftcardIcon sx={{color:"rgba(198, 166, 100, 1)"}}/>
                </Box>
                </Link> 
            </ListItem>
        </List>
    </div>
  )
}
