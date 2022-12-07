import { Location } from 'store/weather/types';

export const compareLocations = (loc1: Location, loc2: Location) => {
  const { lat, lon } = loc1;
  const { lat: lat2, lon: lon2 } = loc2;

  const areLatsEqual = lat === lat2;
  const areLonsEqual = lon === lon2;

  return areLatsEqual && areLonsEqual;
};
