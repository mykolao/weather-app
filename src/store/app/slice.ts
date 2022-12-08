import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'store/types';

interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: true,
};

const name = 'App';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: Action<boolean>) => {
      state.isLoading = payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = slice;
