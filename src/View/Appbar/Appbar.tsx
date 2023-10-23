import { Fragment, useState } from "react";
import {Box, Menu, MenuItem, AppBar, Toolbar, Button, Container, Typography, Tooltip, IconButton} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import {useStyles} from 'Theme/Theme';


import smLogo from 'assets/Logo2.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { SignInUser, SignOutUser, UserSign } from "Reducer/LoginReducer";
import { RootState } from 'Reducer/index';

import { LoginDialogView } from "../LoginView/LoginView";

const pages = [
    
    {
      'MenuName' : '전체 만화',
      'LinkURL' : 'AllComics'
    },
    {
      'MenuName' : '장르별 만화',
      'LinkURL' : 'Hot'
    },
    {
      'MenuName' : 'ASMR',
      'LinkURL' : 'Hot'
    },
  ]
  

function Appbar() {
    const classes = useStyles();


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    //LoginDialog 출력 여부 State
    const [dialogOpen, setDialogOpen] = useState(false);
    const dialogHandleClose = () => {
      setDialogOpen(false);
    };
    const dialogHandleOpen = () => {
      setDialogOpen(true);
    };

    //Change 언젠가.....ㅠㅠㅠㅠㅠ

    const SignUser = useSelector((state:RootState) => state.SignUser);

    const dispatch = useDispatch();
    let user:UserSign = {
      ID : "kg3546549",
      accessToken : "!@#$"
    }
    
    const onSignIn = () => dispatch(SignInUser(user));
    const onSignOut = () => dispatch(SignOutUser(SignUser.accessToken));
    const navigate = useNavigate();
    
    return(
        <Box sx={{ flexGrow: 1, display: 'flex'  }}>
        <AppBar position="static" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              
              {/* <Button> */}
                {/* <Link to="/">
                  <img src={smLogo} height={20}/>
                </Link> */}
                <Typography 
                  onClick={()=>{
                    navigate('/');
                  }} 
                  sx={{
                    cursor:'pointer',
                  }}
                  fontWeight={700} 
                  fontSize={30}>
                  RISON
                </Typography>
              {/* </Button> */}
              
              {/* <Container > */}
              <Box sx={{ flexGrow: 1 }}>
              {
                pages.map((page)=> (
                  <Button 
                    variant='outlined'
                    className={classes.MenuButton}
                    
                  >
                    <Typography variant="body1" color="primary.contrastText"
                      onClick={()=>navigate(page.LinkURL)}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          opacity: [0.9, 0.8, 0.7],
                        },
                        
                      }}
                    > 
                      {page.MenuName} 
                    </Typography>
                  </Button>
                ))
              }
              </Box>

              {/* User Icon Button */}
              <IconButton aria-label="" onClick={handleClick} size="large">
                <AccountCircleIcon fontSize="large"/>
              </IconButton>

              <LoginDialogView 
                open={dialogOpen}
                onClose={dialogHandleClose}
              />
              
              

            </Toolbar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={()=>{
                    navigate('/myprofile');
                  }} >프로필
                </MenuItem>

                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                {
                  SignUser.curSignIn==false? 
                  <MenuItem color="inherit"
                    // onClick={onSignIn}
                    onClick = {dialogHandleOpen}
                  >
                    Login  
                  </MenuItem>
                   : 
                  <MenuItem color="inherit"
                    onClick={onSignOut}
                  >
                    LogOut
                  </MenuItem>
                }
              </Menu>
          </AppBar>
        </Box>
    );
}

export default Appbar;