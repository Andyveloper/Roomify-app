import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../redux/actionCreator';

const RemoveRoom = ({name, description, photo, id}) => {
  const dispatchDelete = useDispatch();

  const handleDeleteRoom = (id_room) =>{
    dispatchDelete(deleteRoom(id_room));
  }
  return (
    <>
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{description}</p>
            <img src={photo} alt={name} className='room-photo'/>
            <button type="button" onClick={()=>handleDeleteRoom(id)}>Remove</button>    
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