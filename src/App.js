import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ResponsiveDrawer from './components/ResponsiveDrawer';

import Details from './pages/Details';

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
              <Route exact path="/details" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </Container>
    </>
  );
}

export default App;
