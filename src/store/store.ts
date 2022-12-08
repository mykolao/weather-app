import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'store/app';
import { searchReducer } from 'store/search';
import { weatherReducer } from 'store/weather';

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    weather: weatherReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
