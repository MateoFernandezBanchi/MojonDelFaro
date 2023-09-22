import { Divider, List, ListItem } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

export const MenuDrawer = () => {
  return (
    <div className='menuMobileContainer'>
        <List className='menuMobile' sx={{borderRadius:"15px"}}>
            <ListItem>
                <Link to="/">Inicio</Link> 
            </ListItem>
            <ListItem>
            <Link to="/clases">Clases</Link> 
            </ListItem>
            <ListItem>
            <Link to="/relax">Relax</Link> 
            </ListItem>
            <ListItem>
                Pileta libre
            </ListItem>
            <ListItem>
                Conocenos
            </ListItem>
            <Divider></Divider>
            <ListItem>
                Gift Card
            </ListItem>
        </List>
    </div>
  )
}
