import * as React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MUILink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';

import { LoginContext } from '../auth/UserAuth';

const Copyright = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <MUILink color="inherit" href="https://roomifyap.herokuapp.com/">
      Roomify
    </MUILink>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);

const theme = createTheme();

const Login = () => {
  const [user, setUser] = useState({
    user: {
      email: '',
      password: '',
    },
    error: false,
    errorMsg: 'User or password is wrong',
  });
  const handlerChange = async (e) => {
    await setUser({
      user: {
        ...user.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  // eslint-disable-next-line
  const { isAuth, setAuth } = useContext(LoginContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'https://roomifyap.herokuapp.com/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: user.user.email,
          password: user.user.password,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const userInfo = {
      ...data.data,
      token: response.headers.get('Authorization'),
    };
    if (response.status === 200) {
      setAuth(localStorage.setItem('isAuth', true));
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      window.location.href = '/';
    }

    return data;
  };

  return (
    <div className="login-container">
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handlerChange}
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
                  onChange={handlerChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {!localStorage
                  ? <Alert severity="error">User or Password is incorrect</Alert>
                  : ' '}
                <Grid container>

                  <Grid item>
                    <Link to="/sign_up" variant="body2">
                      <p>Don&apos;t have an account? Sign Up</p>
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Login;
