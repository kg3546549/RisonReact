import { Fragment } from "react";
import {AppBar, Toolbar, Button, Container, Typography, Tooltip} from '@mui/material'
import { Link } from 'react-router-dom'
import {useStyles} from 'Theme/Theme';


import smLogo from 'assets/Logo2.png'
import { useSelector, useDispatch } from 'react-redux';
import { SignInUser, SignOutUser, UserSign } from "Reducer/LoginReducer";
import { RootState } from 'Reducer/index';


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

    //Change 언젠가.....ㅠㅠㅠㅠㅠ

    const SignUser = useSelector((state:RootState) => state.SignUser);

    const dispatch = useDispatch();
    let user:UserSign = {
      ID : "kg3546549",
      accessToken : "!@#$"
    }
    
    const onSignIn = () => dispatch(SignInUser(user));
    const onSignOut = () => dispatch(SignOutUser(SignUser.accessToken));
    
    return(
        <Fragment>
        <AppBar position="static" elevation={0}>
            <Toolbar>
              {/* <Container > */}
              {/* <Button> */}
                {/* <Link to="/">
                  <img src={smLogo} height={20}/>
                </Link> */}
                <Typography fontWeight={700} fontSize={30}>
                  RISON
                </Typography>
              {/* </Button> */}
              {
                pages.map((page)=> (
                  <Button 
                    variant='outlined'
                    className={classes.MenuButton}
                  >
                    <Link to={page.LinkURL} style={{ textDecoration: 'none' }}>
                      <Typography variant="subtitle2" color="primary.contrastText"> 
                        {page.MenuName} 
                      </Typography>
                    </Link>
                  </Button>
                ))
              }
              {/* </Container> */}

              

                {
                  
                  SignUser.curSignIn==false? 
                  <Button color="inherit"
                    onClick={onSignIn}
                  >
                    Login
                  </Button>
                   : 
                  <Button color="inherit"
                    onClick={onSignOut}
                  >
                    LogOut
                  </Button>
                }

              
              
            </Toolbar>
          </AppBar>
        </Fragment>
    );
}

export default Appbar;