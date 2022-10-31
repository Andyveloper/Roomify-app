import React from 'react'
import { useSelector } from 'react-redux';
import RemoveRoom from '../components/RemoveRoom';


const DeleteRoom = () => {
  const rooms = useSelector((state) => state.rooms);
  console.log("delete", rooms)
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