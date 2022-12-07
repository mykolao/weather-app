import { CityInfo } from 'types';

export const getCityByQuery = (cities: CityInfo[], query: string) => {
  const [queryName, queryCountry] = query.split(', ');

  if (!queryName || !queryCountry) return null;

  const res = cities.find(
    ({ name, country }) =>
      name === queryName && country === queryCountry,
  );

  return res ? res : null;
};
