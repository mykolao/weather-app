import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from 'store/search';
import { weatherReducer } from 'store/weather';

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
