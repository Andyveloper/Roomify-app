/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddReservation = () => {
  const navigate = useNavigate();
  const rooms = useSelector((state) => state.rooms);
  const roomNames = rooms.map((room) => room.name);
  const [roomId, setRoomId] = useState(0);
  const [info, setInfo] = useState({
    room: '',
    city: '',
    date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const getId = (e) => {
    const { id } = rooms.filter((r) => r.name === e.target.value)[0];
    setInfo(
      {
        ...info,
        [e.target.name]: e.target.value,
      },
    );
    setRoomId(id);
  };

  const getFormInfo = (e) => {
    setInfo(
      {
        ...info,
        [e.target.name]: e.target.value,
      },
    );
  };

  const todayDate = new Date().toISOString().slice(0, 10);

  const url = 'https://roomifyap.herokuapp.com/rooms';
  const postReservation = async () => {
    const storageInfo = JSON.parse(localStorage.getItem('userInfo'));
    await fetch(`${url}/${roomId}/reservations`, {
      method: 'POST',
      body: JSON.stringify({
        city: info.city,
        date: info.date,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${storageInfo.token}`,
      },
    });
    navigate('/my-reservations');
  };

  return (
    <div className="reservation">
      <h1 className="form-title">Add a new reservation</h1>
      <form className="form" name="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rooms">Choose a room</label>
          <br />
          <select className="input" name="room" id="rooms" onChange={getId} value={info.room} required>
            {roomNames.map((name) => (
              <option
                key={Math.round(Math.random() * 1000)}
                value={name}
              >
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city">Choose a city</label>
          <br />
          <input className="input" type="text" name="city" id="city" onChange={getFormInfo} required />
        </div>

        <div>
          <label htmlFor="date">Choose a date</label>
          <br />
          <input
            className="input"
            type="date"
            name="date"
            id="date"
            min={todayDate}
            onChange={getFormInfo}
            required
          />
        </div>
        <input className="submit" value="Add Reservation" type="submit" onClick={postReservation} />
      </form>
    </div>
  );
};

export default AddReservation;
