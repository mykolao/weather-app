import { CityInfo } from 'types';

export const transformCityData = (data: CityInfo[]) => {
  const result = data.map(({ country, name, lat, lon }) => {
    const transformed: CityInfo = {
      country,
      name,
      lat,
      lon,
    };

    return transformed;
  });

  return result;
};
