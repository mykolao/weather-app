import { CityInfo } from 'types';

export const compareCities = (c1: CityInfo, c2: CityInfo) => {
  const namesEqual = c1.name === c2.name;
  const countriesEqual = c1.country === c2.country;
  const latEqual = c1.lat === c2.lat;
  const lonEqual = c1.lon === c2.lon;

  return latEqual && lonEqual && namesEqual && countriesEqual;
};
