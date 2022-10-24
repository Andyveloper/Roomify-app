import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Details from './pages/Details';
import Home from './pages/Home';
import AddReservation from './components/AddReservation';

function App() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          mt: { xs: '5rem' },
        }}
      >
        <ResponsiveDrawer />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/details" element={<Details />} />
              <Route exact path="/reserve" element={<AddReservation />} />
              {/* <Route exact path="/reserve" element={<Reservations />} /> */}
            </Routes>
          </BrowserRouter>
        </Container>
      </Container>
    </>
  );
}

export default App;
