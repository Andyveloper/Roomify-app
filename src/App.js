import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

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
import { displayRooms } from './redux/actionCreator';
import DeleteRoom from './pages/DeleteRoom';
import ReserveRoom from './components/ReserveRoom';

function App() {
  const rooms = useSelector((state) => state.rooms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayRooms());
  }, [dispatch]);

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
            {rooms.map((room) => (
              <Route
                key={room.name}
                path={`/rooms/${room.id}/details`}
                element={(
                  <Details
                    name={room.name}
                    description={room.description}
                    photo={room.photo}
                    id={room.id}
                  />
)}
              />
            ))}

            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/create-room" element={<CreateRoom />} />
              <Route exact path="/delete-room" element={<DeleteRoom />} />
            </Route>
            <Route exact path="/reserve-room" element={<ReserveRoom />} />
            <Route exact path="/reserve" element={<AddReservation />} />
            <Route exact path="/my-reservations" element={<MyReservations />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
