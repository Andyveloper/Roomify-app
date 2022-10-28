import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Details from './pages/Details';
import Rooms from './pages/Rooms';
import AddReservation from './components/AddReservation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CreateRoom from './pages/CreateRoom';
import PrivateRoute from './components/PrivateRoute';
import MyReservations from './components/MyReservations';

function App() {
  const isLogged = () => {
    if (localStorage.getItem('isAuth') === 'false' || !localStorage.getItem('isAuth')) {
      return (
        <Routes>
          <Route exact path="/" element={<Login />} />
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
          maxWidth={false}
          sx={{
            display: 'flex',
            position: 'relative',
            mt: { xs: '56px', sm: '64px' },
            padding: '0',
          }}
          disableGutters
        >

          {localStorage.getItem('isAuth') === 'true'
            ? <ResponsiveDrawer />
            : ''}

          <Routes>
            <Route exact path="/" element={<Rooms />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/create-rooms" element={<CreateRoom />} />
            </Route>
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/reserve" element={<AddReservation />} />
            <Route exact path="/my-reservations" element={<MyReservations />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
