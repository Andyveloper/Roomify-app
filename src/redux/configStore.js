import { configureStore } from '@reduxjs/toolkit';
import { propertyToAddReducer } from './actionCreator';

const store = configureStore({
  reducer: {
    reserveProperty: propertyToAddReducer,
  },
});

export default store;
