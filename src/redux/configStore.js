import { configureStore } from '@reduxjs/toolkit';
import { roomsReducer, reservationsReducer } from './actionCreator';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
