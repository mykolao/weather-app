import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from 'api';
import { ThunkApi } from 'store/types';
import { selectLocation } from 'store/weather/selectors';
import { weatherActions } from 'store/weather/slice';
import { Location } from 'store/weather/types';
import { Geo } from 'types';

const typePrefix = 'Update Weather Data';

const { getWeather, getForecast } = weatherApi;
const { updateLocation: updateLocationAction, setLoadingStatus } =
  weatherActions;

export const updateLocation = createAsyncThunk<void, Geo, ThunkApi>(
  typePrefix,
  async (geo, { getState, dispatch }) => {
    const location = selectLocation(geo)(getState());

    dispatch(setLoadingStatus(true));

    const currentWeather = await getWeather(geo);
    const forecast = await getForecast(geo);

    const updatedLocation: Location = {
      ...location,
      currentWeather,
      forecast,
    };

    dispatch(updateLocationAction(updatedLocation));
    dispatch(setLoadingStatus(false));
  },
);
