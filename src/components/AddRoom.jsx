import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
    );
  };

  return (
    <div className="container">
      <div>Add Room</div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <form className="form__container">
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
                id="standard-basic"
                label="Room Name"
                variant="standard"
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
                id="standard-multiline-flexible"
                label="Room Description"
                multiline
                rows={4}
                name="description"
                value={roomArray.description}
                onChange={(e) => handleInputChange(e)}
                variant="standard"
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
                id="standard-basic"
                label="Room URL"
                variant="standard"
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
                variant="outlined"
                onClick={handleSubmit}
              >
                Add Room

              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default AddRoom;
