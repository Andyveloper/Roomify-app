import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RemoveRoom from '../components/RemoveRoom';
import { displayRooms } from '../redux/actionCreator';

const DeleteRoom = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayRooms());
  }, [dispatch]);

  return (
    <div className="remove-room__container">
      {rooms.map((room) => (
        <RemoveRoom
          key={Math.round(Math.random() * 1000)}
          id={room.id}
          name={room.name}
          description={room.description}
          photo={room.photo}
        />
      ))}
    </div>
  );
};

export default DeleteRoom;
