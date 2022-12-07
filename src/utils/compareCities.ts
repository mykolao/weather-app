import { CityInfo } from 'types';

export const compareCities = (c1: CityInfo, c2: CityInfo) => {
  const latEqual = c1.lat === c2.lat;
  const lonEqual = c1.lon === c2.lon;

  return latEqual && lonEqual;
};
