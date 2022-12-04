import { CityData } from 'api/city/types';

export const compareCityData = (c1: CityData, c2: CityData) => {
  const latEqual = c1.lat === c2.lat;
  const lonEqual = c1.lon === c2.lon;
  console.log(c1, c2, latEqual && lonEqual);

  return latEqual && lonEqual;
};
