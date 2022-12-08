import { getLocalState } from 'store/weather/localState';
import { WeatherState } from 'store/weather/types';

const defaultState: WeatherState = {
  isLoading: false,
  locations: [],
};

export const initialState = (): WeatherState => {
  const locations = getLocalState() || [];

  return { ...defaultState, locations };
};
