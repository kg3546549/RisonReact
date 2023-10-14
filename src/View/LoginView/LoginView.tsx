import * as React from 'react';
import {Dialog, DialogTitle, Box, Container, Typography, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Paper} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { SignInUser, SignOutUser, UserSign } from "Reducer/LoginReducer";
import { RootState } from 'Reducer/index';

import {LockOutlined} from '@mui/icons-material/';
import { warning } from '@remix-run/router/dist/history';
import { red } from '@mui/material/colors';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialogView(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return(
    <Dialog
      onClose={handleClose} open={open}
    >
      <LoginView onClose={onClose} open={open} />
    </Dialog>
  );
  

}

export function LoginView(props: SimpleDialogProps) {

  const [resultString, setResultString] = React.useState('');

  const { onClose, open } = props;

  const SignUser = useSelector((state:RootState) => state.SignUser);
  const dispatch = useDispatch();


  const onSignIn = (user:UserSign) => dispatch(SignInUser(user));
  const onSignOut = () => dispatch(SignOutUser(SignUser.accessToken));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      ID: data.get('id'),
      password: data.get('password'),
    };
    console.log(userData);

    if(userData.ID != 'asdf' || userData.password != 'asdf') {
      console.log("Login Fail!!!");
      setResultString("사용자 정보를 찾을 수 없습니다.");
      return;
    }

    onSignIn(
      {
        ID : userData.ID,
        accessToken : "!@#$",
      }
    );
    
    onClose();

  };

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            margin: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="정보 기억하기"
            />
            <Typography variant="caption" color={red[900]} fontWeight={900}>
              {resultString}
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="secondary">
                  비밀번호를 잃어버렸나요?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="secondary">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    // </ThemeProvider>
  );
} 