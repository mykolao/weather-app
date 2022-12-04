import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'store/search/initialState';
import { Action } from 'store/types';
import { CityInfo } from 'types';

const name = 'Search';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setSearchResults: (state, { payload }: Action<CityInfo[]>) => {
      state.searchResults = payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
});

export const { reducer: searchReducer, actions: searchActions } =
  slice;
