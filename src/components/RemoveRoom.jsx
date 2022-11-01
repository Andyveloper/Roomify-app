import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../redux/actionCreator';
import { Button } from '@mui/material';
import './remove_room.css';

const RemoveRoom = ({name, description, photo, id}) => {
  const dispatchDelete = useDispatch();

  const handleDeleteRoom = (id_room) =>{
    dispatchDelete(deleteRoom(id_room));
  }
  return (
    <>
        <div className="remove-room">
            <img src={photo} alt={name} className='remove-room__photo'/>
            <div className="remove-room__information">
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <div>
            <Button 
            type="button"
            variant="outlined"
            onClick={()=>handleDeleteRoom(id)}>
            Remove</Button> 
            </div> 
        </div>
    </>
  );
};

export default RemoveRoom

RemoveRoom.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
}

RemoveRoom.defaultProps = {
    id: undefined,
    photo: undefined,
    name: undefined,
    description: undefined,
  };