import { CityData } from 'api/city/types';

export const transformCityData = (data: CityData[]) => {
  const result = data.map(({ country, name, lat, lon }) => ({
    country,
    name,
    lat,
    lon,
  }));

  return result;
};
