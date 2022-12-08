import { Location } from 'store/weather/types';

const KEY = 'APP_LOCATIONS';

export const getLocalState = () => {
  const item = localStorage.getItem(KEY);

  if (!item) return null;

  return JSON.parse(item) as Location[];
};

export const setLocalState = (locations: Location[]) => {
  const item = JSON.stringify(locations);
  localStorage.setItem(KEY, item);
};
