import { Fragment } from "react";
import {AppBar, Toolbar, Button, Container, Typography, Tooltip} from '@mui/material'
import { Link } from 'react-router-dom'
import {useStyles} from 'Theme/Theme';

import smLogo from 'assets/Logo2.png'

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

              <Tooltip title="로그인">
                <Button color="inherit">
                  <Link to={"login"} style={{ textDecoration: 'none' }}>
                    Login
                  </Link>
                </Button>
              </Tooltip>
              
            </Toolbar>
          </AppBar>
        </Fragment>
    );
}

export default Appbar;