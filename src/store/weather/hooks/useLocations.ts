import { useAppDispatch } from 'store/useAppDispatch';
import { useAppSelector } from 'store/useAppSelector';
import { selectLocations } from 'store/weather/selectors';
import { weatherActions } from 'store/weather/slice';
import { weatherThunks } from 'store/weather/thunks';
import { Location } from 'store/weather/types';
import { CityInfo } from 'types';

const { addLocation, updateLocations } = weatherThunks;

export const useLocations = () => {
  const locations = useAppSelector(selectLocations);
  const dispatch = useAppDispatch();

  const addCity = (value: CityInfo) => {
    dispatch(addLocation(value));
  };

  const updateWeather = () => {
    dispatch(updateLocations());
  };

  const removeCity = (value: Location) => {
    dispatch(weatherActions.removeLocation(value));
  };

  return {
    locations,
    addCity,
    removeCity,
    updateWeather,
  };
};
