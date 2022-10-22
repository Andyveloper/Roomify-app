import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AddReservation = () => {
  const data = useSelector((state) => state.reserveProperty);
  const [property, setProperty] = useState({});

  useEffect(() => {
    setProperty(data);
  }, [property]);

  //   console.log(property);
  return (
    <div>
      <img src={property.largeImageURL} alt={property.type} />
    </div>
  );
};

export default AddReservation;
