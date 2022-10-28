import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress, Card, CardMedia, Grid } from '@mui/material';
import { displayReservations } from '../redux/actionCreator';
import './MyReservations.css'

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
        <div class="my-reservations">
            <h1>My Reservations</h1>
            <Grid
            container
            rowSpacing={4}
          >
            {reservations.map((reservation) => (
              <React.Fragment key={reservation.id}>
                <Grid
                  item
                  sx={{
                  display: 'flex',
                  justifyContent: 'center'
                  }}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                >
                  <Card sx={{
                    maxWidth: 500
                  }}
                  >
                  <div id="reservation">
                    <h2>
                      Reservation #
                      {reservation.id}
                    </h2>
                    {rooms.map((room) => {

                      const singleRoom = room;
                      if (reservation.room_id === singleRoom.id) {
                        return (
                          <>
                            <CardMedia
                              component="img"
                              height="140"
                              image={`${singleRoom.photo}`}
                              alt="Room"
                            />
                            <h4>
                              Room:
                              {singleRoom.name}
                            </h4>
                          </>
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
                  </Card>
                </Grid>
              </React.Fragment>
            
            )
        )}
        </Grid>
        </div>
      )}
    </>
  );
}

export default MyReservations;
