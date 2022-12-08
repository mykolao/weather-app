import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from 'api';
import { ThunkApi } from 'store/types';
import { weatherActions } from 'store/weather/slice';
import { Location } from 'store/weather/types';

const typePrefix = 'Update Weather Data';

const { getWeather, getForecast } = weatherApi;
const { setLocations } = weatherActions;

export const updateLocations = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { getState, dispatch }) => {
    const { locations } = getState().weather;

    const fetchArray = locations.map(async (location) => {
      const { lat, lon } = location;
      const geo = { lat, lon };

      const currentWeather = await getWeather(geo);
      const forecast = await getForecast(geo);

      const updatedLocation: Location = {
        ...location,
        currentWeather,
        forecast,
      };

      return updatedLocation;
    });

    const updatedLocations = await Promise.all(fetchArray);
    dispatch(setLocations(updatedLocations));
  },
);
