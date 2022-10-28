import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRoom } from '../redux/actionCreator';

const AddRoom = () => {
const dispatchRoom = useDispatch();
const [roomArray, setRoomArray] = useState({
  name: '',
  description: '',
  photo: ''
})

const handleInputChange = (e) => {
  setRoomArray(
    {
      ...roomArray,
      [e.target.name]: e.target.value,
    }
  )
}

console.log(roomArray)

const handleSubmit = (e) => {
  e.preventDefault();
  const newRoom = {
    name: roomArray.name,
    description: roomArray.description,
    photo: roomArray.photo
  }
  dispatchRoom(addRoom(newRoom));
  setRoomArray(
    {
      name: '',
      description: '',
      photo: ''
    }
  )
}

  return (
      <div>
        <div>AddRoom</div>
        <form>
          <input 
          type="text"
          name="name"
          value={roomArray.name}
          onChange={(e)=>handleInputChange(e)} />
          <textarea 
          name="description" 
          id=""
          value={roomArray.description}
          onChange={(e)=>handleInputChange(e)} 
          cols="30" 
          rows="10">
          </textarea>
          <input 
          type="text"
          name="photo"
          value={roomArray.photo}
          onChange={(e)=>handleInputChange(e)} />
          <button
          type="button"
          onClick={handleSubmit}>Add Room</button>
        </form>
      </div>
  )
}

export default AddRoom