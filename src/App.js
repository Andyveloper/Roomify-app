import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ResponsiveDrawer from './components/ResponsiveDrawer';

import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const isLogged = () => {
    if (localStorage.getItem('isAuth') === 'false') {
      return (
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign_up" element={<SignUp />} />
        </Routes>
      );
    }

    return null;
  };
  return (
    <>
      <BrowserRouter>
        {isLogged()}
        <Container
          sx={{
            display: 'flex',
            mt: { xs: '5rem' },
          }}
        >

          {localStorage.getItem('isAuth') === 'true'
            ? <ResponsiveDrawer />
            : ''}

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>

        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
