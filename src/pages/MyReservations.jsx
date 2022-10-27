import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayRooms, displayReservations } from '../redux/actionCreator';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  useEffect(() => {
    dispatch(displayRooms());
    dispatch(displayReservations());
  }, [dispatch]);
  return (
    <>
      {!reservations.length ? (<div>Loading...</div>)
        : (
          <>
          <h1>My Reservations</h1>
              {reservations.map((reservation) => (
                <React.Fragment key={reservation.id}>
                <div>{reservation.city}</div>
                </React.Fragment>
              ))}
          </>
        )}
    </>
  )
}

export default MyReservations;