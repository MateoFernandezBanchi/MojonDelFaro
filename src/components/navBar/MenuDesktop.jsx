import { Box, List, ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

const MenuDesktop = () => {
  return (
    <Box>
        <List sx={{display:"flex", flexDirection:"row"}} className="listMenuDesktop">
            <ListItem  > 
                <Link to="/clases">Clases</Link>
            </ListItem>
            <ListItem>
                <Link to="/relax">Relax</Link>
            </ListItem>
            <ListItem>
                <Link to="/piletalibre">Pileta Libre</Link>
            </ListItem>
            <ListItem>
                <Link to="/conocenos">Conocenos</Link>
            </ListItem>
        </List>
    </Box>
  )
}

export default MenuDesktop