import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@mui/material';
import { displayReservations } from '../redux/actionCreator';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(displayReservations());
  }, [dispatch]);

  function container() {
    return (
      <Container maxWidth={false}>
        <CircularProgress />
      </Container>
    );
  }
  return (
    <>
      {!reservations.length ? (
        container()
      ) : (
        <Container maxWidth={false}>
          <h1>My Reservations</h1>
          {reservations.map((reservation) => (
            <React.Fragment key={reservation.id}>
              <div style={{ border: '1px solid black' }}>
                <h2>
                  Reservation #
                  {reservation.id}
                </h2>
                {rooms.map((room) => {
                  const singleRoom = room;
                  if (reservation.room_id === singleRoom.id) {
                    return (
                      <h4>
                        Room:
                        {singleRoom.name}
                      </h4>
                    );
                  }
                  return null;
                },
                )}
                <h4>
                  City:
                  {reservation.city}
                </h4>
                <h4>
                  Date:
                  {reservation.date}
                </h4>
              </div>
            </React.Fragment>
          ))}
        </Container>
      )}
    </>
  );
}

export default MyReservations;
