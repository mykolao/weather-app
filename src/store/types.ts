import { PayloadAction } from '@reduxjs/toolkit';
import store from 'store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Action<T> = PayloadAction<T>;

export interface ThunkApi {
  state: RootState;
  dispatch: AppDispatch;
}
