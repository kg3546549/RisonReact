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

        <Carousel height={400}>
            <Typography variant='h6'>1</Typography>
            <Typography variant='h6'>2</Typography>
            <Typography variant='h6'>3</Typography>
        </Carousel>
        <Box height={30}></Box>
        <TodayHotView/>
        <Box height={500}></Box>
      </Box>

      
    
  );
}

export default App;
