import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { deleteRoom } from '../redux/actionCreator';
import './remove_room.css';

const RemoveRoom = ({
  name, description, photo, id,
}) => {
  const dispatchDelete = useDispatch();

  const handleDeleteRoom = (idRoom) => {
    dispatchDelete(deleteRoom(idRoom));
  };
  return (
    <>
      <div className="remove-room">
        <div>
          <img src={photo} alt={name} className="remove-room__photo" />
        </div>
        <div>
          <div className="remove-room__information">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div>
            <Button
              type="button"
              variant="outlined"
              onClick={() => handleDeleteRoom(id)}
            >
              Remove

            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveRoom;

RemoveRoom.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

RemoveRoom.defaultProps = {
  id: undefined,
  photo: undefined,
  name: undefined,
  description: undefined,
};
