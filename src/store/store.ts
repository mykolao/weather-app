import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from 'store/search';

const store = configureStore({
  reducer: { search: searchReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
