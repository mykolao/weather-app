import { RootState } from 'store/types';

export const selectLocations = (state: RootState) =>
  state.weather.locations;
