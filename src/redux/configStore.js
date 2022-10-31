import { configureStore } from '@reduxjs/toolkit';
import { roomsReducer, reservationsReducer, idReducer } from './actionCreator';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    reservations: reservationsReducer,
    roomId: idReducer
  },
});

export default store;
