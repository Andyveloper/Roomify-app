import { configureStore } from '@reduxjs/toolkit';
import { roomsReducer } from './actionCreator';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});

export default store;
