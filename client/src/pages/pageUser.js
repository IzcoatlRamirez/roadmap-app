import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import MenuMain from '../components/MenuMain';
// import { useAuth } from '../context/AuthContext';

export default function PageUser() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [nameUser, setNameUser] = useState("");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const {user} = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      const user = sessionStorage.getItem('user');
      try {
        const response = await axios.post("http://localhost:3000/api/user", {
          id: user
        });

        const data = response.data;
        setNameUser(data[0].email);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []); 


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Personaliza el ícono del menú aquí */}
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido <Typography component="span">{nameUser}</Typography>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <MenuMain></MenuMain>


    </Box>
  );
}
