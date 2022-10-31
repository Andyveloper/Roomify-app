import React from 'react';
import { Grid, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import DetailsTable from './DetailsTable';

function DetailsGrid({ name, description, photo }) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="nowrap"
      columns={12}
      sx={{
        flexDirection: {
          md: 'column',
          lg: 'row',
        },
      }}

    >
      <Grid
        item
        md={6}
        lg={7}
        sx={{
          display: {
            xs: 'none',
            md: 'inline',
          },
        }}

      >
        <Box sx={{
          heigth: {
            md: 'inherit',
            lg: '100vh',
          },
        }}
        >
          <img className="room-img" src={photo} alt="room" />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        lg={5}
        width="100%"
        minWidth="250px"
      >
        <Box
          sx={{
            m: '2rem',
          }}
        >
          <h2>{name}</h2>
          <p>{description}</p>

          <DetailsTable />
        </Box>
      </Grid>

    </Grid>
  );
}

DetailsGrid.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default DetailsGrid;
