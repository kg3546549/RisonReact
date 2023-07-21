import './App.css';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Paper from '@mui/material/Paper'
import Carousel from 'react-material-ui-carousel';

import TodayHotView from './View/MainView/TodayHotView';

import AdvImg1 from './assets/Advertising1.png'
import AdvImg2 from './assets/Advertising2.png'
import Container from '@mui/material/Container'
import { makeStyles, createStyles } from "@mui/material/styles";
import { ClassNames } from '@emotion/react';

const pages = ['머시기', '머시기2', '3']



function App() {

  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton 
              aria-label="Menu"
              size="large"
              edge="start"
              color='inherit'
              sx={{mr:2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>
              Rison
            </Typography>

            <Menu 
              id="menu-appbar"  

              keepMounted open={Boolean()} 
            >
            {
              pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
              ))
            }
            </Menu>


            <Tooltip title="로그인">
              <Button color="inherit">Login</Button>
            </Tooltip>
            
          </Toolbar>
        </AppBar>

        <Carousel height={500}>
          <img 
              src={AdvImg1} height={500}
              style={{
                margin : 'auto',
                position : 'absolute',
                top: '50%',
                left : '50%',
                transform : "translate(-50%,-50%)"
              }}
            />
            <img 
              src={AdvImg2} height={500}
              style={{
                width : '100%',
                margin : 'auto',
                position : 'absolute',
                top: '50%',
                left : '50%',
                transform : "translate(-50%,-50%)"
              }}
            />
            <img 
              src={AdvImg1} height={500}
              style={{
                margin : 'auto',
                position : 'absolute',
                top: '50%',
                left : '50%',
                transform : "translate(-50%,-50%)"
              }}
            />   
        </Carousel>
        <Box height={30}></Box>
        <TodayHotView/>
        <Box height={500}></Box>
      </Box>

      
    
  );
}

export default App;
