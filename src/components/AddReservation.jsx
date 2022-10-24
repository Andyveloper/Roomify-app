/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AddReservation = () => {
  const data = useSelector((state) => state.reserveProperty);

  const [property, setProperty] = useState({});
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');

  const todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    setProperty(data);
  }, [property]);

  return (
    <div>
      <h1>Add a new reservation</h1>
      <div
        className="image-body"
        style={{ width: '200px', height: '200px' }}
      >
        <img
          src={property.largeImageURL}
          alt={property.type}
          className="rounded mx-auto d-block"
          style={{ width: '100%', height: '100%', cursor: 'pointer' }}
        />
      </div>
      <form className="row g-3">
        <div className="col-md-4">
          <label
            htmlFor="validationServer01"
            className="form-label"
          >
            City You Like to Reserve For
          </label>

          <select
            aria-label=".form-select-lg example"
            value={cityName}
            className={`mb-3 form-select-lg form-select ${cityName.trim() ? 'is-valid' : ''}`}
            onChange={(e) => setCityName(e.target.value)}
          >
            <option selected>Select a City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <input
            type="date"
            min={todayDate}
            className={`form-control ${date >= todayDate ? 'is-valid' : ''}`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReservation;
