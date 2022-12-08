import { RootState } from 'store/types';

export const selectLoadingStatus = (state: RootState) =>
  state.weather.isLoading;
