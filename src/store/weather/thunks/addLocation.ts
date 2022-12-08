import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from 'api';
import { ThunkApi } from 'store/types';
import { weatherActions } from 'store/weather/slice';
import { CityInfo } from 'types';

const typePrefix = 'Add Location';

const { getWeather, getForecast } = weatherApi;
const { addLocation: addLocationAction } = weatherActions;

export const addLocation = createAsyncThunk<void, CityInfo, ThunkApi>(
  typePrefix,
  async (cityInfo, { dispatch }) => {
    const { lat, lon } = cityInfo;
    const geo = { lat, lon };

    const currentWeather = await getWeather(geo);
    const forecast = await getForecast(geo);

    dispatch(
      addLocationAction({ ...cityInfo, currentWeather, forecast }),
    );
    return;
  },
);
