import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addRoom } from '../redux/actionCreator';
import './add_room.css';

const AddRoom = () => {
  const dispatchRoom = useDispatch();
  const [roomArray, setRoomArray] = useState({
    name: '',
    description: '',
    photo: '',
  });

  const handleInputChange = (e) => {
    setRoomArray(
      {
        ...roomArray,
        [e.target.name]: e.target.value,
      },
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      name: roomArray.name,
      description: roomArray.description,
      photo: roomArray.photo,
    };

    dispatchRoom(addRoom(newRoom));
    setRoomArray(
      {
        name: '',
        description: '',
        photo: '',
      },
      alert('Your room has been created'),
    );
  };
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#000',
        darker: '#000',
      },
      neutral: {
        main: '#fff',
        contrastText: '#000',
      },
    },
  });

  return (

    <div className="container">
      <h2 className="container__title">Add Room</h2>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <form className="form__container">
          <ThemeProvider theme={theme}>
            <Grid
              container
              justify="center"
              spacing={2}
              xs={12}
            >
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
              >

                <TextField
                  className="textfield__input"
                  id="standard-basic"
                  label="Room Name"
                  variant="outlined"
                  color="primary"
                  name="name"
                  value={roomArray.name}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  required
                />

              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
              >
                <TextField
                  className="textfield__input"
                  id="standard-multiline-flexible"
                  label="Room Description"
                  multiline
                  rows={4}
                  name="description"
                  value={roomArray.description}
                  onChange={(e) => handleInputChange(e)}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <TextField
                  className="textfield__input"
                  id="standard-basic"
                  label="Room URL"
                  variant="outlined"
                  name="photo"
                  value={roomArray.photo}
                  onChange={(e) => handleInputChange(e)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid
                item
              >
                <Button
                  type="button"
                  color="neutral"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Add Room

                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </form>
      </Grid>
    </div>
  );
};

export default AddRoom;
