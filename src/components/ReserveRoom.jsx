/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ReserveRoom = () => {
  const navigate = useNavigate();
  const roomId = useSelector((state) => state.roomId);
  const [info, setInfo] = useState({
    city: '',
    date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const url = 'http://roomifyap.herokuapp.com/rooms';

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
      <h1 className="form-title">Reserve room</h1>
      <form className="form" name="form" onSubmit={handleSubmit}>
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

export default ReserveRoom;
