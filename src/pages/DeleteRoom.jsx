import React, {useEffect} from 'react'
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
  <>
  {rooms.map((room)=>(
            <RemoveRoom
            id={room.id}
            name={room.name}
            description={room.description}
            photo={room.photo}/> 
        )
        )}
  </>
  )
}

export default DeleteRoom