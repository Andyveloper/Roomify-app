/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddReservation = () => {
  const data = useSelector((state) => state.reserveProperty);
  const url = '';
  const [property, setProperty] = useState({});

  const [userReserve, setUserReserve] = useState({
    property: data,
    cityName: '',
    date: '',
  });

  const todayDate = new Date().toISOString().slice(0, 10);

  const handleUserReserve = (e) => {
    const newData = { ...userReserve };
    newData[e.target.id] = e.target.value;
    setUserReserve(newData);
  };

  useEffect(() => {
    setProperty(data);
  }, [property]);

  const submit = (e) => {
    e.preventDefault();
    axios.post(url, {
      property: userReserve.property,
      cityName: userReserve.cityName,
      date: userReserve.date,
    })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Add a new reservation</h1>
      <div
        className="image-body"
        style={{ width: '200px', height: '200px' }}
        id=""
      >
        <img
          src={property.largeImageURL}
          alt={property.type}
          className="rounded mx-auto d-block"
          style={{ width: '100%', height: '100%', cursor: 'pointer' }}
        />
      </div>
      <form
        className="row g-3"
        onSubmit={(e) => submit(e)}
      >
        <div className="col-md-4">
          <label
            htmlFor="validationServer01"
            className="form-label"
          >
            City You Like to Reserve For
          </label>

          <select
            aria-label=".form-select-lg example"
            value={userReserve.cityName}
            id="cityName"
            onChange={(e) => handleUserReserve(e)}
            className={`mb-3 form-select-lg form-select ${userReserve.cityName.trim() ? 'is-valid' : ''}`}
          >
            <option selected>Select a City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <input
            type="date"
            min={todayDate}
            id="date"
            className={`form-control ${userReserve.date >= todayDate ? 'is-valid' : ''}`}
            value={userReserve.date}
            onChange={(e) => handleUserReserve(e)}
            required
          />

        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReservation;
