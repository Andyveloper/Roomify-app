import { Container } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';
import DetailsGrid from '../components/DetailsGrid';

const DetailsPage = ({ name, description, photo }) => (
  <Container maxWidth={false} disableGutters>
    <DetailsGrid
      name={name}
      description={description}
      photo={photo}
    />
  </Container>

);

DetailsPage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default DetailsPage;
